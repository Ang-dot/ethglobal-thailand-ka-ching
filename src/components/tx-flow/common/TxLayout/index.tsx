import { type ReactElement, type ReactNode, useEffect, useState } from 'react'
import { Box, Grid, Button, IconButton, useMediaQuery } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useTheme } from '@mui/material/styles'
import type { TransactionSummary } from '@safe-global/safe-gateway-typescript-sdk'
import classnames from 'classnames'
import SafeTxProvider, { SafeTxContext } from '../../SafeTxProvider'
import { TxInfoProvider } from '@/components/tx-flow/TxInfoProvider'
import TxStatusWidget from '../TxStatusWidget'
import css from './styles.module.css'
import SafeLogo from '@/public/images/logo-no-text.svg'
import { TxSecurityProvider } from '@/components/tx/security/shared/TxSecurityContext'
import ChainIndicator from '@/components/common/ChainIndicator'
import SecurityWarnings from '@/components/tx/security/SecurityWarnings'
import Image from 'next/image'

type TxLayoutProps = {
  title: ReactNode
  children: ReactNode
  additionalChildren?: ReactNode
  step?: number
  txSummary?: TransactionSummary
  onBack?: () => void
  isBatch?: boolean
  isReplacement?: boolean
  isMessage?: boolean
}

const TxLayout = ({
  title,
  children,
  additionalChildren,
  step = 0,
  txSummary,
  onBack,
  isBatch = false,
  isReplacement = false,
  isMessage = false,
}: TxLayoutProps): ReactElement => {
  const [statusVisible, setStatusVisible] = useState<boolean>(true)

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  const steps = Array.isArray(children) ? children : [children]

  useEffect(() => {
    setStatusVisible(!isSmallScreen)
  }, [isSmallScreen])

  const toggleStatus = () => {
    setStatusVisible((prev) => !prev)
  }

  return (
    <SafeTxProvider>
      <TxInfoProvider>
        <TxSecurityProvider>
          <>
            {/* Header status button */}
            {!isReplacement && (
              <IconButton
                className={css.statusButton}
                aria-label="Transaction status"
                size="large"
                onClick={toggleStatus}
              >
                <SafeLogo width={16} height={16} />
              </IconButton>
            )}

            <div className={css.container}>
              <Grid container gap={3} justifyContent="center">
                {/* Main content */}
                <Grid item xs={12} md={7} className="pixel-card p-10">
                  <div className={css.titleWrapper}>
                    <div className="font-londrina text-[18px] md:text-[26px] lg:text-[32px] xl:text-[42px] capitalize">
                      {title}
                    </div>

                    <ChainIndicator inline className="!text-xl !font-bold" />
                  </div>

                  <div className={css.step}>
                    {steps[step]}

                    {onBack && step > 0 && (
                      <button
                        data-testid="modal-back-btn"
                        onClick={onBack}
                        className="pixel-white-btn !absolute bottom-0 left-0"
                      >
                        <ArrowBackIcon fontSize="small" className="mr-1" />
                        Back
                      </button>
                    )}
                  </div>
                </Grid>

                {/* Sidebar */}
                {!isReplacement && (
                  <Grid item xs={12} md={4} className={classnames(css.widget, { [css.active]: statusVisible })}>
                    {statusVisible && (
                      <TxStatusWidget
                        step={step}
                        txSummary={txSummary}
                        handleClose={() => setStatusVisible(false)}
                        isBatch={isBatch}
                        isMessage={isMessage}
                      />
                    )}

                    <Box className={css.sticky}>
                      <SecurityWarnings />
                    </Box>
                  </Grid>
                )}

                {additionalChildren && additionalChildren}
              </Grid>
            </div>
          </>
        </TxSecurityProvider>
      </TxInfoProvider>
    </SafeTxProvider>
  )
}

export default TxLayout
