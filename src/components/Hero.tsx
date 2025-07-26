'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.2
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  }

  const title = "Crafting Digital Experiences That Drive Results"
  const words = title.split(' ')

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated Title */}
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-3 md:mr-4"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <FadeIn delay={0.8} direction="up">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a modern web agency specializing in cutting-edge development, 
              stunning design, and strategic digital solutions that transform your business.
            </p>
          </FadeIn>

          {/* Call to Action Buttons */}
          <FadeIn delay={1.2} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Scroll Indicator */}
          <FadeIn delay={1.6} direction="up" className="pt-12">
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
              transition={prefersReducedMotion ? {} : {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center text-muted-foreground"
            >
              <span className="text-sm mb-2">Discover More</span>
              <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                <motion.div
                  animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
                  transition={prefersReducedMotion ? {} : {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
                />
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}