import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  SvgIcon,
  Typography,
} from '@mui/material'
import type { AlertColor } from '@mui/material'
import type { ReactElement } from 'react'
import React from 'react'
import LightbulbIcon from '@/public/images/common/lightbulb.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import css from 'src/components/new-safe/create/InfoWidget/styles.module.css'
import { CREATE_SAFE_EVENTS, trackEvent } from '@/services/analytics'

type InfoWidgetProps = {
  title: string
  steps: { title: string; text: string | ReactElement }[]
  variant: AlertColor
  startExpanded?: boolean
}

const InfoWidget = ({ title, steps, variant, startExpanded = false }: InfoWidgetProps): ReactElement | null => {
  if (steps.length === 0) {
    return null
  }

  return (
    <Card
      sx={{
        '&::before': {
          background: ({ palette }) => `${palette[variant]?.main} !important`,
        },
        '&::after': {
          background: ({ palette }) => `${palette[variant]?.background} !important`,
        },
      }}
      className="pixel-card p-5 space-y-4"
    >
      <CardHeader
        className="p-0"
        title={
          <Box className={css.title}>
            <SvgIcon
              component={LightbulbIcon}
              inheritViewBox
              sx={{ color: ({ palette }) => palette[variant]?.light }}
            />
            <Typography className="font-bold text-xl" sx={{ color: ({ palette }) => palette[variant]?.main }}>
              {title}
            </Typography>
          </Box>
        }
      />
      <Box className={css.tipsList}>
        <CardContent>
          {steps.map(({ title, text }) => {
            return (
              <Accordion
                key={title}
                className={css.tipAccordion}
                defaultExpanded={startExpanded}
                onChange={(e, expanded) => expanded && trackEvent({ ...CREATE_SAFE_EVENTS.OPEN_HINT, label: title })}
              >
                <AccordionSummary
                  expandIcon={
                    <IconButton sx={{ '&:hover': { background: ({ palette }) => palette[variant]?.light } }}>
                      <ExpandMoreIcon sx={{ color: ({ palette }) => palette[variant]?.main }} />
                    </IconButton>
                  }
                  className="p-0"
                >
                  {title}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">{text}</Typography>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </CardContent>
      </Box>
    </Card>
  )
}

export default InfoWidget
