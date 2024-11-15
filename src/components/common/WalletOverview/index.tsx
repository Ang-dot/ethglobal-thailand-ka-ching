import Identicon from '@/components/common/Identicon'
import { Box, Typography } from '@mui/material'
import { Suspense } from 'react'
import type { ReactElement } from 'react'

import EthHashInfo from '@/components/common/EthHashInfo'
import WalletIcon from '@/components/common/WalletIcon'
import type { ConnectedWallet } from '@/hooks/wallets/useOnboard'
import WalletBalance from '@/components/common/WalletBalance'

import css from './styles.module.css'

export const WalletIdenticon = ({ wallet, size = 32 }: { wallet?: ConnectedWallet; size?: number }) => {
  return (
    <Box className={css.imageContainer}>
      <Identicon size={size} />
      {wallet && (
        <Suspense>
          <Box className={css.walletIcon}>
            <WalletIcon provider={wallet?.label} icon={wallet?.icon} width={size / 2} height={size / 2} />
          </Box>
        </Suspense>
      )}
    </Box>
  )
}

const WalletOverview = ({
  wallet,
  balance,
  showBalance,
  hideAddressInMobile,
}: {
  wallet?: ConnectedWallet
  balance?: string
  showBalance?: boolean
  hideAddressInMobile?: boolean
}): ReactElement => {
  return (
    <Box className={css.container}>
      <WalletIdenticon wallet={wallet} />

      <Box className={hideAddressInMobile ? 'hidden lg:block' : ''}>
        <Typography variant="body2" component="div">
          {wallet?.ens ? (
            <div>{wallet.ens}</div>
          ) : (
            <EthHashInfo
              showPrefix={false}
              address={wallet?.address}
              showName={false}
              showAvatar={false}
              avatarSize={12}
              copyAddress={false}
            />
          )}
        </Typography>

        {showBalance && (
          <span className="text-red-500 text-sm">
            <WalletBalance balance={balance} />
          </span>
        )}
        {!wallet && <span className="text-red-500 text-sm cursor-pointer">Connect Wallet</span>}
      </Box>
    </Box>
  )
}

export default WalletOverview
