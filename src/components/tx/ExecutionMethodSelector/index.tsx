import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import type { Dispatch, SetStateAction, ReactElement, ChangeEvent } from 'react'

import useWallet from '@/hooks/wallets/useWallet'
import WalletIcon from '@/components/common/WalletIcon'
import SponsoredBy from '../SponsoredBy'
import RemainingRelays from '../RemainingRelays'

import css from './styles.module.css'
import BalanceInfo from '@/components/tx/BalanceInfo'
import madProps from '@/utils/mad-props'
import { useCurrentChain } from '@/hooks/useChains'
import type { ChainInfo, RelayCountResponse } from '@safe-global/safe-gateway-typescript-sdk'
import type { ConnectedWallet } from '@/hooks/wallets/useOnboard'

export const enum ExecutionMethod {
  RELAY = 'RELAY',
  WALLET = 'WALLET',
  GAME = 'GAME',
}

const _ExecutionMethodSelector = ({
  wallet,
  chain,
  executionMethod,
  setExecutionMethod,
  relays,
  noLabel,
  tooltip,
}: {
  wallet: ConnectedWallet | null
  chain?: ChainInfo
  executionMethod: ExecutionMethod
  setExecutionMethod: Dispatch<SetStateAction<ExecutionMethod>>
  relays?: RelayCountResponse
  noLabel?: boolean
  tooltip?: string
}): ReactElement | null => {
  const shouldRelay = executionMethod === ExecutionMethod.RELAY
  const shouldGame = executionMethod === ExecutionMethod.GAME

  const onChooseExecutionMethod = (_: ChangeEvent<HTMLInputElement>, newExecutionMethod: string) => {
    setExecutionMethod(newExecutionMethod as ExecutionMethod)
  }

  return (
    <div className="bg-[#FFFDEA] rounded-lg border-4 border-solid border-black">
      <div className={css.method}>
        <FormControl sx={{ display: 'flex', width: '100%' }}>
          {!noLabel ? (
            <Typography variant="body2" className={css.label}>
              Who will pay gas fees:
            </Typography>
          ) : null}

          <RadioGroup row value={executionMethod} onChange={onChooseExecutionMethod}>
            <div className='w-full'>
              <div className='flex flex-row justify-between items-center w-full'>
               

                <div className='flex flex-row gap-4'>
                <FormControlLabel
                  value={ExecutionMethod.RELAY}
                  label={
                    <Typography className={css.radioLabel} whiteSpace="nowrap">
                      Sponsored by
                      <SponsoredBy chainId={chain?.chainId ?? ''} />
                    </Typography>
                  }
                  control={
                    <Radio
                      sx={{
                        color: '#EF4444',
                        '&.Mui-checked': {
                          color: '#EF4444',
                        },
                      }}
                    />
                  }
                />
                  <FormControlLabel
                    data-testid="connected-wallet-execution-method"
                    value={ExecutionMethod.WALLET}
                    label={
                      <Typography className={css.radioLabel}>
                        <WalletIcon provider={wallet?.label || ''} width={20} height={20} icon={wallet?.icon} /> Connected
                        wallet
                      </Typography>
                    }
                    control={
                      <Radio
                        sx={{
                          color: '#EF4444',
                          '&.Mui-checked': {
                            color: '#EF4444',
                          },
                        }}
                      />
                    }
                  />

                  <FormControlLabel
                    data-testid="game-execution-method"
                    value={ExecutionMethod.GAME}
                    label={
                      <Typography className={css.radioLabel}>
                        <img src={'/images/Tuktuk.png'} alt="tuktuk" className={css.logo} width={20} height={20}/> Play Game
                      </Typography>
                    }
                    control={
                      <Radio
                        sx={{
                          color: '#EF4444',
                          '&.Mui-checked': {
                            color: '#EF4444',
                          },
                        }}
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </RadioGroup>
        </FormControl>
      </div>

      {shouldRelay && relays ? <RemainingRelays relays={relays} tooltip={tooltip} /> : wallet ? <BalanceInfo /> : null}
    </div>
  )
}

export const ExecutionMethodSelector = madProps(_ExecutionMethodSelector, {
  wallet: useWallet,
  chain: useCurrentChain,
})