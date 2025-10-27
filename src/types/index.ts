export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
  logo?: string
}

export interface Skill {
  name: string
  level: number // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'other'
}
