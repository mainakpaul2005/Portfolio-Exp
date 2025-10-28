'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/constants'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Education', href: '/#education' },
  { name: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('/')
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Detect which section is currently in view
      const sections = navItems
        .filter(item => item.href.includes('#'))
        .map(item => ({
          id: item.href.replace('/#', ''),
          href: item.href
        }))
      
      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection('/')
        return
      }
      
      // Find the section that's currently most visible
      let currentSection = '/'
      let maxVisibility = 0
      
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const viewportHeight = window.innerHeight
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(0, rect.top)
          const visibleBottom = Math.min(viewportHeight, rect.bottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          
          // Prioritize sections in the upper portion of viewport
          const proximityToTop = Math.max(0, 300 - Math.abs(rect.top))
          const visibility = visibleHeight + proximityToTop
          
          if (visibility > maxVisibility && rect.top < viewportHeight / 2) {
            maxVisibility = visibility
            currentSection = section.href
          }
        }
      }
      
      setActiveSection(currentSection)
    }
    
    handleScroll() // Run on mount
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Smooth scroll to sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '')
      const element = document.getElementById(id)
      if (element) {
        const offset = 100 // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        
        // Update URL without triggering navigation
        window.history.pushState({}, '', href)
        setActiveSection(href)
        setIsOpen(false) // Close mobile menu if open
      }
    } else if (href === '/') {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setActiveSection('/')
      setIsOpen(false) // Close mobile menu if open
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'py-2'
          : 'py-4'
      )}
    >
      <div className="container">
        <nav className={cn(
          'relative rounded-lg border-2 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-lg border-foreground/10 shadow-xl'
            : 'bg-background/80 backdrop-blur-md border-foreground/5 shadow-lg'
        )}>
          
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="group relative flex items-center gap-2 text-xl font-bold tracking-tight transition-all duration-200 hover:text-primary"
            >
              <span className="relative font-heading">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">M</span>
              </span>
              <span className="text-primary transition-all duration-300 group-hover:text-accent group-hover:-rotate-180 inline-block">{'/>'}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200',
                      isActive
                        ? 'text-background bg-foreground'
                        : 'text-foreground hover:text-background hover:bg-foreground/90'
                    )}
                  >
                    {/* Content */}
                    <span className="relative z-10">
                      {item.name}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Desktop Avatar */}
            <div className="hidden md:flex items-center">
              <Link href="/#about" className="inline-flex items-center justify-center rounded-full border border-border p-[2px] hover:ring-2 hover:ring-foreground/20 transition">
                <Image
                  src="/profile1.jpg"
                  alt={`${siteConfig.name} avatar`}
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full object-cover"
                  priority
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  'relative inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 transition-all duration-300',
                  isOpen 
                    ? 'border-primary bg-primary/10 rotate-90' 
                    : 'border-border bg-background/50 hover:border-primary hover:bg-primary/5'
                )}
                aria-label="Toggle menu"
              >
                <Menu className={cn(
                  'absolute h-5 w-5 text-primary transition-all duration-300',
                  isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                )} />
                <X className={cn(
                  'absolute h-5 w-5 text-primary transition-all duration-300',
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                )} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={cn(
            'overflow-hidden transition-all duration-500 md:hidden',
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}>
            <div className="border-t border-border/50 px-4 py-4 space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'group relative flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200',
                      isActive
                        ? 'bg-foreground text-background'
                        : 'text-foreground hover:bg-foreground/90 hover:text-background'
                    )}
                    style={{ 
                      transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                      animationDelay: isOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {/* Text */}
                    <span className="flex-1">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-background" />
                    )}
                    
                    {/* Border accent */}
                    <span className={cn(
                      'absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-background transition-all duration-200',
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                    )} />
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
