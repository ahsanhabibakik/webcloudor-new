import { z } from 'zod'
import type { ProjectCategory, BudgetRange } from '@/types'

// Project validation schema
export const projectSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  description: z.string().min(1, 'Description is required').max(200, 'Description must be less than 200 characters'),
  longDescription: z.string().min(1, 'Long description is required'),
  image: z.string().min(1, 'Image is required'),
  gallery: z.array(z.string().min(1, 'Gallery image cannot be empty')),
  technologies: z.array(z.object({
    name: z.string().min(1, 'Technology name is required'),
    category: z.enum(['frontend', 'backend', 'database', 'tool']),
    icon: z.string().optional()
  })),
  category: z.enum(['web-app', 'e-commerce', 'corporate', 'mobile']),
  liveUrl: z.string().min(1, 'Live URL cannot be empty').optional(),
  githubUrl: z.string().min(1, 'GitHub URL cannot be empty').optional(),
  featured: z.boolean(),
  completedDate: z.date()
})

// Service validation schema
export const serviceSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  shortDescription: z.string().min(1, 'Short description is required').max(150, 'Short description must be less than 150 characters'),
  longDescription: z.string().min(1, 'Long description is required'),
  icon: z.string().min(1, 'Icon is required'),
  features: z.array(z.string().min(1, 'Feature cannot be empty')).min(1, 'At least one feature is required'),
  process: z.array(z.object({
    step: z.number().positive('Step must be positive'),
    title: z.string().min(1, 'Step title is required'),
    description: z.string().min(1, 'Step description is required'),
    duration: z.string().min(1, 'Duration is required')
  })),
  pricing: z.array(z.object({
    name: z.string().min(1, 'Pricing tier name is required'),
    price: z.string().min(1, 'Price is required'),
    features: z.array(z.string().min(1, 'Feature cannot be empty')),
    popular: z.boolean().optional()
  })).optional()
})

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  company: z.string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  projectType: z.enum(['web-app', 'e-commerce', 'corporate', 'mobile'], {
    required_error: 'Please select a project type'
  }),
  budget: z.enum(['under-5k', '5k-15k', '15k-50k', '50k-plus'], {
    required_error: 'Please select a budget range'
  }),
  message: z.string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  timeline: z.string()
    .min(1, 'Timeline is required')
    .max(100, 'Timeline must be less than 100 characters')
})

// Team member validation schema
export const teamMemberSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  name: z.string().min(1, 'Name is required').max(50, 'Name must be less than 50 characters'),
  role: z.string().min(1, 'Role is required').max(50, 'Role must be less than 50 characters'),
  bio: z.string().min(1, 'Bio is required').max(500, 'Bio must be less than 500 characters'),
  image: z.string().min(1, 'Image is required'),
  skills: z.array(z.string().min(1, 'Skill cannot be empty')),
  social: z.object({
    linkedin: z.string().min(1, 'LinkedIn URL cannot be empty').optional(),
    github: z.string().min(1, 'GitHub URL cannot be empty').optional(),
    twitter: z.string().min(1, 'Twitter URL cannot be empty').optional()
  })
})

// Export types inferred from schemas
export type ProjectInput = z.infer<typeof projectSchema>
export type ServiceInput = z.infer<typeof serviceSchema>
export type ContactFormInput = z.infer<typeof contactFormSchema>
export type TeamMemberInput = z.infer<typeof teamMemberSchema>

// Validation helper functions
export const validateProject = (data: unknown) => {
  return projectSchema.safeParse(data)
}

export const validateService = (data: unknown) => {
  return serviceSchema.safeParse(data)
}

export const validateContactForm = (data: unknown) => {
  return contactFormSchema.safeParse(data)
}

export const validateTeamMember = (data: unknown) => {
  return teamMemberSchema.safeParse(data)
}