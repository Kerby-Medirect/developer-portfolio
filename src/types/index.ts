export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  thumbnail: string
  images: string[]
  techStack: TechStack[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  createdAt: string
  category: ProjectCategory
  challenges: string[]
  solutions: string[]
  inspiration: string
  purpose: string
}

export interface TechStack {
  name: string
  icon: string
  color: string
}

export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'api' | 'other'

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'other'
}
