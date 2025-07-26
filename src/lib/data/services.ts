import type { Service } from '@/types'

export const mockServices: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom web applications built with modern technologies and best practices',
    longDescription: 'We create custom web applications tailored to your business needs using the latest technologies and frameworks. Our development process focuses on performance, scalability, and user experience to deliver solutions that drive business growth.',
    icon: 'code',
    features: [
      'Custom web application development',
      'Responsive design for all devices',
      'Modern JavaScript frameworks (React, Next.js)',
      'API development and integration',
      'Database design and optimization',
      'Performance optimization',
      'SEO implementation',
      'Security best practices'
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Planning',
        description: 'We analyze your requirements, define project scope, and create a detailed development plan.',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        description: 'Create wireframes, mockups, and interactive prototypes to visualize the final product.',
        duration: '2-3 weeks'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Build the application using modern technologies with regular progress updates.',
        duration: '4-8 weeks'
      },
      {
        step: 4,
        title: 'Testing & Quality Assurance',
        description: 'Comprehensive testing including functionality, performance, and security testing.',
        duration: '1-2 weeks'
      },
      {
        step: 5,
        title: 'Deployment & Launch',
        description: 'Deploy to production environment and provide post-launch support.',
        duration: '1 week'
      }
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$5,000 - $15,000',
        features: [
          'Simple web application',
          'Up to 5 pages',
          'Basic functionality',
          'Responsive design',
          '3 months support'
        ]
      },
      {
        name: 'Professional',
        price: '$15,000 - $50,000',
        features: [
          'Complex web application',
          'Custom functionality',
          'Database integration',
          'API development',
          'Admin dashboard',
          '6 months support'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$50,000+',
        features: [
          'Large-scale application',
          'Advanced integrations',
          'Custom architecture',
          'Performance optimization',
          'Security audit',
          '12 months support'
        ]
      }
    ]
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    shortDescription: 'Complete e-commerce platforms with payment processing and inventory management',
    longDescription: 'We build comprehensive e-commerce solutions that help businesses sell online effectively. From simple product catalogs to complex multi-vendor marketplaces, our solutions are designed to maximize conversions and provide excellent user experience.',
    icon: 'shopping-cart',
    features: [
      'Custom e-commerce development',
      'Payment gateway integration',
      'Inventory management system',
      'Order processing and tracking',
      'Customer account management',
      'Admin dashboard',
      'Mobile-responsive design',
      'SEO optimization for products'
    ],
    process: [
      {
        step: 1,
        title: 'Business Analysis',
        description: 'Understand your products, target audience, and business requirements.',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Platform Design',
        description: 'Design user-friendly interface focused on conversion optimization.',
        duration: '2-3 weeks'
      },
      {
        step: 3,
        title: 'Development & Integration',
        description: 'Build the platform and integrate payment gateways and third-party services.',
        duration: '6-10 weeks'
      },
      {
        step: 4,
        title: 'Testing & Optimization',
        description: 'Test all functionality, payment flows, and optimize for performance.',
        duration: '2-3 weeks'
      },
      {
        step: 5,
        title: 'Launch & Training',
        description: 'Deploy the platform and train your team on management tools.',
        duration: '1-2 weeks'
      }
    ],
    pricing: [
      {
        name: 'Basic Store',
        price: '$8,000 - $20,000',
        features: [
          'Up to 100 products',
          'Basic payment processing',
          'Order management',
          'Customer accounts',
          'Mobile responsive',
          '3 months support'
        ]
      },
      {
        name: 'Advanced Store',
        price: '$20,000 - $60,000',
        features: [
          'Unlimited products',
          'Multiple payment options',
          'Inventory management',
          'Advanced analytics',
          'Marketing tools',
          '6 months support'
        ],
        popular: true
      },
      {
        name: 'Enterprise Marketplace',
        price: '$60,000+',
        features: [
          'Multi-vendor support',
          'Advanced integrations',
          'Custom workflows',
          'Performance optimization',
          'Dedicated support',
          '12 months support'
        ]
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'User-centered design that creates engaging and intuitive digital experiences',
    longDescription: 'Our design team creates beautiful, functional interfaces that prioritize user experience. We combine aesthetic appeal with usability research to deliver designs that not only look great but also drive user engagement and business results.',
    icon: 'palette',
    features: [
      'User experience research',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Responsive design systems',
      'Usability testing',
      'Design system creation',
      'Accessibility compliance',
      'Design handoff to developers'
    ],
    process: [
      {
        step: 1,
        title: 'Research & Discovery',
        description: 'Understand users, competitors, and business goals through research.',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Information Architecture',
        description: 'Create site maps, user flows, and define the overall structure.',
        duration: '1 week'
      },
      {
        step: 3,
        title: 'Wireframing',
        description: 'Develop low-fidelity wireframes to establish layout and functionality.',
        duration: '1-2 weeks'
      },
      {
        step: 4,
        title: 'Visual Design',
        description: 'Create high-fidelity designs with colors, typography, and imagery.',
        duration: '2-4 weeks'
      },
      {
        step: 5,
        title: 'Prototyping & Testing',
        description: 'Build interactive prototypes and conduct usability testing.',
        duration: '1-2 weeks'
      }
    ],
    pricing: [
      {
        name: 'Design Consultation',
        price: '$2,000 - $5,000',
        features: [
          'UX audit',
          'Design recommendations',
          'Basic wireframes',
          'Style guide',
          '2 revision rounds'
        ]
      },
      {
        name: 'Complete Design',
        price: '$5,000 - $15,000',
        features: [
          'Full UX research',
          'Complete wireframes',
          'High-fidelity designs',
          'Interactive prototype',
          'Design system',
          '4 revision rounds'
        ],
        popular: true
      },
      {
        name: 'Design Partnership',
        price: '$15,000+',
        features: [
          'Ongoing design support',
          'Multiple projects',
          'Design system evolution',
          'User testing',
          'Priority support',
          'Unlimited revisions'
        ]
      }
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    shortDescription: 'Native and cross-platform mobile applications for iOS and Android',
    longDescription: 'We develop mobile applications that provide excellent user experience across all devices. Whether you need a native iOS/Android app or a cross-platform solution, we use the right technology stack to deliver high-performance mobile applications.',
    icon: 'smartphone',
    features: [
      'Native iOS and Android development',
      'Cross-platform development (React Native)',
      'Mobile UI/UX design',
      'App Store optimization',
      'Push notifications',
      'Offline functionality',
      'API integration',
      'App maintenance and updates'
    ],
    process: [
      {
        step: 1,
        title: 'Strategy & Planning',
        description: 'Define app requirements, target platforms, and technical approach.',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        description: 'Create mobile-specific designs and interactive prototypes.',
        duration: '2-3 weeks'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Build the mobile application with regular testing on devices.',
        duration: '6-12 weeks'
      },
      {
        step: 4,
        title: 'Testing & QA',
        description: 'Comprehensive testing on multiple devices and operating systems.',
        duration: '2-3 weeks'
      },
      {
        step: 5,
        title: 'App Store Submission',
        description: 'Prepare and submit the app to App Store and Google Play.',
        duration: '1-2 weeks'
      }
    ],
    pricing: [
      {
        name: 'Simple App',
        price: '$10,000 - $25,000',
        features: [
          'Basic functionality',
          'Single platform',
          'Standard UI components',
          'Basic integrations',
          '3 months support'
        ]
      },
      {
        name: 'Feature-Rich App',
        price: '$25,000 - $75,000',
        features: [
          'Complex functionality',
          'Cross-platform',
          'Custom UI/UX',
          'API integrations',
          'Push notifications',
          '6 months support'
        ],
        popular: true
      },
      {
        name: 'Enterprise App',
        price: '$75,000+',
        features: [
          'Advanced features',
          'Multiple platforms',
          'Enterprise integrations',
          'Advanced security',
          'Ongoing maintenance',
          '12 months support'
        ]
      }
    ]
  },
  {
    id: 'consulting-support',
    title: 'Consulting & Support',
    shortDescription: 'Technical consulting and ongoing support for your digital projects',
    longDescription: 'Our consulting services help businesses make informed technology decisions and optimize their digital presence. We provide ongoing support, performance optimization, and strategic guidance to ensure your digital assets continue to deliver value.',
    icon: 'users',
    features: [
      'Technical architecture consulting',
      'Code review and optimization',
      'Performance auditing',
      'Security assessment',
      'Technology stack recommendations',
      'Team training and mentoring',
      'Ongoing maintenance and support',
      'Emergency technical support'
    ],
    process: [
      {
        step: 1,
        title: 'Assessment',
        description: 'Evaluate current systems, processes, and technical challenges.',
        duration: '1 week'
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Create recommendations and roadmap for improvements.',
        duration: '1-2 weeks'
      },
      {
        step: 3,
        title: 'Implementation Planning',
        description: 'Develop detailed implementation plan with timelines and resources.',
        duration: '1 week'
      },
      {
        step: 4,
        title: 'Execution Support',
        description: 'Provide guidance and support during implementation phase.',
        duration: 'Ongoing'
      },
      {
        step: 5,
        title: 'Monitoring & Optimization',
        description: 'Continuous monitoring and optimization of implemented solutions.',
        duration: 'Ongoing'
      }
    ],
    pricing: [
      {
        name: 'One-time Consultation',
        price: '$150 - $250/hour',
        features: [
          'Technical assessment',
          'Recommendations report',
          'Implementation guidance',
          'Follow-up session',
          'Email support'
        ]
      },
      {
        name: 'Monthly Retainer',
        price: '$2,000 - $5,000/month',
        features: [
          'Ongoing consulting',
          'Regular check-ins',
          'Priority support',
          'Performance monitoring',
          'Team training',
          'Emergency support'
        ],
        popular: true
      },
      {
        name: 'Enterprise Partnership',
        price: '$5,000+/month',
        features: [
          'Dedicated consultant',
          'Strategic planning',
          'Custom solutions',
          '24/7 support',
          'Team augmentation',
          'Technology roadmap'
        ]
      }
    ]
  }
]

// Helper functions for filtering and sorting services
export const getServiceById = (id: string): Service | undefined => {
  return mockServices.find(service => service.id === id)
}

export const getFeaturedServices = (limit: number = 3): Service[] => {
  return mockServices.slice(0, limit)
}

export const searchServices = (query: string): Service[] => {
  const lowercaseQuery = query.toLowerCase()
  return mockServices.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.shortDescription.toLowerCase().includes(lowercaseQuery) ||
    service.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  )
}

export const getServicesByPriceRange = (minPrice: number, maxPrice: number): Service[] => {
  return mockServices.filter(service => {
    if (!service.pricing) return false
    return service.pricing.some(tier => {
      // Extract numeric values from price strings for comparison
      const priceMatch = tier.price.match(/\$(\d+(?:,\d+)*)/g)
      if (!priceMatch) return false
      
      const prices = priceMatch.map(p => parseInt(p.replace(/[$,]/g, '')))
      const serviceMinPrice = Math.min(...prices)
      const serviceMaxPrice = Math.max(...prices)
      
      return serviceMinPrice <= maxPrice && serviceMaxPrice >= minPrice
    })
  })
}