import useIsSafeOwner from '@/hooks/useIsSafeOwner'
import { useIsWalletProposer } from '@/hooks/useProposers'
import type { Dispatch, SetStateAction } from 'react'
import { type ReactElement } from 'react'
import { useRouter } from 'next/router'
import type { Url } from 'next/dist/shared/lib/router/router'
import { Paper } from '@mui/material'
import classnames from 'classnames'
import css from './styles.module.css'
import ConnectWallet from '@/components/common/ConnectWallet'
import NetworkSelector from '@/components/common/NetworkSelector'
import { AppRoutes } from '@/config/routes'
import Link from 'next/link'
import useSafeAddress from '@/hooks/useSafeAddress'
import { FEATURES } from '@/utils/chains'
import { useHasFeature } from '@/hooks/useChains'
import { useSafeTokenEnabled } from '@/hooks/useSafeTokenEnabled'

type HeaderProps = {
  onMenuToggle?: Dispatch<SetStateAction<boolean>>
  onBatchToggle?: Dispatch<SetStateAction<boolean>>
}

function getLogoLink(router: ReturnType<typeof useRouter>): Url {
  return router.pathname === AppRoutes.home || !router.query.safe
    ? router.pathname === AppRoutes.welcome.accounts
      ? AppRoutes.welcome.index
      : AppRoutes.welcome.accounts
    : { pathname: AppRoutes.home, query: { safe: router.query.safe } }
}

const Header = ({ onMenuToggle, onBatchToggle }: HeaderProps): ReactElement => {
  const safeAddress = useSafeAddress()
  const showSafeToken = useSafeTokenEnabled()
  const isProposer = useIsWalletProposer()
  const isSafeOwner = useIsSafeOwner()
  const router = useRouter()
  const enableWc = useHasFeature(FEATURES.NATIVE_WALLETCONNECT)

  // If on the home page, the logo should link to the Accounts or Welcome page, otherwise to the home page
  const logoHref = getLogoLink(router)

  const handleMenuToggle = () => {
    if (onMenuToggle) {
      onMenuToggle((isOpen) => !isOpen)
    } else {
      router.push(logoHref)
    }
  }

  const handleBatchToggle = () => {
    if (onBatchToggle) {
      onBatchToggle((isOpen) => !isOpen)
    }
  }

  const showBatchButton = safeAddress && (!isProposer || isSafeOwner)

  return (
    <Paper className="flex flex-row flex-nowrap items-center relative h-14 bg-[#FFF0BE] px-4 rounded-none border-b-2 border-black">
      <Link href="/home" className="md:ml-10 text-2xl font-nountown text-black flex grow">
        Ka-Ching
      </Link>

      <div className={classnames('flex flex-row items-center', { 'md:mr-10': !safeAddress })}>
        <ConnectWallet />

        {safeAddress && (
          <div className={classnames(css.element, css.networkSelector)}>
            <NetworkSelector offerSafeCreation />
          </div>
        )}
      </div>
    </Paper>
  )
}

export default Header
