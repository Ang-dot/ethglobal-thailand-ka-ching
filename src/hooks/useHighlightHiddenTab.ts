import { useEffect } from 'react'

const TITLE_PREFIX = '‼️ '

const setDocumentTitle = (isPrefixed: boolean) => {
  document.title = isPrefixed ? TITLE_PREFIX + document.title : document.title.replace(TITLE_PREFIX, '')
}

const useHighlightHiddenTab = () => {
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    const reset = () => {
      clearInterval(interval)
      setDocumentTitle(false)
    }

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        reset()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    handleVisibilityChange()

    return () => {
      reset()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])
}

export default useHighlightHiddenTab
