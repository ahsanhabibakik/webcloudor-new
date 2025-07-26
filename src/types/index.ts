export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  technologies: Technology[]
  category: ProjectCategory
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  completedDate: Date
}

export interface Technology {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tool'
  icon?: string
}

export type ProjectCategory = 'web-app' | 'e-commerce' | 'corporate' | 'mobile'

export interface Service {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  icon: string
  features: string[]
  process: ProcessStep[]
  pricing?: PricingTier[]
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  duration: string
}

export interface PricingTier {
  name: string
  price: string
  features: string[]
  popular?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType: ProjectCategory
  budget: BudgetRange
  message: string
  timeline: string
}

export type BudgetRange = 'under-5k' | '5k-15k' | '15k-50k' | '50k-plus'

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  skills: string[]
  social: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

export interface NavItem {
  title: string
  href: string | any
  description?: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
  }
}

// Layout component interfaces
export interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export interface NavbarProps {
  className?: string
  currentPath?: string
}

export interface FooterProps {
  className?: string
  minimal?: boolean
}