'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { getFeaturedServices } from '@/lib/data/services'
import Link from 'next/link'
import { 
  Code, 
  ShoppingCart, 
  Palette, 
  Smartphone, 
  Users,
  ArrowRight,
  Zap,
  Star,
  Rocket
} from 'lucide-react'

const iconMap = {
  code: Code,
  'shopping-cart': ShoppingCart,
  palette: Palette,
  smartphone: Smartphone,
  users: Users
}

export function ServicesOverview() {
  const featuredServices = getFeaturedServices(3)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,150,239,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,144,0,0.1),transparent_50%)]" />
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-webcloudor-primary/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-webcloudor-orange/10 rounded-full blur-xl"
        animate={{
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-webcloudor-primary" />
              <span className="text-sm font-semibold text-webcloudor-primary uppercase tracking-wider">
                Our Expertise
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Transform Your</span>
              <br />
              <span className="bg-webcloudor-gradient bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital solutions designed to elevate your business 
              and create unforgettable user experiences that drive real results.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredServices.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code
              
              return (
                <motion.div 
                  key={service.id} 
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Card with glass morphism effect */}
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-webcloudor-primary/10 hover:border-webcloudor-primary/30 hover:-translate-y-2">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-webcloudor-primary/5 via-transparent to-webcloudor-orange/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Service Icon */}
                    <div className="relative mb-6">
                      <motion.div 
                        className="w-20 h-20 bg-webcloudor-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      {/* Floating badge */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-webcloudor-yellow rounded-full flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="w-3 h-3 text-white" />
                      </motion.div>
                    </div>

                    {/* Service Content */}
                    <div className="relative">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-webcloudor-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Key Features */}
                      <div className="space-y-3 mb-8">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <motion.div 
                            key={featureIndex} 
                            className="flex items-start text-sm text-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * featureIndex }}
                          >
                            <div className="w-2 h-2 bg-webcloudor-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      {/* Learn More Link */}
                      <Link 
                        href={`/services#${service.id}`}
                        className="inline-flex items-center text-webcloudor-primary hover:text-webcloudor-accent transition-colors duration-300 font-semibold group/link"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-webcloudor-gradient hover:bg-webcloudor-blue-gradient text-white px-8 py-6 rounded-full font-semibold shadow-xl group"
                asChild
              >
                <Link href="/services" className="flex items-center space-x-2">
                  <Rocket className="w-5 h-5" />
                  <span>Explore All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            
            <p className="text-gray-500 mt-4 text-sm">
              Discover how we can transform your digital presence
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}