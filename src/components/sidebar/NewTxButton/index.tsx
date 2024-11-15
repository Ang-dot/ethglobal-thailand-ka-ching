import ActivateAccountButton from '@/features/counterfactual/ActivateAccountButton'
import useIsCounterfactualSafe from '@/features/counterfactual/hooks/useIsCounterfactualSafe'
import { type ReactElement, useContext } from 'react'
import Button from '@mui/material/Button'
import { OVERVIEW_EVENTS, trackEvent } from '@/services/analytics'
import CheckWallet from '@/components/common/CheckWallet'
import { TxModalContext } from '@/components/tx-flow'
import WatchlistAddButton from '../WatchlistAddButton'
import TokenTransferFlow from '@/components/tx-flow/flows/TokenTransfer'

const NewTxButton = (): ReactElement => {
  const { setTxFlow } = useContext(TxModalContext)
  const isCounterfactualSafe = useIsCounterfactualSafe()

  const onClick = () => {
    setTxFlow(<TokenTransferFlow />)
    trackEvent({ ...OVERVIEW_EVENTS.NEW_TRANSACTION, label: 'sidebar' })
  }

  if (isCounterfactualSafe) {
    return <ActivateAccountButton />
  }

  return (
    <CheckWallet allowSpendingLimit noTooltip>
      {(isOk) =>
        isOk ? (
          <button data-testid="new-tx-btn" onClick={onClick} disabled={!isOk} className="pixel-btn w-full">
            New Transaction
          </button>
        ) : (
          <WatchlistAddButton />
        )
      }
    </CheckWallet>
  )
}

export default NewTxButton
