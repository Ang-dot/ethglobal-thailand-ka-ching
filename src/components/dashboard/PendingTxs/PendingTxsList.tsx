import React, { ReactElement } from 'react'
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { getLatestTransactions } from '@/utils/tx-list'
import { Box, Typography } from '@mui/material'
import { Card, ViewAllLink } from '../styled'
import PendingTxListItem from './PendingTxListItem'
import useTxQueue from '@/hooks/useTxQueue'
import { AppRoutes } from '@/config/routes'
import css from './styles.module.css'
import { isSignableBy, isExecutable } from '@/utils/transaction-guards'
import useWallet from '@/hooks/wallets/useWallet'
import useSafeInfo from '@/hooks/useSafeInfo'
import { useRecoveryQueue } from '@/features/recovery/hooks/useRecoveryQueue'
import type { SafeInfo, Transaction } from '@safe-global/safe-gateway-typescript-sdk'
import type { RecoveryQueueItem } from '@/features/recovery/services/recovery-state'
import EthLoader from '@/components/common/EthLoader'
import classnames from 'classnames'

const PendingRecoveryListItem = dynamic(() => import('./PendingRecoveryListItem'))

const MAX_TXS = 4

const EmptyState = () => {
  return (
    <Card>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
        <LoadingState />

        <Typography data-testid="no-tx-text" variant="body1" color="primary.light">
          This Safe Account has no queued transactions
        </Typography>
      </Box>
    </Card>
  )
}

const LoadingState = () => (
  <div className="h-[200px] w-full">
    <EthLoader id="loader-5" />
  </div>
)

function getActionableTransactions(txs: Transaction[], safe: SafeInfo, walletAddress?: string): Transaction[] {
  if (!walletAddress) {
    return txs
  }

  return txs.filter((tx) => {
    return isSignableBy(tx.transaction, walletAddress) || isExecutable(tx.transaction, walletAddress, safe)
  })
}

export function _getTransactionsToDisplay({
  recoveryQueue,
  queue,
  walletAddress,
  safe,
}: {
  recoveryQueue: RecoveryQueueItem[]
  queue: Transaction[]
  walletAddress?: string
  safe: SafeInfo
}): [RecoveryQueueItem[], Transaction[]] {
  if (recoveryQueue.length >= MAX_TXS) {
    return [recoveryQueue.slice(0, MAX_TXS), []]
  }

  const actionableQueue = getActionableTransactions(queue, safe, walletAddress)
  const _queue = actionableQueue.length > 0 ? actionableQueue : queue
  const queueToDisplay = _queue.slice(0, MAX_TXS - recoveryQueue.length)

  return [recoveryQueue, queueToDisplay]
}

const PendingTxsList = (): ReactElement | null => {
  const router = useRouter()
  const { page, loading } = useTxQueue()
  const { safe } = useSafeInfo()
  const wallet = useWallet()
  const queuedTxns = useMemo(() => getLatestTransactions(page?.results), [page?.results])
  const recoveryQueue = useRecoveryQueue()

  const [recoveryTxs, queuedTxs] = useMemo(() => {
    return _getTransactionsToDisplay({
      recoveryQueue,
      queue: queuedTxns,
      walletAddress: wallet?.address,
      safe,
    })
  }, [recoveryQueue, queuedTxns, wallet?.address, safe])

  const totalTxs = recoveryTxs.length + queuedTxs.length

  const queueUrl = useMemo(
    () => ({
      pathname: AppRoutes.transactions.queue,
      query: { safe: router.query.safe },
    }),
    [router.query.safe],
  )

  return (
    <div className="pixel-card hover:scale-[1.02] p-6 h-full space-y-4">
      <div className="flex flex-row w-full items-center">
        <h3 className="text-[#292F32] font-bold text-[16px] sm:text-[18px] md:text-[20px] flex-grow">
          Pending Transactions
        </h3>
        {totalTxs > 0 && <ViewAllLink url={queueUrl} />}
      </div>
      {loading ? (
        <LoadingState />
      ) : totalTxs > 0 ? (
        <div className={classnames(css.list, 'h-full')}>
          {recoveryTxs.map((tx) => (
            <PendingRecoveryListItem transaction={tx} key={tx.transactionHash} />
          ))}

          {queuedTxs.map((tx) => (
            <PendingTxListItem transaction={tx.transaction} key={tx.transaction.id} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}

export default PendingTxsList
