import WalletBalance from '@/components/common/WalletBalance'
import { WalletIdenticon } from '@/components/common/WalletOverview'
import { Box, Typography } from '@mui/material'
import css from './styles.module.css'
import EthHashInfo from '@/components/common/EthHashInfo'
import ChainSwitcher from '@/components/common/ChainSwitcher'
import useOnboard, { type ConnectedWallet, switchWallet } from '@/hooks/wallets/useOnboard'
import useAddressBook from '@/hooks/useAddressBook'
import { useAppSelector } from '@/store'
import { selectChainById } from '@/store/chainsSlice'
import madProps from '@/utils/mad-props'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import useChainId from '@/hooks/useChainId'

type WalletInfoProps = {
  wallet: ConnectedWallet
  balance?: string | bigint
  currentChainId: ReturnType<typeof useChainId>
  onboard: ReturnType<typeof useOnboard>
  addressBook: ReturnType<typeof useAddressBook>
  handleClose: () => void
}

export const WalletInfo = ({ wallet, balance, currentChainId, onboard, addressBook, handleClose }: WalletInfoProps) => {
  const chainInfo = useAppSelector((state) => selectChainById(state, wallet.chainId))
  const prefix = chainInfo?.shortName

  const handleSwitchWallet = () => {
    if (onboard) {
      handleClose()
      switchWallet(onboard)
    }
  }

  const handleDisconnect = () => {
    onboard?.disconnectWallet({
      label: wallet.label,
    })

    handleClose()
  }

  return (
    <>
      <Box display="flex" gap="12px">
        <WalletIdenticon wallet={wallet} size={36} />

        <Typography variant="body2" className={css.address} component="div">
          <EthHashInfo
            address={wallet.address}
            name={addressBook[wallet.address] || wallet.ens || wallet.label + ' Wallet'}
            nameClassname="text-lg font-semibold text-gray-800"
            showAvatar={false}
            showPrefix={false}
            hasExplorer
            showCopyButton
            prefix={prefix}
          />
        </Typography>
      </Box>

      <div className="bg-gray-50 rounded-lg p-4 border-2 border-solid border-black">
        <div className="grid gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Wallet</p>
            <p className="font-semibold text-gray-800">{wallet.label}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Balance</p>
            <p className="font-semibold text-gray-800">
              <WalletBalance balance={balance} />
              {currentChainId !== chainInfo?.chainId && <>({chainInfo?.chainName || 'Unknown chain'})</>}
            </p>
          </div>
        </div>
      </div>

      <Box display="flex" flexDirection="column" gap={1} width={1}>
        <ChainSwitcher fullWidth />

        <button onClick={handleSwitchWallet} className="pixel-btn transform transition-transform hover:scale-[1.02]">
          Switch Wallet
        </button>

        <button
          onClick={handleDisconnect}
          className="pixelRedBtn flex justify-center items-center gap-x-1 transform transition-transform hover:scale-[1.02]"
        >
          <PowerSettingsNewIcon />
          Disconnect
        </button>
      </Box>
    </>
  )
}

export default madProps(WalletInfo, {
  onboard: useOnboard,
  addressBook: useAddressBook,
  currentChainId: useChainId,
})
