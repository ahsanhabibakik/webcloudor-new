// Export all data and helper functions
export * from './projects'
export * from './services'
export * from './team'

// Site configuration data
export const siteConfig = {
  name: 'Modern Web Agency',
  description: 'We create exceptional digital experiences through modern web development, innovative design, and strategic consulting.',
  url: 'https://modernwebagency.com',
  ogImage: 'https://modernwebagency.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/modernwebagency',
    github: 'https://github.com/modernwebagency',
    linkedin: 'https://linkedin.com/company/modernwebagency'
  }
}

// Navigation items
export const navItems = [
  {
    title: 'Home',
    href: '/',
    description: 'Welcome to our agency'
  },
  {
    title: 'Projects',
    href: '/projects',
    description: 'View our portfolio of work'
  },
  {
    title: 'Services',
    href: '/services',
    description: 'Explore our service offerings'
  },
  {
    title: 'About',
    href: '/about',
    description: 'Learn about our team and approach'
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Get in touch with us'
  }
]

// Contact information
export const contactInfo = {
  email: 'hello@modernwebagency.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Innovation Drive',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'USA'
  },
  hours: {
    weekdays: '9:00 AM - 6:00 PM PST',
    weekends: 'Closed'
  }
}

// Testimonials data
export const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Alex Thompson',
    role: 'CEO, TechStart Inc.',
    company: 'TechStart Inc.',
    content: 'The team delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding.',
    rating: 5,
    image: '/testimonials/alex-thompson.jpg'
  },
  {
    id: 'testimonial-2',
    name: 'Maria Garcia',
    role: 'Marketing Director, GrowthCorp',
    company: 'GrowthCorp',
    content: 'Working with this agency was a game-changer for our online presence. They created a beautiful, fast website that significantly improved our conversion rates.',
    rating: 5,
    image: '/testimonials/maria-garcia.jpg'
  },
  {
    id: 'testimonial-3',
    name: 'James Wilson',
    role: 'Founder, InnovateLab',
    company: 'InnovateLab',
    content: 'Professional, responsive, and incredibly skilled. They transformed our complex requirements into an elegant, user-friendly application.',
    rating: 5,
    image: '/testimonials/james-wilson.jpg'
  }
]

// FAQ data
export const faqs = [
  {
    id: 'faq-1',
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary depending on complexity and scope. Simple websites typically take 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during the planning phase.'
  },
  {
    id: 'faq-2',
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer various support packages including bug fixes, security updates, performance monitoring, and feature enhancements. Support terms are included with every project.'
  },
  {
    id: 'faq-3',
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and various databases. We choose the best technology stack for each project based on requirements.'
  },
  {
    id: 'faq-4',
    question: 'How do you handle project communication?',
    answer: 'We maintain regular communication through weekly progress updates, dedicated project channels, and scheduled check-in meetings. You\'ll always know the status of your project.'
  },
  {
    id: 'faq-5',
    question: 'Can you work with our existing team?',
    answer: 'Absolutely! We can integrate with your existing development team, provide consulting services, or work as an extension of your team. We\'re flexible in our collaboration approach.'
  }
]