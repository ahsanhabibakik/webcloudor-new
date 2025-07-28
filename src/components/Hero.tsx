'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { NoScript } from '@/components/NoScript'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, Zap, Target, Star } from 'lucide-react'

function HeroContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const orbVariants = {
    animate: {
      x: [0, 100, 0],
      y: [0, -100, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  return (
    <NoScript>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-webcloudor-blue/20 to-black">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            variants={orbVariants}
            animate="animate"
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-webcloudor-blue/30 to-webcloudor-purple/30 rounded-full blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          <motion.div
            variants={orbVariants}
            animate="animate"
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-webcloudor-yellow/20 to-webcloudor-orange/20 rounded-full blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.015}px)`
            }}
          />
          <motion.div
            variants={orbVariants}
            animate="animate"
            className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-webcloudor-purple/25 to-webcloudor-blue/25 rounded-full blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * -0.02}px)`
            }}
          />
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/6 text-webcloudor-yellow/30"
          >
            <Sparkles size={24} />
          </motion.div>
          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 right-1/5 text-webcloudor-purple/30"
          >
            <Star size={20} />
          </motion.div>
          <motion.div
            animate={{
              y: [-15, 25, -15],
              x: [-10, 10, -10],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/3 left-1/4 text-webcloudor-blue/40"
          >
            <Zap size={28} />
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white space-y-8"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                  >
                    <Sparkles className="h-4 w-4 text-webcloudor-yellow" />
                    <span className="text-sm font-medium">Premium Digital Solutions</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-6xl lg:text-7xl font-bold leading-tight"
                  >
                    We Create
                    <br />
                    <span className="bg-gradient-to-r from-webcloudor-blue via-webcloudor-purple to-webcloudor-yellow bg-clip-text text-transparent">
                      Digital Excellence
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-xl text-gray-300 max-w-xl leading-relaxed"
                  >
                    Your trusted partner in web development, cloud solutions, and digital transformation. 
                    We craft exceptional digital experiences that drive business growth.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-webcloudor-blue to-webcloudor-purple hover:from-webcloudor-purple hover:to-webcloudor-blue transition-all duration-300 text-white border-0 shadow-lg shadow-webcloudor-blue/25"
                    asChild
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                    asChild
                  >
                    <Link href="/projects">View Our Work</Link>
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-webcloudor-yellow">100+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-webcloudor-blue">5+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-webcloudor-purple">98%</div>
                    <div className="text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Visual Elements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative hidden lg:block"
              >
                {/* Central Glass Card */}
                <div className="relative z-10">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-webcloudor-blue to-webcloudor-purple rounded-xl flex items-center justify-center">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Lightning Fast</h3>
                          <p className="text-gray-400 text-sm">Optimized Performance</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-webcloudor-yellow to-webcloudor-orange rounded-xl flex items-center justify-center">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Pixel Perfect</h3>
                          <p className="text-gray-400 text-sm">Precision Design</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-webcloudor-blue/20 to-webcloudor-purple/20 rounded-xl p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white text-sm">Project Success Rate</span>
                          <span className="text-webcloudor-yellow font-semibold">98%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "98%" }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="bg-gradient-to-r from-webcloudor-yellow to-webcloudor-orange h-2 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-webcloudor-purple to-webcloudor-blue rounded-lg flex items-center justify-center">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">Premium Quality</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [2, -2, 2],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-webcloudor-yellow to-webcloudor-orange rounded-lg flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">Innovation First</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>
    </NoScript>
  )
}

export function Hero() {
  return (
    <ErrorBoundary
      fallback={
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-webcloudor-blue/20 to-black">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                <div className="text-white space-y-8">
                  <div className="space-y-6">
                    <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                      We Create
                      <br />
                      <span className="bg-gradient-to-r from-webcloudor-blue via-webcloudor-purple to-webcloudor-yellow bg-clip-text text-transparent">
                        Digital Excellence
                      </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                      Your trusted partner in web development, cloud solutions, and digital transformation.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <Link href="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
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
