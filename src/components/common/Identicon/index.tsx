import type { ReactElement, CSSProperties } from 'react'
import { useMemo } from 'react'
import Skeleton from '@mui/material/Skeleton'

import css from './styles.module.css'

export interface IdenticonProps {
  size?: number
}

const Identicon = ({ size = 40 }: IdenticonProps): ReactElement => {
  const style = useMemo<CSSProperties | null>(() => {
    return {
      backgroundImage: 'url(/images/common/basketball.png)',
      width: `${size}px`,
      height: `${size}px`,
    }
  }, [size])

  return !style ? <Skeleton variant="rounded" width={size} height={size} /> : <div className={css.icon} style={style} />
}

export default Identicon
