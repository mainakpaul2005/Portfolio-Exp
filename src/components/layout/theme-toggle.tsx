'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 backdrop-blur-sm"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 text-muted-foreground" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-border bg-gradient-to-br from-background to-secondary/50 backdrop-blur-sm transition-all duration-500 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-110"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative h-5 w-5">
        <Sun className={`absolute inset-0 h-5 w-5 rotate-0 scale-100 text-amber-500 transition-all duration-500 ${
          theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
        }`} />
        <Moon className={`absolute inset-0 h-5 w-5 rotate-90 scale-0 text-cyan-400 transition-all duration-500 ${
          theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
        }`} />
      </div>
      
      {/* Animated background glow */}
      <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-primary/30 group-hover:via-accent/30 group-hover:to-primary/30 group-hover:opacity-100 animate-gradient bg-[length:200%_200%]" />
      
      {/* Orbital ring effect */}
      <span className="absolute inset-0 rounded-xl border border-primary/0 transition-all duration-500 group-hover:border-primary/50 group-hover:animate-spin-slow" style={{ animationDuration: '8s' }} />
    </button>
  )
}
