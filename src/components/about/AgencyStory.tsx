'use client'

import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, Award } from 'lucide-react'

const storyStats = [
  {
    icon: Users,
    number: '50+',
    label: 'Projects Completed',
    description: 'Successful digital solutions delivered'
  },
  {
    icon: Target,
    number: '98%',
    label: 'Client Satisfaction',
    description: 'Happy clients who return for more'
  },
  {
    icon: Lightbulb,
    number: '5+',
    label: 'Years Experience',
    description: 'Building exceptional digital experiences'
  },
  {
    icon: Award,
    number: '15+',
    label: 'Team Members',
    description: 'Talented professionals working together'
  }
]

export function AgencyStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-webcloudor-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="bg-webcloudor-gradient bg-clip-text text-transparent">Story & Approach</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, Modern Web Agency emerged from a simple belief: 
                  that exceptional digital experiences should be accessible to businesses 
                  of all sizes. What started as a small team of passionate developers 
                  and designers has grown into a full-service digital agency.
                </p>
                <p>
                  We combine technical expertise with creative vision to deliver 
                  solutions that not only look beautiful but perform exceptionally. 
                  Our approach is collaborative, transparent, and focused on 
                  understanding your unique challenges and goals.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We don&apos;t just build websites and applications – we craft digital experiences that drive results.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-6">
                {storyStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-webcloudor-primary/10 text-center hover:shadow-xl hover:border-webcloudor-primary/20 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-webcloudor-gradient rounded-lg mb-4 shadow-md">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-webcloudor-primary mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-600">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}