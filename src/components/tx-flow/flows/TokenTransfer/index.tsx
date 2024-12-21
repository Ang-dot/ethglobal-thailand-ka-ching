import TxLayout from '@/components/tx-flow/common/TxLayout'
import useTxStepper from '../../useTxStepper'
import CreateTokenTransfer from './CreateTokenTransfer'
import ReviewTokenTx from '@/components/tx-flow/flows/TokenTransfer/ReviewTokenTx'
import { ZERO_ADDRESS } from '@safe-global/protocol-kit/dist/src/utils/constants'
import { TokenAmountFields } from '@/components/common/TokenAmountInput'
import { CircularProgress, Grid } from "@mui/material";
import Image from 'next/image'
import { FC, useContext, useEffect, useState } from "react";
import { SafeTxContext } from "@/components/tx-flow/SafeTxProvider";
import { useFetchAddressFeatures } from "@/hooks/useFetchAddressFeatures";
import { stringToHex } from "viem";
import { useWriteInputBoxAddInput } from "@/hooks/cartesi-rollup/generated";
import { useChainId, useConnect } from "wagmi";
import useLatestNotice from "@/hooks/cartesi-rollup/useLatestNotice";

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
  const { safeTx } = useContext(SafeTxContext);
  const address = safeTx?.data?.to;
  const { features, loading, fetchData } = useFetchAddressFeatures();
  const { connectors, connect } = useConnect();
  const chainId = useChainId();

  const dAppAddress = "0x9B237718010dA3d929808EcC02Fe29E583cD8429";
  const { isPending, writeContractAsync } = useWriteInputBoxAddInput();

  const [shouldFetchNotice, setShouldFetchNotice] = useState(false);
  const { latestNoticePayload, loading: noticeLoading, error: noticeError } = useLatestNotice(shouldFetchNotice);

  const handleDetectFraud = async () => {
    if (address) {
      await fetchData(address);

      // Trigger connect only if not connected to base sepolia (chainId: 84532)
      if (chainId !== 84532) {
        connect({ connector: connectors[0] });
      }

      await writeContractAsync({
        args: [
          dAppAddress,
          stringToHex(JSON.stringify(features)),
        ],
      });

      // Set a 3-second delay before fetching the notice
      setTimeout(() => setShouldFetchNotice(true), 3000);
    }
  };

  useEffect(() => {
    if (noticeLoading) {
      console.log("Loading...");
    }
    if (noticeError) {
      console.error("Error fetching latest notice:", noticeError);
    }
    if (latestNoticePayload) {
      console.log("Latest matching notice payload:", latestNoticePayload);
    } else if (shouldFetchNotice && !noticeLoading) {
      console.log("No matching notice found.");
    }
  }, [latestNoticePayload, noticeLoading, noticeError, shouldFetchNotice]);

  return (
    <>
      <Grid item xs={12} md={7} className="pixel-card p-10 space-y-8 relative">
        <div className="space-y-4 pr-20">
          <div className="font-londrina text-[42px] capitalize">AI Transaction Risk Rate</div>
          <div>Let your AI buddy sniff out any sneaky transactions! Hit the button and watch it work its magic!</div>
          {loading || isPending ? (
            <>
              <div>Analyzing transaction data for potential fraud...</div>
              <CircularProgress />
            </>
          ) : (
            features && <pre>{JSON.stringify(features, null, 2)}</pre>
          )}
        </div>
        <button
          className="pixel-btn w-36"
          onClick={handleDetectFraud}
          disabled={chainId !== 84532 || !address}
        >
          Detect Fraud
        </button>
        <Image src="/images/common/brain3.png" alt="brain3" width={125} height={158} className="absolute bottom-0 right-5" />
      </Grid>
      <Grid item xs={12} md={4} />
    </>
  );
};

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
