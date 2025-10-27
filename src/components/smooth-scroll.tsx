'use client'

import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return

    // Enhanced smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (anchor && anchor.hash) {
        const id = anchor.hash.slice(1)
        const element = document.getElementById(id)
        
        if (element) {
          e.preventDefault()
          
          const offset = 100 // Navbar height
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
          
          // Update URL
          window.history.pushState({}, '', anchor.hash)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return null
}
