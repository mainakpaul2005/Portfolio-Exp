'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { Project } from '@/types'

// Sample project data - replace with your actual projects
const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with cart, checkout, and payment integration.',
    image: '/projects/project-1.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates.',
    image: '/projects/project-2.jpg',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://task-manager-demo.com',
    featured: true,
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description:
      'An AI-powered content generation tool using OpenAI API.',
    image: '/projects/project-3.jpg',
    tags: ['Next.js', 'OpenAI', 'Tailwind', 'Vercel'],
    github: 'https://github.com/yourusername/ai-generator',
    demo: 'https://ai-generator-demo.com',
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A collection of projects I&apos;ve worked on
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="group relative flex flex-col overflow-hidden border-2 border-foreground/10 bg-card/20 backdrop-blur-2xl transition-all duration-300 hover:border-foreground/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none z-10" />
                
                {/* Image with overlay */}
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="hsl(var(--muted))"/>
                          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="hsl(var(--muted-foreground))" font-family="Arial, sans-serif" font-size="16">
                            ${project.title}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                
                <CardHeader className="relative z-20">
                  <CardTitle className="text-xl group-hover:text-foreground transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2 group-hover:text-muted-foreground/80 transition-colors duration-300">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 relative z-20">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="px-2.5 py-0.5 text-xs font-medium border border-foreground/10 bg-background/80 backdrop-blur-sm transition-all duration-200 group-hover:border-foreground/30 group-hover:bg-foreground/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="gap-2 relative z-20 pt-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 flex-1 items-center justify-center rounded-lg border-2 border-foreground/20 bg-background/80 backdrop-blur-sm px-4 text-sm font-semibold transition-all duration-200 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-lg"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 flex-1 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  )}
                </CardFooter>
                
                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
