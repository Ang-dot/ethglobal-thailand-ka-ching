import { Container, Grid } from '@mui/material'
import { useRouter } from 'next/router'

import useWallet from '@/hooks/wallets/useWallet'
import OverviewWidget from '@/components/new-safe/create/OverviewWidget'
import type { NamedAddress } from '@/components/new-safe/create/types'
import type { TxStepperProps } from '@/components/new-safe/CardStepper/useCardStepper'
import SetNameStep from '@/components/new-safe/create/steps/SetNameStep'
import OwnerPolicyStep from '@/components/new-safe/create/steps/OwnerPolicyStep'
import ReviewStep from '@/components/new-safe/create/steps/ReviewStep'
import { CreateSafeStatus } from '@/components/new-safe/create/steps/StatusStep'
import { CardStepper } from '@/components/new-safe/CardStepper'
import { AppRoutes } from '@/config/routes'
import { CREATE_SAFE_CATEGORY } from '@/services/analytics'
import type { AlertColor } from '@mui/material'
import type { CreateSafeInfoItem } from '@/components/new-safe/create/CreateSafeInfos'
import CreateSafeInfos from '@/components/new-safe/create/CreateSafeInfos'
import React, { type ReactElement, useMemo, useState } from 'react'
import ExternalLink from '@/components/common/ExternalLink'
import { HelpCenterArticle } from '@/config/constants'
import { type SafeVersion } from '@safe-global/safe-core-sdk-types'
import { getLatestSafeVersion } from '@/utils/chains'
import { useCurrentChain } from '@/hooks/useChains'
import type { ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import ProgressSteps from '@/components/new-safe/CardStepper/ProgressSteps'

export type NewSafeFormData = {
  name: string
  networks: ChainInfo[]
  threshold: number
  owners: NamedAddress[]
  saltNonce: number
  safeVersion: SafeVersion
  safeAddress?: string
  willRelay?: boolean
}

const staticHints: Record<
  number,
  { title: string; variant: AlertColor; steps: { title: string; text: string | ReactElement }[] }
> = {
  1: {
    title: 'Safe Account creation',
    variant: 'info',
    steps: [
      {
        title: 'Network fee',
        text: 'Deploying your Safe Account requires the payment of the associated network fee with your connected wallet. An estimation will be provided in the last step.',
      },
      {
        title: 'Address book privacy',
        text: 'The name of your Safe Account will be stored in a local address book on your device and can be changed at a later stage. It will not be shared with us or any third party.',
      },
    ],
  },
  2: {
    title: 'Safe Account creation',
    variant: 'info',
    steps: [
      {
        title: 'Flat hierarchy',
        text: 'Every signer has the same rights within the Safe Account and can propose, sign and execute transactions that have the required confirmations.',
      },
      {
        title: 'Managing Signers',
        text: 'You can always change the number of signers and required confirmations in your Safe Account after creation.',
      },
      {
        title: 'Safe Account setup',
        text: (
          <>
            Not sure how many signers and confirmations you need for your Safe Account?
            <br />
            <ExternalLink href={HelpCenterArticle.SAFE_SETUP} fontWeight="bold">
              Learn more about setting up your Safe Account.
            </ExternalLink>
          </>
        ),
      },
    ],
  },
  3: {
    title: 'Safe Account creation',
    variant: 'info',
    steps: [
      {
        title: 'Wait for the creation',
        text: 'Depending on network usage, it can take some time until the transaction is successfully added to the blockchain and picked up by our services.',
      },
    ],
  },
  4: {
    title: 'Safe Account usage',
    variant: 'success',
    steps: [
      {
        title: 'Connect your Safe Account',
        text: 'In our Safe Apps section you can connect your Safe Account to over 70 dApps directly or via Wallet Connect to interact with any application.',
      },
    ],
  },
}

const CreateSafe = () => {
  const router = useRouter()
  const wallet = useWallet()
  const chain = useCurrentChain()

  const [safeName, setSafeName] = useState('')
  const [overviewNetworks, setOverviewNetworks] = useState<ChainInfo[]>()

  const [dynamicHint, setDynamicHint] = useState<CreateSafeInfoItem>()
  const [activeStep, setActiveStep] = useState(0)

  const CreateSafeSteps: TxStepperProps<NewSafeFormData>['steps'] = [
    {
      render: (data, onSubmit, onBack, setStep) => (
        <SetNameStep
          setOverviewNetworks={setOverviewNetworks}
          setDynamicHint={setDynamicHint}
          setSafeName={setSafeName}
          data={data}
          onSubmit={onSubmit}
          onBack={onBack}
          setStep={setStep}
        />
      ),
    },
    {
      render: (data, onSubmit, onBack, setStep) => (
        <OwnerPolicyStep
          setDynamicHint={setDynamicHint}
          data={data}
          onSubmit={onSubmit}
          onBack={onBack}
          setStep={setStep}
        />
      ),
    },
    {
      render: (data, onSubmit, onBack, setStep) => (
        <ReviewStep data={data} onSubmit={onSubmit} onBack={onBack} setStep={setStep} />
      ),
    },
    {
      render: (data, onSubmit, onBack, setStep, setStepData) => (
        <CreateSafeStatus data={data} onSubmit={onSubmit} onBack={onBack} setStep={setStep} setStepData={setStepData} />
      ),
    },
  ]

  const staticHint = useMemo(() => staticHints[activeStep], [activeStep])

  const initialStep = 0
  const initialData: NewSafeFormData = {
    name: '',
    networks: [],
    owners: [],
    threshold: 1,
    saltNonce: 0,
    safeVersion: getLatestSafeVersion(chain) as SafeVersion,
  }

  const onClose = () => {
    router.push(AppRoutes.welcome.index)
  }

  return (
    <Container className="min-[1200px]:!max-w-6xl !px-0">
      <Grid container columnSpacing={3} justifyContent="center" mt={[2, null, 7]}>
        <Grid item xs={12}>
          <ProgressSteps currentStep={activeStep + 1} />
        </Grid>
        <Grid item xs={12} md={7} order={[1, null, 0]}>
          <CardStepper
            initialData={initialData}
            initialStep={initialStep}
            onClose={onClose}
            steps={CreateSafeSteps}
            eventCategory={CREATE_SAFE_CATEGORY}
            setWidgetStep={setActiveStep}
          />
        </Grid>

        <Grid item xs={12} md={5} mb={[3, null, 0]} order={[0, null, 1]}>
          <Grid container spacing={3}>
            {activeStep < 2 && <OverviewWidget safeName={safeName} networks={overviewNetworks || []} />}
            {wallet?.address && <CreateSafeInfos staticHint={staticHint} dynamicHint={dynamicHint} />}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CreateSafe
