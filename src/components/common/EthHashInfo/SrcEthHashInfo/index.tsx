import classnames from 'classnames'
import type { ReactNode, ReactElement, SyntheticEvent } from 'react'
import { isAddress } from 'ethers'
import { useTheme } from '@mui/material/styles'
import { Box, SvgIcon, Tooltip } from '@mui/material'
import AddressBookIcon from '@/public/images/sidebar/address-book.svg'
import useMediaQuery from '@mui/material/useMediaQuery'
import Identicon from '../../Identicon'
import CopyAddressButton from '../../CopyAddressButton'
import ExplorerButton, { type ExplorerButtonProps } from '../../ExplorerButton'
import { shortenAddress } from '@/utils/formatters'
import ImageFallback from '../../ImageFallback'
import css from './styles.module.css'

export type EthHashInfoProps = {
  address?: string
  chainId?: string
  name?: string | null
  showAvatar?: boolean
  onlyName?: boolean
  showCopyButton?: boolean
  prefix?: string
  showPrefix?: boolean
  copyPrefix?: boolean
  shortAddress?: boolean
  copyAddress?: boolean
  customAvatar?: string
  hasExplorer?: boolean
  avatarSize?: number
  children?: ReactNode
  trusted?: boolean
  ExplorerButtonProps?: ExplorerButtonProps
  isAddressBookName?: boolean
  nameClassname?: string
}

const stopPropagation = (e: SyntheticEvent) => e.stopPropagation()

const SrcEthHashInfo = ({
  address,
  customAvatar,
  prefix = '',
  copyPrefix = true,
  showPrefix = true,
  shortAddress = true,
  copyAddress = true,
  showAvatar = true,
  onlyName = false,
  avatarSize,
  name,
  showCopyButton,
  hasExplorer,
  ExplorerButtonProps,
  children,
  trusted = true,
  isAddressBookName = false,
  nameClassname,
}: EthHashInfoProps): ReactElement => {
  const shouldPrefix = isAddress(address)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const identicon = <Identicon size={avatarSize} />
  const shouldCopyPrefix = shouldPrefix && copyPrefix

  const addressElement = (
    <>
      {address === undefined ? (
        'Not connected'
      ) : (
        <>
          {showPrefix && shouldPrefix && prefix && <>{prefix}: </>}
          <span>{shortAddress || isMobile ? shortenAddress(address) : address}</span>
        </>
      )}
    </>
  )

  return (
    <div className="flex items-center space-x-2">
      {showAvatar && (
        <div
          className={css.avatarContainer}
          style={avatarSize !== undefined ? { width: `${avatarSize}px`, height: `${avatarSize}px` } : undefined}
        >
          {customAvatar ? (
            <ImageFallback src={customAvatar} fallbackComponent={identicon} width={avatarSize} height={avatarSize} />
          ) : (
            identicon
          )}
        </div>
      )}

      <Box overflow="hidden" className={onlyName ? css.inline : undefined} gap={0.5}>
        {name && (
          <Box title={name} display="flex" alignItems="center" gap={0.5}>
            <Box overflow="hidden" textOverflow="ellipsis" className={nameClassname}>
              {name}
            </Box>

            {isAddressBookName && (
              <Tooltip title="From your address book" placement="top">
                <span style={{ lineHeight: 0 }}>
                  <SvgIcon component={AddressBookIcon} inheritViewBox color="border" fontSize="small" />
                </span>
              </Tooltip>
            )}
          </Box>
        )}

        <div className={classnames(css.addressContainer, { [css.inline]: onlyName })}>
          {(!onlyName || !name) && (
            <Box className="overflow-hidden text-ellipsis">
              {copyAddress && address ? (
                <CopyAddressButton prefix={prefix} address={address} copyPrefix={shouldCopyPrefix} trusted={trusted}>
                  {addressElement}
                </CopyAddressButton>
              ) : (
                addressElement
              )}
            </Box>
          )}

          {showCopyButton && address && (
            <CopyAddressButton prefix={prefix} address={address} copyPrefix={shouldCopyPrefix} trusted={trusted} />
          )}

          {hasExplorer && ExplorerButtonProps && (
            <Box color="border.main">
              <ExplorerButton {...ExplorerButtonProps} onClick={stopPropagation} />
            </Box>
          )}

          {children}
        </div>
      </Box>
    </div>
  )
}

export default SrcEthHashInfo
