'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/animations/FadeIn'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { NoScript } from '@/components/NoScript'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function HeroContent() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)
      
      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches)
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } catch (error) {
      console.warn('Error setting up motion preferences:', error)
      setPrefersReducedMotion(true) // Default to reduced motion on error
      return undefined
    }
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

  // Fallback content for when JavaScript is disabled
  const StaticHeroContent = () => (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Crafting Digital Experiences That Drive Results
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We&apos;re a modern web agency specializing in cutting-edge development, 
            stunning design, and strategic digital solutions that transform your business.
          </p>
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
        </div>
      </div>
    </section>
  )

  // If not client-side yet, show static content
  if (!isClient) {
    return <StaticHeroContent />
  }

  return (
    <NoScript fallback={<StaticHeroContent />}>
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20"
        aria-labelledby="hero-title"
        role="banner"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Animated Title */}
            <motion.h1
              id="hero-title"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              aria-live="polite"
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
              <p 
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                aria-describedby="hero-title"
              >
                WeWeWeWeWeWeWeWeWeWeWeWe'reapos;reapos;reapos;reapos;reapos;reapos;reapos;reapos;reapos;reapos;reapos;re a modern web agency specializing in cutting-edge development, 
                stunning design, and strategic digital solutions that transform your business.
              </p>
            </FadeIn>

            {/* Call to Action Buttons */}
            <FadeIn delay={1.2} direction="up">
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                role="group"
                aria-label="Primary actions"
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6" 
                  asChild
                >
                  <Link 
                    href="/contact"
                    aria-describedby="cta-description"
                  >
                    Start Your Project
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6" 
                  asChild
                >
                  <Link 
                    href="/projects"
                    aria-describedby="portfolio-description"
                  >
                    View Our Work
                  </Link>
                </Button>
                <div className="sr-only">
                  <span id="cta-description">Contact us to discuss your project requirements</span>
                  <span id="portfolio-description">Browse our portfolio of completed projects</span>
                </div>
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
                role="img"
                aria-label="Scroll down indicator"
              >
                <span className="text-sm mb-2" aria-hidden="true">Discover More</span>
                <div 
                  className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
                  aria-hidden="true"
                >
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
    </NoScript>
  )
}

export function Hero() {
  return (
    <ErrorBoundary
      fallback={
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Crafting Digital Experiences That Drive Results
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We&apos;re a modern web agency specializing in cutting-edge development, 
                stunning design, and strategic digital solutions that transform your business.
              </p>
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
            </div>
          </div>
        </section>
      }
    >
      <HeroContent />
    </ErrorBoundary>
  )
}