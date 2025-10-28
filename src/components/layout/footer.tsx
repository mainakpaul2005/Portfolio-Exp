'use client'

import Link from 'next/link'
import { Github, Linkedin, Instagram, Mail, Heart, Code, Coffee, MapPin, Phone, Calendar } from 'lucide-react'
import { siteConfig } from '@/lib/constants'
import { Separator } from '@/components/ui/separator'

const socialLinks = [
  { 
    icon: Github, 
    href: siteConfig.links.github, 
    label: 'GitHub',
    color: 'hover:text-[#333] dark:hover:text-white'
  },
  { 
    icon: Linkedin, 
    href: siteConfig.links.linkedin, 
    label: 'LinkedIn',
    color: 'hover:text-[#0077B5]'
  },
  { 
    icon: Instagram, 
    href: siteConfig.links.instagram, 
    label: 'Instagram',
    color: 'hover:text-[#E4405F]'
  },
  { 
    icon: Mail, 
    href: `mailto:${siteConfig.links.email}`, 
    label: 'Email',
    color: 'hover:text-[#EA4335]'
  },
]

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'MySQL'
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Based in India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Available for work</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} {siteConfig.name}.</span>
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and</span>
            <Coffee className="h-4 w-4 text-amber-600" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              Let&apos;s connect:
            </span>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-all duration-200 ${link.color} hover:scale-110`}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span>Back to top</span>
            <div className="h-4 w-4 rotate-180">
              ↓
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}
