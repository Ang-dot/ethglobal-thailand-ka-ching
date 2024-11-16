import TxLayout from '@/components/tx-flow/common/TxLayout'
import useTxStepper from '../../useTxStepper'
import CreateTokenTransfer from './CreateTokenTransfer'
import ReviewTokenTx from '@/components/tx-flow/flows/TokenTransfer/ReviewTokenTx'
import { ZERO_ADDRESS } from '@safe-global/protocol-kit/dist/src/utils/constants'
import { TokenAmountFields } from '@/components/common/TokenAmountInput'
import { Grid } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

export enum TokenTransferType {
  multiSig = 'multiSig',
  spendingLimit = 'spendingLimit',
}

enum Fields {
  recipient = 'recipient',
  type = 'type',
}

export const TokenTransferFields = { ...Fields, ...TokenAmountFields }

export type TokenTransferParams = {
  [TokenTransferFields.recipient]: string
  [TokenTransferFields.tokenAddress]: string
  [TokenTransferFields.amount]: string
  [TokenTransferFields.type]: TokenTransferType
}

type TokenTransferFlowProps = Partial<TokenTransferParams> & {
  txNonce?: number
}

const defaultParams: TokenTransferParams = {
  recipient: '',
  tokenAddress: ZERO_ADDRESS,
  amount: '',
  type: TokenTransferType.multiSig,
}

const FraudDetection: FC = () => {
  return (
    <>
      <Grid item xs={12} md={7} className="pixel-card p-10 space-y-8 relative">
        <div className="space-y-4 pr-20">
          <div className="font-londrina text-[42px] capitalize">AI Transaction Risk Rate</div>
          <div>Let your AI buddy sniff out any sneaky transactions! Hit the button and watch it work its magic!</div>
        </div>
        <button className="pixel-btn w-36">Detect Fraud</button>
        <Image src="/images/common/brain3.png" alt="brain3" width={125} height={158} className="absolute bottom-0 right-5" />
      </Grid>
      <Grid item xs={12} md={4} />
    </>
  )
}

const TokenTransferFlow = ({ txNonce, ...params }: TokenTransferFlowProps) => {
  const { data, step, nextStep, prevStep } = useTxStepper<TokenTransferParams>({
    ...defaultParams,
    ...params,
  })

  const steps = [
    <CreateTokenTransfer
      key={0}
      params={data}
      txNonce={txNonce}
      onSubmit={(formData) => nextStep({ ...data, ...formData })}
    />,

    <ReviewTokenTx key={1} params={data} txNonce={txNonce} onSubmit={() => null} />,
  ]

  return (
    <TxLayout
      title={step === 0 ? 'New transaction' : 'Confirm transaction'}
      step={step}
      onBack={prevStep}
      additionalChildren={<FraudDetection />}
    >
      {steps}
    </TxLayout>
  )
}

export default TokenTransferFlow
