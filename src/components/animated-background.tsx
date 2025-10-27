'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Waves from './Waves'

export function AnimatedBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 bg-background" />
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Waves />
    </div>
  )
}
