import type { Project } from '@/types'

export const mockProjects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Modern E-commerce Platform',
    description: 'Full-stack e-commerce solution with advanced features and seamless user experience',
    longDescription: 'A comprehensive e-commerce platform built with Next.js and modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, order management, and admin dashboard. The platform is optimized for performance and SEO, with responsive design across all devices.',
    image: '/projects/ecommerce-hero.jpg',
    gallery: [
      '/projects/ecommerce-1.jpg',
      '/projects/ecommerce-2.jpg',
      '/projects/ecommerce-3.jpg',
      '/projects/ecommerce-4.jpg'
    ],
    technologies: [
      { name: 'Next.js', category: 'frontend', icon: 'nextjs' },
      { name: 'React', category: 'frontend', icon: 'react' },
      { name: 'TypeScript', category: 'frontend', icon: 'typescript' },
      { name: 'Tailwind CSS', category: 'frontend', icon: 'tailwind' },
      { name: 'Node.js', category: 'backend', icon: 'nodejs' },
      { name: 'PostgreSQL', category: 'database', icon: 'postgresql' },
      { name: 'Stripe', category: 'tool', icon: 'stripe' }
    ],
    category: 'e-commerce',
    liveUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/agency/ecommerce-platform',
    featured: true,
    completedDate: new Date('2024-01-15')
  },
  {
    id: 'corporate-website',
    title: 'Corporate Website Redesign',
    description: 'Modern corporate website with CMS integration and advanced analytics',
    longDescription: 'Complete redesign and development of a corporate website for a Fortune 500 company. The project included brand refresh, content management system integration, advanced analytics setup, and performance optimization. The site features dynamic content, multi-language support, and seamless integration with existing business systems.',
    image: '/projects/corporate-hero.jpg',
    gallery: [
      '/projects/corporate-1.jpg',
      '/projects/corporate-2.jpg',
      '/projects/corporate-3.jpg'
    ],
    technologies: [
      { name: 'Next.js', category: 'frontend', icon: 'nextjs' },
      { name: 'React', category: 'frontend', icon: 'react' },
      { name: 'TypeScript', category: 'frontend', icon: 'typescript' },
      { name: 'Sanity CMS', category: 'tool', icon: 'sanity' },
      { name: 'Vercel', category: 'tool', icon: 'vercel' },
      { name: 'Google Analytics', category: 'tool', icon: 'analytics' }
    ],
    category: 'corporate',
    liveUrl: 'https://corporate-client.example.com',
    featured: true,
    completedDate: new Date('2023-11-20')
  },
  {
    id: 'task-management-app',
    title: 'Task Management Web App',
    description: 'Collaborative task management application with real-time updates',
    longDescription: 'A comprehensive task management web application designed for teams and individuals. Features include project organization, task assignment, real-time collaboration, file attachments, time tracking, and detailed reporting. The app includes mobile-responsive design and offline functionality.',
    image: '/projects/taskapp-hero.jpg',
    gallery: [
      '/projects/taskapp-1.jpg',
      '/projects/taskapp-2.jpg',
      '/projects/taskapp-3.jpg',
      '/projects/taskapp-4.jpg'
    ],
    technologies: [
      { name: 'React', category: 'frontend', icon: 'react' },
      { name: 'TypeScript', category: 'frontend', icon: 'typescript' },
      { name: 'Material-UI', category: 'frontend', icon: 'mui' },
      { name: 'Node.js', category: 'backend', icon: 'nodejs' },
      { name: 'Express', category: 'backend', icon: 'express' },
      { name: 'MongoDB', category: 'database', icon: 'mongodb' },
      { name: 'Socket.io', category: 'tool', icon: 'socketio' }
    ],
    category: 'web-app',
    liveUrl: 'https://taskmanager.example.com',
    githubUrl: 'https://github.com/agency/task-manager',
    featured: false,
    completedDate: new Date('2023-09-10')
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking Interface',
    description: 'Secure and intuitive mobile banking web application',
    longDescription: 'A secure mobile banking web application with advanced security features and intuitive user interface. The project included account management, transaction history, bill payments, fund transfers, and investment tracking. Special attention was paid to security, accessibility, and user experience optimization.',
    image: '/projects/banking-hero.jpg',
    gallery: [
      '/projects/banking-1.jpg',
      '/projects/banking-2.jpg',
      '/projects/banking-3.jpg'
    ],
    technologies: [
      { name: 'React Native Web', category: 'frontend', icon: 'react' },
      { name: 'TypeScript', category: 'frontend', icon: 'typescript' },
      { name: 'Redux Toolkit', category: 'frontend', icon: 'redux' },
      { name: 'Node.js', category: 'backend', icon: 'nodejs' },
      { name: 'PostgreSQL', category: 'database', icon: 'postgresql' },
      { name: 'JWT', category: 'tool', icon: 'jwt' },
      { name: 'Plaid API', category: 'tool', icon: 'plaid' }
    ],
    category: 'mobile',
    liveUrl: 'https://banking-demo.example.com',
    featured: true,
    completedDate: new Date('2023-12-05')
  },
  {
    id: 'restaurant-ordering',
    title: 'Restaurant Online Ordering',
    description: 'Complete online ordering system with payment integration',
    longDescription: 'A comprehensive online ordering system for a restaurant chain. Features include menu management, customizable orders, real-time order tracking, payment processing, loyalty program integration, and admin dashboard for order management. The system supports multiple locations and delivery services.',
    image: '/projects/restaurant-hero.jpg',
    gallery: [
      '/projects/restaurant-1.jpg',
      '/projects/restaurant-2.jpg',
      '/projects/restaurant-3.jpg'
    ],
    technologies: [
      { name: 'Next.js', category: 'frontend', icon: 'nextjs' },
      { name: 'React', category: 'frontend', icon: 'react' },
      { name: 'Tailwind CSS', category: 'frontend', icon: 'tailwind' },
      { name: 'Node.js', category: 'backend', icon: 'nodejs' },
      { name: 'MySQL', category: 'database', icon: 'mysql' },
      { name: 'PayPal API', category: 'tool', icon: 'paypal' },
      { name: 'Google Maps', category: 'tool', icon: 'googlemaps' }
    ],
    category: 'e-commerce',
    liveUrl: 'https://restaurant-orders.example.com',
    featured: false,
    completedDate: new Date('2023-08-22')
  },
  {
    id: 'portfolio-website',
    title: 'Creative Portfolio Website',
    description: 'Stunning portfolio website for a creative professional',
    longDescription: 'A visually striking portfolio website for a creative professional showcasing their work across multiple disciplines. The site features smooth animations, interactive galleries, case study presentations, and contact integration. Built with performance and visual impact in mind.',
    image: '/projects/portfolio-hero.jpg',
    gallery: [
      '/projects/portfolio-1.jpg',
      '/projects/portfolio-2.jpg',
      '/projects/portfolio-3.jpg'
    ],
    technologies: [
      { name: 'Next.js', category: 'frontend', icon: 'nextjs' },
      { name: 'React', category: 'frontend', icon: 'react' },
      { name: 'Framer Motion', category: 'frontend', icon: 'framer' },
      { name: 'GSAP', category: 'frontend', icon: 'gsap' },
      { name: 'Sanity CMS', category: 'tool', icon: 'sanity' },
      { name: 'Vercel', category: 'tool', icon: 'vercel' }
    ],
    category: 'corporate',
    liveUrl: 'https://creative-portfolio.example.com',
    featured: false,
    completedDate: new Date('2023-10-15')
  }
]

// Helper functions for filtering and sorting projects
export const getFeaturedProjects = (): Project[] => {
  return mockProjects.filter(project => project.featured)
}

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return mockProjects.filter(project => project.category === category)
}

export const getProjectById = (id: string): Project | undefined => {
  return mockProjects.find(project => project.id === id)
}

export const getRecentProjects = (limit: number = 3): Project[] => {
  return mockProjects
    .sort((a, b) => b.completedDate.getTime() - a.completedDate.getTime())
    .slice(0, limit)
}

export const searchProjects = (query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase()
  return mockProjects.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some(tech => tech.name.toLowerCase().includes(lowercaseQuery))
  )
}