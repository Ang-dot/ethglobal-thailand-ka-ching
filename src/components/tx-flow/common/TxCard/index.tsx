import type { ReactNode } from 'react'
import { Card, CardContent } from '@mui/material'
import css from '../styles.module.css'
import classnames from 'classnames'

const sx = { my: 2, border: 0 }

const TxCard = ({ children }: { children: ReactNode }) => {
  return (
    <Card sx={sx}>
      <CardContent className={classnames(css.cardContent, 'mt-4 p-0')}>{children}</CardContent>
    </Card>
  )
}

export default TxCard
