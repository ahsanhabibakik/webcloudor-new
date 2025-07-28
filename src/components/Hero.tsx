'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { NoScript } from '@/components/NoScript'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react'

function HeroContent() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsClient(true)
    
    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)
      
      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches)
      }
      
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
      
      window.addEventListener('mousemove', handleMouseMove)
      mediaQuery.addEventListener('change', handleChange)
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        mediaQuery.removeEventListener('change', handleChange)
      }
    } catch (error) {
      console.warn('Error setting up motion preferences:', error)
      setPrefersReducedMotion(true)
      return undefined
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  }

  const floatingIconVariants = {
    animate: {
      y: prefersReducedMotion ? 0 : [-20, 20],
      rotate: prefersReducedMotion ? 0 : [0, 10, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // Parallax effect for background elements
  const parallaxY = prefersReducedMotion ? 0 : mousePosition.y * 0.02
  const parallaxX = prefersReducedMotion ? 0 : mousePosition.x * 0.02

  const StaticHeroContent = () => (
    <section className="relative min-h-screen overflow-hidden bg-webcloudor-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-webcloudor-yellow">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-medium tracking-wider uppercase">Welcome to Webcloudor</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                  Crafting
                  <span className="block bg-webcloudor-gradient bg-clip-text text-transparent">
                    Digital Magic
                  </span>
                  That Converts
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  We don&apos;t just build websites—we engineer digital experiences that captivate, 
                  convert, and scale your business to new heights.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-webcloudor-gradient hover:bg-webcloudor-blue-gradient text-white text-lg px-8 py-6 rounded-full font-semibold group transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  asChild
                >
                  <Link href="/contact" className="flex items-center space-x-2">
                    <span>Start Your Project</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-semibold backdrop-blur-sm transition-all duration-300"
                  asChild
                >
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-webcloudor-yellow">150+</div>
                  <div className="text-sm text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-webcloudor-yellow">98%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-webcloudor-yellow">24/7</div>
                  <div className="text-sm text-gray-300">Support Available</div>
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-webcloudor-radial rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="absolute inset-4 bg-webcloudor-blue-gradient rounded-3xl shadow-2xl"></div>
                <div className="absolute inset-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-webcloudor-yellow/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-webcloudor-orange/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-webcloudor-primary/30 rounded-full blur-lg"></div>
    </section>
  )

  if (!isClient) {
    return <StaticHeroContent />
  }

  return (
    <NoScript fallback={<StaticHeroContent />}>
      <section 
        className="relative min-h-screen overflow-hidden bg-webcloudor-hero"
        aria-labelledby="hero-title"
        role="banner"
      >
        {/* Dynamic background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
          
          {/* Animated background orbs */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-webcloudor-yellow/20 rounded-full blur-xl"
            animate={{
              x: parallaxX * 0.5,
              y: parallaxY * 0.5,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-32 h-32 bg-webcloudor-orange/20 rounded-full blur-xl"
            animate={{
              x: parallaxX * -0.3,
              y: parallaxY * -0.3,
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-webcloudor-primary/30 rounded-full blur-lg"
            animate={{
              x: parallaxX * 0.7,
              y: parallaxY * 0.7,
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center min-h-screen"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Content Side */}
              <div className="text-white space-y-8">
                <motion.div variants={itemVariants} className="space-y-6">
                  <motion.div 
                    className="flex items-center space-x-2 text-webcloudor-yellow"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles className="h-5 w-5" />
                    <span className="text-sm font-medium tracking-wider uppercase">Welcome to Webcloudor</span>
                  </motion.div>
                  
                  <h1 
                    id="hero-title"
                    className="text-5xl md:text-7xl font-bold leading-[1.1]"
                  >
                    Crafting
                    <motion.span 
                      className="block bg-webcloudor-gradient bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      Digital Magic
                    </motion.span>
                    That Converts
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                    We don&apos;t just build websites—we engineer digital experiences that captivate, 
                    convert, and scale your business to new heights.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-webcloudor-gradient hover:bg-webcloudor-blue-gradient text-white text-lg px-8 py-6 rounded-full font-semibold group transition-all duration-300 shadow-2xl"
                      asChild
                    >
                      <Link href="/contact" className="flex items-center space-x-2">
                        <span>Start Your Project</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-semibold backdrop-blur-sm transition-all duration-300"
                      asChild
                    >
                      <Link href="/projects">View Our Work</Link>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-3 gap-6 pt-8"
                >
                  {[
                    { number: "150+", label: "Projects Delivered" },
                    { number: "98%", label: "Client Satisfaction" },
                    { number: "24/7", label: "Support Available" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="text-3xl font-bold text-webcloudor-yellow">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Visual Side */}
              <motion.div 
                variants={itemVariants}
                className="relative lg:block hidden"
              >
                <div className="relative w-full h-96">
                  {/* Background decorative elements */}
                  <motion.div 
                    className="absolute inset-0 bg-webcloudor-radial rounded-3xl opacity-20"
                    animate={{ rotate: [0, 6, -6, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute inset-4 bg-webcloudor-blue-gradient rounded-3xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Floating icons */}
                  <motion.div
                    className="absolute -top-6 -right-6 p-4 bg-webcloudor-yellow rounded-2xl shadow-lg"
                    variants={floatingIconVariants}
                    animate="animate"
                  >
                    <Zap className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-6 -left-6 p-4 bg-webcloudor-orange rounded-2xl shadow-lg"
                    variants={floatingIconVariants}
                    animate="animate"
                    transition={{ delay: 1 }}
                  >
                    <Target className="h-8 w-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
                animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
                transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </section>
    </NoScript>
  )
}

export function Hero() {
  return (
    <ErrorBoundary
      fallback={
        <section className="relative min-h-screen overflow-hidden bg-webcloudor-hero">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                <div className="text-white space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 text-webcloudor-yellow">
                      <Sparkles className="h-5 w-5" />
                      <span className="text-sm font-medium tracking-wider uppercase">Welcome to Webcloudor</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                      Crafting
                      <span className="block bg-webcloudor-gradient bg-clip-text text-transparent">
                        Digital Magic
                      </span>
                      That Converts
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                      We don&apos;t just build websites—we engineer digital experiences that captivate, 
                      convert, and scale your business to new heights.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      size="lg" 
                      className="bg-webcloudor-gradient hover:bg-webcloudor-blue-gradient text-white text-lg px-8 py-6 rounded-full font-semibold group transition-all duration-300 transform hover:scale-105 shadow-2xl"
                      asChild
                    >
                      <Link href="/contact" className="flex items-center space-x-2">
                        <span>Start Your Project</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-semibold backdrop-blur-sm transition-all duration-300"
                      asChild
                    >
                      <Link href="/projects">View Our Work</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <HeroContent />
    </ErrorBoundary>
  )
}