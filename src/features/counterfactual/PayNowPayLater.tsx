import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import classnames from 'classnames'
import { useCurrentChain } from '@/hooks/useChains'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'

import css from './styles.module.css'
import ErrorMessage from '@/components/tx/ErrorMessage'

export const enum PayMethod {
  PayNow = 'PayNow',
  PayLater = 'PayLater',
}

const PayNowPayLater = ({
  totalFee,
  canRelay,
  isMultiChain,
  payMethod,
  setPayMethod,
}: {
  totalFee: string
  canRelay: boolean
  isMultiChain: boolean
  payMethod: PayMethod
  setPayMethod: Dispatch<SetStateAction<PayMethod>>
}) => {
  const chain = useCurrentChain()

  const onChoosePayMethod = (_: ChangeEvent<HTMLInputElement>, newPayMethod: string) => {
    setPayMethod(newPayMethod as PayMethod)
  }

  return (
    <div className="bg-[#FFFDEA] p-6 rounded-lg space-y-4 border-4 border-solid border-black">
      <h3 className="font-bold text-[#221B1A] text-[20px]">Before we continue...</h3>
      {isMultiChain && (
        <ErrorMessage level="info">
          You will need to <b>activate your account</b> separately on each network. Make sure you have funds on your
          wallet to pay the network fee.
        </ErrorMessage>
      )}
      <ul className="space-y-2">
        {isMultiChain && (
          <li className="flex items-start space-x-2">
            <CheckRoundedIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#909B0E]" />
            <span className="text-[#221B1A]">
              Start exploring the accounts now, and activate them later to start making transactions
            </span>
          </li>
        )}
        <li className="flex items-start space-x-2">
          <CheckRoundedIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#909B0E]" />
          <span className="text-[#221B1A]">There will be a one-time activation fee</span>
        </li>
        {!isMultiChain && (
          <li className="flex items-start space-x-2">
            <CheckRoundedIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#909B0E]" />
            <span className="text-[#221B1A]">
              If you choose to pay later, the fee will be included with the first transaction you make.
            </span>
          </li>
        )}
        <li className="flex items-start space-x-2">
          <CheckRoundedIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#909B0E]" />
          <span className="text-[#221B1A]">Safe doesn't profit from the fees.</span>
        </li>
      </ul>
      {!isMultiChain && (
        <FormControl fullWidth>
          <RadioGroup row value={payMethod} onChange={onChoosePayMethod} className={css.radioGroup}>
            <FormControlLabel
              sx={{ flex: 1 }}
              value={PayMethod.PayNow}
              className={classnames(
                css.radioContainer,
                { [css.active]: payMethod === PayMethod.PayLater },
                'cursor-pointer',
              )}
              label={
                <>
                  <Typography className={css.radioTitle}>Pay now</Typography>
                  <Typography className={css.radioSubtitle} variant="body2" color="text.secondary">
                    {canRelay ? (
                      'Sponsored free transaction'
                    ) : (
                      <>
                        &asymp; {totalFee} {chain?.nativeCurrency.symbol}
                      </>
                    )}
                  </Typography>
                </>
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
              sx={{ flex: 1 }}
              value={PayMethod.PayLater}
              className={classnames(
                css.radioContainer,
                { [css.active]: payMethod === PayMethod.PayLater },
                'cursor-pointer',
              )}
              label={
                <>
                  <Typography className={css.radioTitle}>Pay later</Typography>
                  <Typography className="text-red-500" variant="body2" color="text.secondary">
                    with the first transaction
                  </Typography>
                </>
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
          </RadioGroup>
        </FormControl>
      )}
    </div>
  )
}

export default PayNowPayLater
