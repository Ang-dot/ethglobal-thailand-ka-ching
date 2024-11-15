import type { ReactElement } from 'react'
import useWallet from '@/hooks/wallets/useWallet'
import AccountCenter from '@/components/common/ConnectWallet/AccountCenter'
import ConnectWalletWidget from './ConnectWalletWidget'

const ConnectWallet = (): ReactElement => {
  const wallet = useWallet()

  return wallet ? <AccountCenter wallet={wallet} /> : <ConnectWalletWidget />
}

export default ConnectWallet
