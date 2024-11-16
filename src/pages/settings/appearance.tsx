import { Checkbox, FormControlLabel, FormGroup, Grid, Paper, Typography } from '@mui/material'
import type { ChangeEvent } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { useAppDispatch, useAppSelector } from '@/store'
import { selectSettings, setCopyShortName } from '@/store/settingsSlice'
import SettingsHeader from '@/components/settings/SettingsHeader'
import { trackEvent, SETTINGS_EVENTS } from '@/services/analytics'
import ExternalLink from '@/components/common/ExternalLink'

const Appearance: NextPage = () => {
  const dispatch = useAppDispatch()
  const settings = useAppSelector(selectSettings)

  const handleToggle = (action: typeof setCopyShortName, event: typeof SETTINGS_EVENTS.APPEARANCE.COPY_PREFIXES) => {
    return (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      dispatch(action(checked))

      trackEvent({
        ...event,
        label: checked,
      })
    }
  }

  return (
    <>
      <Head>
        <title>{'Ka-Ching – Settings – Appearance'}</title>
      </Head>

      <SettingsHeader />

      <main>
        <Paper sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item lg={4} xs={12}>
              <Typography variant="h4" fontWeight="bold" mb={1}>
                Chain-specific addresses
              </Typography>
            </Grid>

            <Grid item xs>
              <Typography mb={2}>
                Choose whether to copy{' '}
                <ExternalLink href="https://eips.ethereum.org/EIPS/eip-3770">EIP-3770</ExternalLink> prefixes when
                copying Ethereum addresses.
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={settings.shortName.copy}
                      onChange={handleToggle(setCopyShortName, SETTINGS_EVENTS.APPEARANCE.COPY_PREFIXES)}
                    />
                  }
                  label="Copy addresses with chain prefix"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </>
  )
}

export default Appearance
