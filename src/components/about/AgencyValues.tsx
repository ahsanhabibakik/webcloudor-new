'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Shield, Users2, Rocket, Eye } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'We pour our hearts into every project, treating your success as our own and never settling for mediocre results.'
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'We stay ahead of the curve, embracing new technologies and methodologies to deliver cutting-edge solutions.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail.'
  },
  {
    icon: Users2,
    title: 'Collaborative Spirit',
    description: 'We believe the best results come from true partnership, working closely with clients throughout the entire process.'
  },
  {
    icon: Rocket,
    title: 'Results-Focused',
    description: 'Beautiful design means nothing without performance. We build solutions that drive real business outcomes.'
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'No black boxes or surprises. We maintain open communication and provide clear visibility into our work.'
  }
]

export function AgencyValues() {
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
    <section className="py-20 bg-gradient-to-br from-white via-webcloudor-primary/5 to-webcloudor-orange/5">
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
              Our <span className="bg-webcloudor-gradient bg-clip-text text-transparent">Values & Culture</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way we 
              work with our clients and each other.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl h-full hover:bg-white hover:shadow-xl transition-all duration-300 border border-webcloudor-primary/10 hover:border-webcloudor-primary/30 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-webcloudor-primary/10 rounded-xl mb-6 group-hover:bg-webcloudor-gradient group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-lg">
                    <value.icon className="w-7 h-7 text-webcloudor-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-webcloudor-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}