import WalletOverview from 'src/components/common/WalletOverview'
import useWallet from '@/hooks/wallets/useWallet'
import { Box, Card, Grid, Typography } from '@mui/material'
import type { ReactElement } from 'react'
import SafeLogo from '@/public/images/logo-no-text.svg'
import GameBoy from '@/components/common/GameBoy'

import css from '@/components/new-safe/create/OverviewWidget/styles.module.css'
import ConnectWalletWidget from '@/components/common/ConnectWallet/ConnectWalletWidget'
import type { ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import NetworkLogosList from '@/features/multichain/components/NetworkLogosList'

const LOGO_DIMENSIONS = '22px'

const OverviewWidget = ({ safeName, networks }: { safeName: string; networks: ChainInfo[] }): ReactElement | null => {
  const wallet = useWallet()
  const rows = [
    ...(wallet ? [{ title: 'Wallet', component: <WalletOverview wallet={wallet} /> }] : []),
    ...(safeName !== '' ? [{ title: 'Name', component: <span>{safeName}</span> }] : []),
    ...(networks.length
      ? [
          {
            title: 'Network(s)',
            component: <NetworkLogosList networks={networks} />,
          },
        ]
      : []),
  ]

  return (
    <Grid item xs={12}>
      <GameBoy>
        <div className="w-full h-full p-6 flex flex-col">
          <h1 className="text-white font-londrina text-4xl mb-8">Your Safe Preview</h1>

          <div className="space-y-6 text-white">
            {wallet ? (
              rows.map((row) => (
                <div key={row.title} className="flex items-center justify-between text-xl">
                  <span>{row.title}</span>
                  {row.component}
                </div>
              ))
            ) : (
              <>
                <div className="mb-8 text-center">Connect your wallet to continue</div>
                <ConnectWalletWidget />
              </>
            )}
          </div>
        </div>
      </GameBoy>
    </Grid>
  )
}

export default OverviewWidget
