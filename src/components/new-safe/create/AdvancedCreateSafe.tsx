import { Container, Typography, Grid } from '@mui/material'
import { useRouter } from 'next/router'

import useWallet from '@/hooks/wallets/useWallet'
import OverviewWidget from '@/components/new-safe/create/OverviewWidget'
import type { TxStepperProps } from '@/components/new-safe/CardStepper/useCardStepper'
import SetNameStep from '@/components/new-safe/create/steps/SetNameStep'
import OwnerPolicyStep from '@/components/new-safe/create/steps/OwnerPolicyStep'
import ReviewStep from '@/components/new-safe/create/steps/ReviewStep'
import { CreateSafeStatus } from '@/components/new-safe/create/steps/StatusStep'
import { CardStepper } from '@/components/new-safe/CardStepper'
import { AppRoutes } from '@/config/routes'
import { CREATE_SAFE_CATEGORY } from '@/services/analytics'
import type { CreateSafeInfoItem } from '@/components/new-safe/create/CreateSafeInfos'
import CreateSafeInfos from '@/components/new-safe/create/CreateSafeInfos'
import { useState } from 'react'
import { type NewSafeFormData } from '.'
import AdvancedOptionsStep from './steps/AdvancedOptionsStep'
import { getLatestSafeVersion } from '@/utils/chains'
import { useCurrentChain } from '@/hooks/useChains'

const AdvancedCreateSafe = () => {
  const router = useRouter()
  const wallet = useWallet()
  const chain = useCurrentChain()

  const [safeName, setSafeName] = useState('')
  const [dynamicHint, setDynamicHint] = useState<CreateSafeInfoItem>()
  const [activeStep, setActiveStep] = useState(0)

  const CreateSafeSteps: TxStepperProps<NewSafeFormData>['steps'] = [
    {
      render: (data, onSubmit, onBack, setStep) => (
        <SetNameStep
          isAdvancedFlow
          setSafeName={setSafeName}
          data={data}
          onSubmit={onSubmit}
          onBack={onBack}
          setStep={setStep}
          setOverviewNetworks={() => {}}
          setDynamicHint={() => {}}
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
        <AdvancedOptionsStep data={data} onSubmit={onSubmit} onBack={onBack} setStep={setStep} />
      ),
    },
    {
      render: (data, onSubmit, onBack, setStep) => (
        <ReviewStep data={data} onSubmit={onSubmit} onBack={onBack} setStep={setStep} />
      ),
    },
    {
      render: (data, onSubmit, onBack, setStep) => (
        <CreateSafeStatus data={data} onSubmit={onSubmit} onBack={onBack} setStep={setStep} />
      ),
    },
  ]

  const initialStep = 0
  const initialData: NewSafeFormData = {
    name: '',
    networks: [],
    owners: [],
    threshold: 1,
    saltNonce: 0,
    safeVersion: getLatestSafeVersion(chain),
  }

  const onClose = () => {
    router.push(AppRoutes.welcome.index)
  }

  return (
    <Container>
      <Grid container columnSpacing={3} justifyContent="center" mt={[2, null, 7]}>
        <Grid item xs={12}>
          <Typography variant="h2" pb={2}>
            Create new Safe Account
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} order={[1, null, 0]}>
          <CardStepper
            initialData={initialData}
            initialStep={initialStep}
            onClose={onClose}
            steps={CreateSafeSteps}
            eventCategory={CREATE_SAFE_CATEGORY}
            setWidgetStep={setActiveStep}
          />
        </Grid>

        <Grid item xs={12} md={4} mb={[3, null, 0]} order={[0, null, 1]}>
          <Grid container spacing={3}>
            {activeStep < 2 && <OverviewWidget safeName={safeName} networks={[]} />}
            {wallet?.address && <CreateSafeInfos dynamicHint={dynamicHint} />}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AdvancedCreateSafe
