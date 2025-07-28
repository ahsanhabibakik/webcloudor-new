'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Smartphone, Cloud, Database, Shield } from 'lucide-react'
import Link from 'next/link'

const expertiseAreas = [
  {
    icon: Code2,
    title: 'Frontend Development',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    description: 'Modern, responsive interfaces that provide exceptional user experiences across all devices.'
  },
  {
    icon: Database,
    title: 'Backend Development',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
    description: 'Scalable server-side solutions with robust APIs and efficient data management.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    technologies: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
    description: 'User-centered design that combines beautiful aesthetics with intuitive functionality.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
    description: 'Cross-platform mobile applications that deliver native performance and user experience.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    technologies: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
    description: 'Scalable cloud infrastructure and automated deployment pipelines for reliable applications.'
  },
  {
    icon: Shield,
    title: 'Security & Performance',
    technologies: ['Security Audits', 'Performance Optimization', 'Monitoring', 'Testing'],
    description: 'Comprehensive security measures and performance optimization for enterprise-grade applications.'
  }
]

export function ExpertiseHighlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-webcloudor-primary/5 to-webcloudor-orange/5">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-webcloudor-gradient bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine deep technical knowledge with creative problem-solving 
              to deliver comprehensive digital solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-webcloudor-primary/10 hover:border-webcloudor-primary/30 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-webcloudor-gradient rounded-xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-webcloudor-primary transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {area.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-webcloudor-primary/10 text-webcloudor-primary text-sm rounded-full font-medium border border-webcloudor-primary/20 hover:bg-webcloudor-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-webcloudor-primary/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to <span className="bg-webcloudor-gradient bg-clip-text text-transparent">Work Together?</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Let&apos;s discuss how our expertise can help bring your vision to life.
                We&apos;d love to hear about your project and explore how we can collaborate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-webcloudor-gradient text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Start a Project
                </a>
                <Link href="/projects" className="text-webcloudor-primary hover:text-webcloudor-accent transition-colors duration-300 hover:underline font-medium">
                  See all projects
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}