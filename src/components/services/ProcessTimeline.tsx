'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { NoScript } from '@/components/NoScript'
import { 
  Search, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  Clock,
  ArrowRight
} from 'lucide-react'

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, define project scope, and create a detailed development plan with clear milestones and deliverables.',
    duration: '1-2 weeks',
    icon: Search,
    color: 'blue'
  },
  {
    step: 2,
    title: 'Design & Prototyping',
    description: 'Create wireframes, mockups, and interactive prototypes to visualize the final product and ensure alignment with your vision.',
    duration: '2-3 weeks',
    icon: Palette,
    color: 'purple'
  },
  {
    step: 3,
    title: 'Development',
    description: 'Build your application using modern technologies with regular progress updates and collaborative feedback sessions.',
    duration: '4-8 weeks',
    icon: Code,
    color: 'green'
  },
  {
    step: 4,
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing including functionality, performance, security, and cross-browser compatibility testing.',
    duration: '1-2 weeks',
    icon: TestTube,
    color: 'orange'
  },
  {
    step: 5,
    title: 'Deployment & Launch',
    description: 'Deploy to production environment, provide training, and offer ongoing support to ensure smooth operation.',
    duration: '1 week',
    icon: Rocket,
    color: 'red'
  }
]

const colorMap = {
  blue: 'bg-blue-500 border-blue-200',
  purple: 'bg-purple-500 border-purple-200',
  green: 'bg-green-500 border-green-200',
  orange: 'bg-orange-500 border-orange-200',
  red: 'bg-red-500 border-red-200'
}

function ProcessTimelineContent() {
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
    }
  }, [])

  // Static fallback for when JavaScript is disabled
  const StaticTimeline = () => (
    <div className="relative max-w-4xl mx-auto">
      <div className="space-y-12">
        {processSteps.map((step) => (
          <div key={step.step} className="relative flex items-start gap-6 md:gap-8">
            <div className="flex-shrink-0 relative">
              <div className={`w-16 h-16 rounded-full ${colorMap[step.color as keyof typeof colorMap]} flex items-center justify-center text-white shadow-lg`}>
                <step.icon size={24} />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>
            </div>
            <div className="flex-1 pb-8">
              <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    <Clock size={14} />
                    {step.duration}
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  // If not client-side yet, show static content
  if (!isClient) {
    return <StaticTimeline />
  }

  return (
    <NoScript fallback={<StaticTimeline />}>
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />
        
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <ProcessStep 
              key={step.step} 
              step={step} 
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </NoScript>
  )
}

export function ProcessTimeline() {
  return (
    <ErrorBoundary
      fallback={
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center py-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Our Development Process
            </h3>
            <p className="text-slate-600 mb-8">
              Process timeline is temporarily unavailable. Please contact us to learn more about our development methodology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                    <step.icon size={20} className="text-blue-600" />
                  </div>
                  <h4 className="font-medium text-sm">{step.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ProcessTimelineContent />
    </ErrorBoundary>
  )
}

interface ProcessStepProps {
  step: typeof processSteps[0]
  index: number
  prefersReducedMotion: boolean
}

function ProcessStep({ step, index, prefersReducedMotion }: ProcessStepProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const IconComponent = step.icon

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -50 }}
      animate={isInView ? (prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }) : {}}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      className="relative flex items-start gap-6 md:gap-8"
    >
      {/* Step Number & Icon */}
      <div className="flex-shrink-0 relative">
        {/* Timeline Dot */}
        <div className="hidden md:block absolute -left-2 top-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10" />
        
        {/* Step Icon */}
        <div className={`w-16 h-16 rounded-full ${colorMap[step.color as keyof typeof colorMap]} flex items-center justify-center text-white shadow-lg`}>
          <IconComponent size={24} />
        </div>
        
        {/* Step Number */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
          {step.step}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-slate-900">
              {step.title}
            </h3>
            <div className="flex items-center gap-1 text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              <Clock size={14} />
              {step.duration}
            </div>
          </div>
          
          <p className="text-slate-600 leading-relaxed mb-4">
            {step.description}
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-slate-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 1,
                  delay: prefersReducedMotion ? 0 : index * 0.1 + 0.3,
                  ease: 'easeOut'
                }}
                className={`h-2 rounded-full ${step.color === 'blue' ? 'bg-blue-500' : 
                  step.color === 'purple' ? 'bg-purple-500' :
                  step.color === 'green' ? 'bg-green-500' :
                  step.color === 'orange' ? 'bg-orange-500' : 'bg-red-500'}`}
              />
            </div>
            {index < processSteps.length - 1 && (
              <ArrowRight size={16} className="text-slate-400" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}