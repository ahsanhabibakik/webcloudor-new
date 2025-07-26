import { describe, it, expect } from '@jest/globals'
import {
  validateProject,
  validateService,
  validateContactForm,
  validateTeamMember,
  contactFormSchema
} from '../validations'
import {
  mockProjects,
  mockServices,
  mockTeamMembers,
  getFeaturedProjects,
  getProjectsByCategory,
  getProjectById,
  getRecentProjects,
  searchProjects,
  getServiceById,
  getFeaturedServices,
  searchServices,
  getTeamMemberById,
  searchTeamMembers
} from '../data'
import {
  filterProjectsByCategory,
  filterProjectsByTechnology,
  searchProjectsAdvanced,
  sortByDate,
  sortByTitle,
  paginateResults,
  getBudgetRangeLabel,
  getProjectCategoryLabel,
  getProjectStats
} from '../utils/data-helpers'

describe('Data Validation', () => {
  describe('Project validation', () => {
    it('should validate a correct project', () => {
      const validProject = mockProjects[0]
      const result = validateProject(validProject)
      expect(result.success).toBe(true)
    })

    it('should reject project with missing required fields', () => {
      const invalidProject = {
        title: 'Test Project'
        // Missing required fields
      }
      const result = validateProject(invalidProject)
      expect(result.success).toBe(false)
    })

    it('should reject project with empty image', () => {
      const invalidProject = {
        ...mockProjects[0],
        image: ''
      }
      const result = validateProject(invalidProject)
      expect(result.success).toBe(false)
    })
  })

  describe('Service validation', () => {
    it('should validate a correct service', () => {
      const validService = mockServices[0]
      const result = validateService(validService)
      expect(result.success).toBe(true)
    })

    it('should reject service with empty features array', () => {
      const invalidService = {
        ...mockServices[0],
        features: []
      }
      const result = validateService(invalidService)
      expect(result.success).toBe(false)
    })
  })

  describe('Contact form validation', () => {
    it('should validate a correct contact form', () => {
      const validForm = {
        name: 'John Doe',
        email: 'john@example.com',
        company: 'Test Company',
        projectType: 'web-app' as const,
        budget: '5k-15k' as const,
        message: 'This is a test message with enough characters.',
        timeline: '3 months'
      }
      const result = validateContactForm(validForm)
      expect(result.success).toBe(true)
    })

    it('should reject form with invalid email', () => {
      const invalidForm = {
        name: 'John Doe',
        email: 'invalid-email',
        projectType: 'web-app' as const,
        budget: '5k-15k' as const,
        message: 'This is a test message.',
        timeline: '3 months'
      }
      const result = validateContactForm(invalidForm)
      expect(result.success).toBe(false)
    })

    it('should reject form with short message', () => {
      const invalidForm = {
        name: 'John Doe',
        email: 'john@example.com',
        projectType: 'web-app' as const,
        budget: '5k-15k' as const,
        message: 'Short',
        timeline: '3 months'
      }
      const result = validateContactForm(invalidForm)
      expect(result.success).toBe(false)
    })
  })

  describe('Team member validation', () => {
    it('should validate a correct team member', () => {
      const validMember = mockTeamMembers[0]
      const result = validateTeamMember(validMember)
      expect(result.success).toBe(true)
    })

    it('should reject member with empty social URLs', () => {
      const invalidMember = {
        ...mockTeamMembers[0],
        social: {
          linkedin: ''
        }
      }
      const result = validateTeamMember(invalidMember)
      expect(result.success).toBe(false)
    })
  })
})

describe('Data Queries', () => {
  describe('Project queries', () => {
    it('should get featured projects', () => {
      const featured = getFeaturedProjects()
      expect(featured.length).toBeGreaterThan(0)
      expect(featured.every(p => p.featured)).toBe(true)
    })

    it('should get projects by category', () => {
      const ecommerceProjects = getProjectsByCategory('e-commerce')
      expect(ecommerceProjects.every(p => p.category === 'e-commerce')).toBe(true)
    })

    it('should get project by ID', () => {
      const project = getProjectById('ecommerce-platform')
      expect(project).toBeDefined()
      expect(project?.id).toBe('ecommerce-platform')
    })

    it('should get recent projects', () => {
      const recent = getRecentProjects(2)
      expect(recent.length).toBeLessThanOrEqual(2)
      // Should be sorted by completion date (most recent first)
      if (recent.length > 1) {
        expect(recent[0]!.completedDate.getTime()).toBeGreaterThanOrEqual(
          recent[1]!.completedDate.getTime()
        )
      }
    })

    it('should search projects', () => {
      const results = searchProjects('e-commerce')
      expect(results.length).toBeGreaterThan(0)
      expect(results.some(p => 
        p.title.toLowerCase().includes('e-commerce') ||
        p.description.toLowerCase().includes('e-commerce')
      )).toBe(true)
    })
  })

  describe('Service queries', () => {
    it('should get service by ID', () => {
      const service = getServiceById('web-development')
      expect(service).toBeDefined()
      expect(service?.id).toBe('web-development')
    })

    it('should get featured services', () => {
      const featured = getFeaturedServices(3)
      expect(featured.length).toBeLessThanOrEqual(3)
    })

    it('should search services', () => {
      const results = searchServices('web')
      expect(results.length).toBeGreaterThan(0)
    })
  })

  describe('Team queries', () => {
    it('should get team member by ID', () => {
      const member = getTeamMemberById('john-doe')
      expect(member).toBeDefined()
      expect(member?.id).toBe('john-doe')
    })

    it('should search team members', () => {
      const results = searchTeamMembers('developer')
      expect(results.length).toBeGreaterThan(0)
      expect(results.some(m => 
        m.role.toLowerCase().includes('developer')
      )).toBe(true)
    })
  })
})

describe('Data Utilities', () => {
  describe('Filtering utilities', () => {
    it('should filter projects by category', () => {
      const webApps = filterProjectsByCategory(mockProjects, 'web-app')
      expect(webApps.every(p => p.category === 'web-app')).toBe(true)
    })

    it('should filter projects by technology', () => {
      const reactProjects = filterProjectsByTechnology(mockProjects, 'React')
      expect(reactProjects.every(p => 
        p.technologies.some(t => t.name.includes('React'))
      )).toBe(true)
    })

    it('should perform advanced project search', () => {
      const results = searchProjectsAdvanced(mockProjects, 'Next.js', ['technologies'])
      expect(results.every(p => 
        p.technologies.some(t => t.name.includes('Next.js'))
      )).toBe(true)
    })
  })

  describe('Sorting utilities', () => {
    it('should sort by date descending', () => {
      const sorted = sortByDate(mockProjects, 'desc')
      for (let i = 0; i < sorted.length - 1; i++) {
        expect(sorted[i]!.completedDate.getTime()).toBeGreaterThanOrEqual(
          sorted[i + 1]!.completedDate.getTime()
        )
      }
    })

    it('should sort by title ascending', () => {
      const sorted = sortByTitle(mockProjects, 'asc')
      for (let i = 0; i < sorted.length - 1; i++) {
        expect(sorted[i]!.title.toLowerCase().localeCompare(
          sorted[i + 1]!.title.toLowerCase()
        )).toBeLessThanOrEqual(0)
      }
    })
  })

  describe('Pagination utilities', () => {
    it('should paginate results correctly', () => {
      const result = paginateResults(mockProjects, { page: 1, limit: 2 })
      expect(result.data.length).toBeLessThanOrEqual(2)
      expect(result.pagination.currentPage).toBe(1)
      expect(result.pagination.totalItems).toBe(mockProjects.length)
      expect(result.pagination.totalPages).toBe(Math.ceil(mockProjects.length / 2))
    })

    it('should handle pagination for second page', () => {
      const result = paginateResults(mockProjects, { page: 2, limit: 2 })
      expect(result.pagination.currentPage).toBe(2)
      expect(result.pagination.hasPreviousPage).toBe(true)
    })
  })

  describe('Label utilities', () => {
    it('should get budget range label', () => {
      expect(getBudgetRangeLabel('5k-15k')).toBe('$5,000 - $15,000')
      expect(getBudgetRangeLabel('under-5k')).toBe('Under $5,000')
    })

    it('should get project category label', () => {
      expect(getProjectCategoryLabel('web-app')).toBe('Web Application')
      expect(getProjectCategoryLabel('e-commerce')).toBe('E-commerce')
    })
  })

  describe('Statistics utilities', () => {
    it('should calculate project stats', () => {
      const stats = getProjectStats(mockProjects)
      expect(stats.totalProjects).toBe(mockProjects.length)
      expect(stats.featuredProjects).toBe(mockProjects.filter(p => p.featured).length)
      expect(stats.categoryCounts).toBeDefined()
      expect(stats.technologyCounts).toBeDefined()
    })
  })
})

describe('Zod Schema Integration', () => {
  it('should work with React Hook Form', () => {
    // Test that the schema can be used with form libraries
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      projectType: 'web-app' as const,
      budget: '5k-15k' as const,
      message: 'This is a test message for the contact form.',
      timeline: '2-3 months'
    }

    const result = contactFormSchema.safeParse(testData)
    expect(result.success).toBe(true)
    
    if (result.success) {
      expect(result.data.name).toBe('Test User')
      expect(result.data.email).toBe('test@example.com')
    }
  })
})