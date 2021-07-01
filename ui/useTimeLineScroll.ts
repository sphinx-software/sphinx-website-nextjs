import { useCallback, useEffect, useState } from 'react'

export default function useTimeLineScroll(ref: any): [Record<string, number>] {
  const [timeLineYOffset, setTimeLineYOffset] = useState(
    process.browser ? ref?.current?.pageXOffset || 0 : 0
  )
  const handleScrollEvent = function () {
    if (process.browser) {
      setTimeLineYOffset(ref?.current?.pageXOffset)
    }
  }

  useEffect(() => {
    if (process.browser) {
      ref?.current?.addEventListener('scroll', handleScrollEvent)
      return () =>
        ref?.current?.removeEventListener('scroll', handleScrollEvent)
    }
  }, [handleScrollEvent, ref])

  return [{ timeLineYOffset }]
}
