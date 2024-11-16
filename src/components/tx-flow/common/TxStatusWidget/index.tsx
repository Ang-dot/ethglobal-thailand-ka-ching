import { useContext } from 'react'
import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import CreatedIcon from '@/public/images/messages/created.svg'
import SignedIcon from '@/public/images/messages/signed.svg'
import { type TransactionSummary } from '@safe-global/safe-gateway-typescript-sdk'
import useSafeInfo from '@/hooks/useSafeInfo'
import { isMultisigExecutionInfo, isSignableBy, isConfirmableBy } from '@/utils/transaction-guards'
import classnames from 'classnames'
import css from './styles.module.css'
import CloseIcon from '@mui/icons-material/Close'
import useWallet from '@/hooks/wallets/useWallet'
import { SafeTxContext } from '@/components/tx-flow/SafeTxProvider'
import useIsSafeOwner from '@/hooks/useIsSafeOwner'
import { useIsWalletProposer } from '@/hooks/useProposers'
import GameBoy from '@/components/common/GameBoy'

const TxStatusWidget = ({
  step,
  txSummary,
  handleClose,
  isBatch = false,
  isMessage = false,
}: {
  step: number
  txSummary?: TransactionSummary
  handleClose: () => void
  isBatch?: boolean
  isMessage?: boolean
}) => {
  const wallet = useWallet()
  const { safe } = useSafeInfo()
  const { nonceNeeded } = useContext(SafeTxContext)
  const { threshold } = safe
  const isSafeOwner = useIsSafeOwner()
  const isProposer = useIsWalletProposer()
  const isProposing = isProposer && !isSafeOwner

  const { executionInfo = undefined } = txSummary || {}
  const { confirmationsSubmitted = 0 } = isMultisigExecutionInfo(executionInfo) ? executionInfo : {}

  const canConfirm = txSummary
    ? isConfirmableBy(txSummary, wallet?.address || '')
    : safe.threshold === 1 && !isProposing

  const canSign = txSummary ? isSignableBy(txSummary, wallet?.address || '') : !isProposing

  return (
    <Paper>
      <GameBoy>
        <div className={css.header}>
          <div className="font-londrina font-black md:text-xl xl:text-3xl 2xl:text-4xl text-white pt-4 capitalize">
            {isMessage ? 'Message' : 'Transaction'} status
          </div>

          <IconButton className={css.close} aria-label="close" onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </div>

        <Divider />

        <div className={classnames(css.content, 'self-start')}>
          <List className={css.status}>
            <ListItem>
              <ListItemIcon>
                <CreatedIcon />
              </ListItemIcon>

              <ListItemText primaryTypographyProps={{ fontWeight: 700 }}>
                {isBatch ? 'Queue transactions' : 'Create'}
              </ListItemText>
            </ListItem>

            <ListItem className={classnames({ [css.incomplete]: !canConfirm && !isBatch })}>
              <ListItemIcon>
                <SignedIcon />
              </ListItemIcon>

              <ListItemText primaryTypographyProps={{ fontWeight: 700 }}>
                {isBatch ? (
                  'Create batch'
                ) : !nonceNeeded ? (
                  'Confirmed'
                ) : isMessage ? (
                  'Collect signatures'
                ) : (
                  <>
                    Confirmed ({confirmationsSubmitted} of {threshold})
                  </>
                )}
              </ListItemText>
            </ListItem>

            <ListItem className={classnames({ [css.incomplete]: step < 2 })}>
              <ListItemIcon>
                <SignedIcon />
              </ListItemIcon>

              <ListItemText primaryTypographyProps={{ fontWeight: 700 }}>{isMessage ? 'Done' : 'Execute'}</ListItemText>
            </ListItem>
          </List>
        </div>
      </GameBoy>
    </Paper>
  )
}

export default TxStatusWidget
