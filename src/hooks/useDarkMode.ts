import { useEffect, useState } from 'react'
import { useAppSelector } from '@/store'
import { selectSettings } from '@/store/settingsSlice'

const isSystemDarkMode = (): boolean => {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const useDarkMode = (): boolean => {
  const settings = useAppSelector(selectSettings)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    setIsDarkMode(false)
    document.documentElement.setAttribute('data-theme', 'light')
  }, [settings.theme.darkMode])

  return isDarkMode
}
