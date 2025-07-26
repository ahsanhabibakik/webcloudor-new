'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  threshold?: number
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function ScrollReveal({ 
  children, 
  threshold = 0.1,
  delay = 0,
  direction = 'up',
  className = ''
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
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

  const getInitialPosition = () => {
    if (prefersReducedMotion) return { opacity: 0 }
    
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 40 }
      case 'down':
        return { opacity: 0, y: -40 }
      case 'left':
        return { opacity: 0, x: 40 }
      case 'right':
        return { opacity: 0, x: -40 }
      default:
        return { opacity: 0, y: 40 }
    }
  }

  const getAnimatePosition = () => {
    if (prefersReducedMotion) return { opacity: 1 }
    
    return { 
      opacity: 1, 
      x: 0, 
      y: 0 
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.8,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}