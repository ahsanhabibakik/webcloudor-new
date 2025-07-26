import type { TeamMember } from '@/types'

export const mockTeamMembers: TeamMember[] = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'Lead Developer & Co-Founder',
    bio: 'John is a full-stack developer with over 8 years of experience building scalable web applications. He specializes in React, Node.js, and cloud architecture. John leads our development team and ensures all projects meet the highest technical standards.',
    image: '/team/john-doe.jpg',
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'AWS',
      'PostgreSQL',
      'GraphQL',
      'Docker'
    ],
    social: {
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      twitter: 'https://twitter.com/johndoe'
    }
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'UI/UX Designer & Co-Founder',
    bio: 'Sarah is a creative designer with a passion for user-centered design. With 6 years of experience in digital design, she creates beautiful and functional interfaces that users love. Sarah leads our design process from research to final implementation.',
    image: '/team/sarah-johnson.jpg',
    skills: [
      'UI/UX Design',
      'Figma',
      'Adobe Creative Suite',
      'Prototyping',
      'User Research',
      'Design Systems',
      'Accessibility',
      'Branding'
    ],
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson'
    }
  },
  {
    id: 'mike-chen',
    name: 'Mike Chen',
    role: 'Senior Frontend Developer',
    bio: 'Mike is a frontend specialist with expertise in modern JavaScript frameworks and performance optimization. He has 5 years of experience creating responsive, accessible web applications that deliver exceptional user experiences.',
    image: '/team/mike-chen.jpg',
    skills: [
      'React',
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'Webpack',
      'Performance Optimization',
      'Accessibility',
      'Testing'
    ],
    social: {
      linkedin: 'https://linkedin.com/in/mikechen',
      github: 'https://github.com/mikechen'
    }
  },
  {
    id: 'emily-rodriguez',
    name: 'Emily Rodriguez',
    role: 'Backend Developer',
    bio: 'Emily specializes in backend development and database architecture. With 4 years of experience, she builds robust APIs and scalable server-side solutions. Emily ensures our applications are secure, performant, and maintainable.',
    image: '/team/emily-rodriguez.jpg',
    skills: [
      'Node.js',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
      'GraphQL',
      'AWS',
      'DevOps'
    ],
    social: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      github: 'https://github.com/emilyrodriguez'
    }
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'Mobile Developer',
    bio: 'David is our mobile development expert with experience in both native and cross-platform development. He has 5 years of experience creating mobile apps that provide excellent user experience across iOS and Android platforms.',
    image: '/team/david-kim.jpg',
    skills: [
      'React Native',
      'Swift',
      'Kotlin',
      'Flutter',
      'Mobile UI/UX',
      'App Store Optimization',
      'Push Notifications',
      'Mobile Testing'
    ],
    social: {
      linkedin: 'https://linkedin.com/in/davidkim',
      github: 'https://github.com/davidkim'
    }
  },
  {
    id: 'lisa-wang',
    name: 'Lisa Wang',
    role: 'Project Manager',
    bio: 'Lisa ensures our projects are delivered on time and within budget. With 6 years of experience in project management, she coordinates between teams, manages client relationships, and keeps everyone aligned on project goals.',
    image: '/team/lisa-wang.jpg',
    skills: [
      'Project Management',
      'Agile/Scrum',
      'Client Relations',
      'Team Leadership',
      'Risk Management',
      'Quality Assurance',
      'Communication',
      'Strategic Planning'
    ],
    social: {
      linkedin: 'https://linkedin.com/in/lisawang'
    }
  }
]

// Helper functions for team data
export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return mockTeamMembers.find(member => member.id === id)
}

export const getTeamMembersByRole = (role: string): TeamMember[] => {
  return mockTeamMembers.filter(member => 
    member.role.toLowerCase().includes(role.toLowerCase())
  )
}

export const getFounders = (): TeamMember[] => {
  return mockTeamMembers.filter(member => 
    member.role.toLowerCase().includes('founder')
  )
}

export const getDevelopers = (): TeamMember[] => {
  return mockTeamMembers.filter(member => 
    member.role.toLowerCase().includes('developer')
  )
}

export const searchTeamMembers = (query: string): TeamMember[] => {
  const lowercaseQuery = query.toLowerCase()
  return mockTeamMembers.filter(member => 
    member.name.toLowerCase().includes(lowercaseQuery) ||
    member.role.toLowerCase().includes(lowercaseQuery) ||
    member.skills.some(skill => skill.toLowerCase().includes(lowercaseQuery))
  )
}