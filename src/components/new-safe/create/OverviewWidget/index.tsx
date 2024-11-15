import WalletOverview from 'src/components/common/WalletOverview'
import useWallet from '@/hooks/wallets/useWallet'
import { Grid } from '@mui/material'
import type { ReactElement } from 'react'
import GameBoy from '@/components/common/GameBoy'

import ConnectWalletWidget from '@/components/common/ConnectWallet/ConnectWalletWidget'
import type { ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import NetworkLogosList from '@/features/multichain/components/NetworkLogosList'

const OverviewWidget = ({ safeName, networks }: { safeName: string; networks: ChainInfo[] }): ReactElement | null => {
  const wallet = useWallet()
  const rows = [
    ...(wallet ? [{ title: 'Wallet', component: <WalletOverview wallet={wallet} hideAddressInMobile={false} /> }] : []),
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
                <div key={row.title} className="flex items-center justify-between">
                  <span className="text-xl">{row.title}</span>
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
