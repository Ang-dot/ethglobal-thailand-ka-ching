import { Box, Button, ButtonBase } from '@mui/material'
import useConnectWallet from '@/components/common/ConnectWallet/useConnectWallet'
import css from '@/components/common/ConnectWallet/styles.module.css'
import WalletOverview from '@/components/common/WalletOverview'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ConnectWalletWidget = ({
  onConnect,
  contained = true,
  small = false,
  text,
}: {
  onConnect?: () => void
  contained?: boolean
  small?: boolean
  text?: string
}): React.ReactElement => {
  const connectWallet = useConnectWallet()

  const handleConnect = () => {
    onConnect?.()
    connectWallet()
  }

  return (
    <div
      onClick={handleConnect}
    >
      <Box className={css.buttonContainer}>
        <WalletOverview />
      </Box>
    </div>
  )
}

export default ConnectWalletWidget
