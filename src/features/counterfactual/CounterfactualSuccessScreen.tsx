import EthHashInfo from '@/components/common/EthHashInfo'
import { safeCreationPendingStatuses } from '@/features/counterfactual/hooks/usePendingSafeStatuses'
import { SafeCreationEvent, safeCreationSubscribe } from '@/features/counterfactual/services/safeCreationEvents'
import { useChain, useCurrentChain } from '@/hooks/useChains'
import { useEffect, useState } from 'react'
import { Box, Dialog, DialogContent, IconButton, Typography } from '@mui/material'
import type { ChainInfo } from '@safe-global/safe-gateway-typescript-sdk'
import NetworkLogosList from '../multichain/components/NetworkLogosList'
import useAllAddressBooks from '@/hooks/useAllAddressBooks'
import css from '@/components/common/TxModalDialog/styles.module.css'
import CloseIcon from '@mui/icons-material/Close'

const CounterfactualSuccessScreen = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [safeAddress, setSafeAddress] = useState<string>()
  const [chainId, setChainId] = useState<string>()
  const [event, setEvent] = useState<SafeCreationEvent>()
  const currentChain = useCurrentChain()
  const chain = useChain(chainId || currentChain?.chainId || '')
  const [networks, setNetworks] = useState<ChainInfo[]>([])
  const addressBooks = useAllAddressBooks()
  const safeName = safeAddress && chain ? addressBooks?.[chain.chainId]?.[safeAddress] : ''
  const isCFCreation = event === SafeCreationEvent.AWAITING_EXECUTION
  const isMultiChain = networks.length > 1
  const chainName = isMultiChain ? '' : isCFCreation ? networks[0].chainName : chain?.chainName

  useEffect(() => {
    const unsubFns = Object.entries(safeCreationPendingStatuses).map(([event]) =>
      safeCreationSubscribe(event as SafeCreationEvent, async (detail) => {
        setEvent(event as SafeCreationEvent)

        if (event === SafeCreationEvent.INDEXED) {
          if ('chainId' in detail) {
            setChainId(detail.chainId)
            setNetworks((prev) => prev.filter((network) => network.chainId === detail.chainId))
          }

          setSafeAddress(detail.safeAddress)
          setOpen(true)
        }
        if (event === SafeCreationEvent.AWAITING_EXECUTION) {
          if ('networks' in detail) setNetworks(detail.networks)
          setSafeAddress(detail.safeAddress)
          setOpen(true)
        }
      }),
    )

    return () => {
      unsubFns.forEach((unsub) => unsub())
    }
  }, [])

  const onClose = () => {
    setChainId(undefined)
    setOpen(false)
  }

  return (
    <>
      <Dialog
        open={open}
        PaperProps={{
          className: 'border-black border-2 rounded-xl',
        }}
        sx={{
          '& .MuiDialog-paper': {
            width: 'min(500px, calc(100% - 64px))',
          },
        }}
      >
        <DialogContent className="bg-[#D7D3CD] p-4 relative">
          <div className="flex flex-col justify-center items-center p-8 border-black border-2 bg-ka-ching-white rounded">
            <div className="absolute top-4 right-4 border-2 border-black rounded-bl bg-[#D7D3CD]">
              <button className="p-0.5" onClick={onClose}>
                <CloseIcon fontSize="medium" className="text-[#ABAAA8]" />
              </button>
            </div>
            <Box textAlign="center" className="font-londrina mt-4">
              <div className="text-2xl mb-3">
                {isCFCreation ? 'Your Account is Almost Set' : 'Your Account is All Set'}
              </div>
              <p className="font-light">
                {isCFCreation
                  ? `Activate the account ${
                      isMultiChain ? 'per network' : ''
                    } to unlock all features of your smart wallet.`
                  : 'Start your journey to the smart account security now.'}{' '}
                {isCFCreation && isMultiChain
                  ? `You can use the address below to receive funds on the selected ${
                      isMultiChain ? 'networks' : 'network'
                    }.`
                  : `Use your address to receive funds ${chainName ? `on ${chainName}` : ''}`}
              </p>
            </Box>

            {safeAddress && (
              <Box p={2} borderRadius={1} fontSize={14} className="mt-3">
                <div className="flex justify-center mb-1">
                  <NetworkLogosList networks={networks.length > 0 ? networks : chain ? [chain] : []} />
                </div>
                <Typography variant="h5">{safeName}</Typography>
                <EthHashInfo
                  address={safeAddress}
                  showCopyButton
                  showAvatar={false}
                  showName={false}
                  showPrefix={false}
                />
              </Box>
            )}

            <button onClick={onClose} className="pixel-btn font-londrina !font-normal mt-8">
              Let&apos;s go
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CounterfactualSuccessScreen
