'use client'

import dynamic from 'next/dynamic'
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { siteConfig } from '@/lib/constants'

const AnimatedBackground = dynamic(
  () => import('@/components/animated-background').then((mod) => mod.AnimatedBackground),
  { ssr: false }
)

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden spotlight noise-texture vignette geometric-bg">
      <AnimatedBackground />
      
      <div className="container relative z-10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Greeting */}
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground animate-fade-in">
            Welcome
          </p>
          
          {/* Name */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in [animation-delay:200ms]">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h1>
          
          {/* Title */}
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-muted-foreground sm:text-3xl lg:text-4xl animate-fade-in [animation-delay:400ms]">
            {siteConfig.title}
          </h2>
          
          {/* Description */}
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground animate-fade-in [animation-delay:600ms]">
            {siteConfig.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in [animation-delay:800ms]">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center rounded-lg border-2 border-foreground/20 bg-foreground px-8 text-sm font-semibold text-background shadow-lg transition-all duration-200 hover:bg-[#83CD29] hover:text-white hover:border-[#83CD29] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83CD29]/50"
            >
              <span className="flex items-center gap-2">
                Get in touch
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="#projects"
              className="group inline-flex h-12 items-center justify-center rounded-lg border-2 border-foreground bg-transparent px-8 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-foreground hover:text-background active:scale-[0.98]"
            >
              <span className="flex items-center gap-2">
                View my work
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:scale-105" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center gap-6 animate-fade-in [animation-delay:1000ms]">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[#6366f1]/30 bg-background text-[#6366f1] transition-all duration-200 hover:border-[#6366f1] hover:bg-[#6366f1] hover:text-white hover:shadow-xl hover:scale-110 active:scale-95"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[#0ea5e9]/30 bg-background text-[#0ea5e9] transition-all duration-200 hover:border-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white hover:shadow-xl hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[#ec4899]/30 bg-background text-[#ec4899] transition-all duration-200 hover:border-[#ec4899] hover:bg-[#ec4899] hover:text-white hover:shadow-xl hover:scale-110 active:scale-95"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#contact"
              className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-[#f59e0b]/30 bg-background text-[#f59e0b] transition-all duration-200 hover:border-[#f59e0b] hover:bg-[#f59e0b] hover:text-white hover:shadow-xl hover:scale-110 active:scale-95"
              aria-label="Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">Scroll</span>
        <div className="h-8 w-5 rounded-full border-2 border-primary/50 flex items-start justify-center p-1 group-hover:border-primary transition-colors">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  )
}

