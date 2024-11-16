import useSafeInfo from '@/hooks/useSafeInfo'
import React, { type ReactElement } from 'react'
import dynamic from 'next/dynamic'
import { Grid } from '@mui/material'
import Overview from '@/components/dashboard/Overview/Overview'
import { useIsRecoverySupported } from '@/features/recovery/hooks/useIsRecoverySupported'
import { InconsistentSignerSetupWarning } from '@/features/multichain/components/SignerSetupWarning/InconsistentSignerSetupWarning'
import ChartsSection from '@/components/dashboard/ChartsSection'
import SwapWidget from '@/components/dashboard/SwapWidget'
import PendingTxsList from '@/components/dashboard/PendingTxs/PendingTxsList'

const RecoveryHeader = dynamic(() => import('@/features/recovery/components/RecoveryHeader'))

const Dashboard = (): ReactElement => {
  const { safe } = useSafeInfo()
  const supportsRecovery = useIsRecoverySupported()

  return (
    <>
      {supportsRecovery && <RecoveryHeader />}
      <div className="flex flex-col lg:flex-col gap-6 mx-auto p-4 lg:max-w-7xl">
        <InconsistentSignerSetupWarning />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="space-y-6 lg:col-span-2">
            <Overview />
            <SwapWidget />
          </div>
          <div className="lg:col-span-3">
            <PendingTxsList />
          </div>
        </div>
        <ChartsSection />
      </div>
    </>
  )
}

export default Dashboard
