'use client'

import { useEffect, useState, useRef } from 'react'

export function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0)
  const startTime = useRef<number | null>(null)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (!isInView) return

    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp
      const elapsed = timestamp - startTime.current
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        raf.current = requestAnimationFrame(step)
      }
    }

    raf.current = requestAnimationFrame(step)

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [isInView, target, duration])

  return count
}
