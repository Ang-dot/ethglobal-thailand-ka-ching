import { Alert, AlertTitle, Box } from '@mui/material'
import useWallet from '@/hooks/wallets/useWallet'
import ConnectWalletWidget from '@/components/common/ConnectWallet/ConnectWalletWidget'

const NoWalletConnectedWarning = () => {
  const wallet = useWallet()

  if (wallet) {
    return null
  }

  return (
    <Alert severity="warning" sx={{ mt: 3 }}>
      <AlertTitle sx={{ fontWeight: 700 }}>No wallet connected</AlertTitle>
      You need to connect a wallet to create a Safe account.
      <Box mt={2}>
        <ConnectWalletWidget />
      </Box>
    </Alert>
  )
}

export default NoWalletConnectedWarning
