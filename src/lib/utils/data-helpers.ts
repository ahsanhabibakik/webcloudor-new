import type { Project, Service, TeamMember, ProjectCategory, BudgetRange } from '@/types'

// Generic sorting utilities
export const sortByDate = <T extends { completedDate?: Date; createdDate?: Date }>(
  items: T[],
  direction: 'asc' | 'desc' = 'desc'
): T[] => {
  return [...items].sort((a, b) => {
    const dateA = a.completedDate || a.createdDate || new Date(0)
    const dateB = b.completedDate || b.createdDate || new Date(0)
    
    return direction === 'desc' 
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime()
  })
}

export const sortByTitle = <T extends { title: string; name?: string }>(
  items: T[],
  direction: 'asc' | 'desc' = 'asc'
): T[] => {
  return [...items].sort((a, b) => {
    const titleA = (a.title || a.name || '').toLowerCase()
    const titleB = (b.title || b.name || '').toLowerCase()
    
    return direction === 'asc' 
      ? titleA.localeCompare(titleB)
      : titleB.localeCompare(titleA)
  })
}

// Project-specific utilities
export const filterProjectsByCategory = (
  projects: Project[],
  category: ProjectCategory | 'all'
): Project[] => {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export const filterProjectsByTechnology = (
  projects: Project[],
  technology: string
): Project[] => {
  return projects.filter(project =>
    project.technologies.some(tech => 
      tech.name.toLowerCase().includes(technology.toLowerCase())
    )
  )
}

export const filterFeaturedProjects = (projects: Project[]): Project[] => {
  return projects.filter(project => project.featured)
}

export const filterProjectsByDateRange = (
  projects: Project[],
  startDate: Date,
  endDate: Date
): Project[] => {
  return projects.filter(project => {
    const projectDate = project.completedDate
    return projectDate >= startDate && projectDate <= endDate
  })
}

export const searchProjectsAdvanced = (
  projects: Project[],
  query: string,
  searchFields: ('title' | 'description' | 'technologies' | 'category')[] = ['title', 'description', 'technologies']
): Project[] => {
  if (!query.trim()) return projects
  
  const lowercaseQuery = query.toLowerCase()
  
  return projects.filter(project => {
    return searchFields.some(field => {
      switch (field) {
        case 'title':
          return project.title.toLowerCase().includes(lowercaseQuery)
        case 'description':
          return project.description.toLowerCase().includes(lowercaseQuery) ||
                 project.longDescription.toLowerCase().includes(lowercaseQuery)
        case 'technologies':
          return project.technologies.some(tech => 
            tech.name.toLowerCase().includes(lowercaseQuery)
          )
        case 'category':
          return project.category.toLowerCase().includes(lowercaseQuery)
        default:
          return false
      }
    })
  })
}

// Service-specific utilities
export const filterServicesByPriceRange = (
  services: Service[],
  minPrice: number,
  maxPrice: number
): Service[] => {
  return services.filter(service => {
    if (!service.pricing) return false
    
    return service.pricing.some(tier => {
      const priceMatch = tier.price.match(/\$(\d+(?:,\d+)*)/g)
      if (!priceMatch) return false
      
      const prices = priceMatch.map(p => parseInt(p.replace(/[$,]/g, '')))
      const serviceMinPrice = Math.min(...prices)
      const serviceMaxPrice = Math.max(...prices)
      
      return serviceMinPrice <= maxPrice && serviceMaxPrice >= minPrice
    })
  })
}

export const searchServicesAdvanced = (
  services: Service[],
  query: string,
  searchFields: ('title' | 'description' | 'features')[] = ['title', 'description', 'features']
): Service[] => {
  if (!query.trim()) return services
  
  const lowercaseQuery = query.toLowerCase()
  
  return services.filter(service => {
    return searchFields.some(field => {
      switch (field) {
        case 'title':
          return service.title.toLowerCase().includes(lowercaseQuery)
        case 'description':
          return service.shortDescription.toLowerCase().includes(lowercaseQuery) ||
                 service.longDescription.toLowerCase().includes(lowercaseQuery)
        case 'features':
          return service.features.some(feature => 
            feature.toLowerCase().includes(lowercaseQuery)
          )
        default:
          return false
      }
    })
  })
}

// Team member utilities
export const filterTeamMembersByRole = (
  members: TeamMember[],
  role: string
): TeamMember[] => {
  return members.filter(member => 
    member.role.toLowerCase().includes(role.toLowerCase())
  )
}

export const filterTeamMembersBySkill = (
  members: TeamMember[],
  skill: string
): TeamMember[] => {
  return members.filter(member =>
    member.skills.some(memberSkill => 
      memberSkill.toLowerCase().includes(skill.toLowerCase())
    )
  )
}

export const searchTeamMembersAdvanced = (
  members: TeamMember[],
  query: string,
  searchFields: ('name' | 'role' | 'skills' | 'bio')[] = ['name', 'role', 'skills']
): TeamMember[] => {
  if (!query.trim()) return members
  
  const lowercaseQuery = query.toLowerCase()
  
  return members.filter(member => {
    return searchFields.some(field => {
      switch (field) {
        case 'name':
          return member.name.toLowerCase().includes(lowercaseQuery)
        case 'role':
          return member.role.toLowerCase().includes(lowercaseQuery)
        case 'skills':
          return member.skills.some(skill => 
            skill.toLowerCase().includes(lowercaseQuery)
          )
        case 'bio':
          return member.bio.toLowerCase().includes(lowercaseQuery)
        default:
          return false
      }
    })
  })
}

// Pagination utilities
export interface PaginationOptions {
  page: number
  limit: number
}

export interface PaginatedResult<T> {
  data: T[]
  pagination: {
    currentPage: number
    totalPages: number
    totalItems: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}

export const paginateResults = <T>(
  items: T[],
  options: PaginationOptions
): PaginatedResult<T> => {
  const { page, limit } = options
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  
  const paginatedData = items.slice(startIndex, endIndex)
  const totalPages = Math.ceil(items.length / limit)
  
  return {
    data: paginatedData,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems: items.length,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1
    }
  }
}

// Contact form utilities
export const getBudgetRangeLabel = (budget: BudgetRange): string => {
  const labels: Record<BudgetRange, string> = {
    'under-5k': 'Under $5,000',
    '5k-15k': '$5,000 - $15,000',
    '15k-50k': '$15,000 - $50,000',
    '50k-plus': '$50,000+'
  }
  return labels[budget]
}

export const getProjectCategoryLabel = (category: ProjectCategory): string => {
  const labels: Record<ProjectCategory, string> = {
    'web-app': 'Web Application',
    'e-commerce': 'E-commerce',
    'corporate': 'Corporate Website',
    'mobile': 'Mobile Application'
  }
  return labels[category]
}

// Data aggregation utilities
export const getProjectStats = (projects: Project[]) => {
  const totalProjects = projects.length
  const featuredProjects = projects.filter(p => p.featured).length
  const categoryCounts = projects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1
    return acc
  }, {} as Record<ProjectCategory, number>)
  
  const technologyCounts = projects.reduce((acc, project) => {
    project.technologies.forEach(tech => {
      acc[tech.name] = (acc[tech.name] || 0) + 1
    })
    return acc
  }, {} as Record<string, number>)
  
  return {
    totalProjects,
    featuredProjects,
    categoryCounts,
    technologyCounts,
    mostUsedTechnology: Object.entries(technologyCounts)
      .sort(([, a], [, b]) => b - a)[0]?.[0] || null
  }
}

export const getServiceStats = (services: Service[]) => {
  const totalServices = services.length
  const servicesWithPricing = services.filter(s => s.pricing).length
  const averageProcessSteps = services.reduce((acc, service) => 
    acc + service.process.length, 0) / services.length
  
  return {
    totalServices,
    servicesWithPricing,
    averageProcessSteps: Math.round(averageProcessSteps)
  }
}

export const getTeamStats = (members: TeamMember[]) => {
  const totalMembers = members.length
  const skillCounts = members.reduce((acc, member) => {
    member.skills.forEach(skill => {
      acc[skill] = (acc[skill] || 0) + 1
    })
    return acc
  }, {} as Record<string, number>)
  
  const roleCounts = members.reduce((acc, member) => {
    const role = member.role.split(' ')[0] || 'Unknown' // Get first word of role
    acc[role] = (acc[role] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  return {
    totalMembers,
    skillCounts,
    roleCounts,
    mostCommonSkill: Object.entries(skillCounts)
      .sort(([, a], [, b]) => b - a)[0]?.[0] || null
  }
}