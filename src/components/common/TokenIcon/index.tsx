import { type ReactElement } from 'react'
import ImageFallback from '../ImageFallback'
import css from './styles.module.css'
import classNames from "classnames";
import classnames from "classnames";

const FALLBACK_ICON = '/images/common/token-placeholder.svg'

const TokenIcon = ({
  logoUri,
  tokenSymbol,
  size = 26,
  fallbackSrc,
  className,
}: {
  logoUri?: string
  tokenSymbol?: string
  size?: number
  fallbackSrc?: string
  className?: string
}): ReactElement => {
  return (
    <ImageFallback
      src={logoUri}
      alt={tokenSymbol}
      fallbackSrc={fallbackSrc || FALLBACK_ICON}
      height={size}
      className={classnames(css.image, className)}
    />
  )
}

export default TokenIcon
