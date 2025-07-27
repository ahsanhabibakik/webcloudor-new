'use client'

import { useRef, useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/lib/utils/performance'

interface LazyLoadProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  rootMargin?: string
  threshold?: number
  triggerOnce?: boolean
  className?: string
}

export function LazyLoad({
  children,
  fallback = null,
  rootMargin = '50px',
  threshold = 0.1,
  triggerOnce = true,
  className
}: LazyLoadProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shouldRender, setShouldRender] = useState(false)
  
  const { isIntersecting, hasIntersected } = useIntersectionObserver(ref, {
    rootMargin,
    threshold
  })

  useEffect(() => {
    if (triggerOnce) {
      if (hasIntersected) {
        setShouldRender(true)
      }
    } else {
      setShouldRender(isIntersecting)
    }
  }, [isIntersecting, hasIntersected, triggerOnce])

  return (
    <div ref={ref} className={className}>
      {shouldRender ? children : fallback}
    </div>
  )
}

// Skeleton loading component
export function SkeletonLoader({ 
  className = '',
  height = 'h-4',
  width = 'w-full'
}: {
  className?: string
  height?: string
  width?: string
}) {
  return (
    <div className={`animate-pulse bg-slate-200 rounded ${height} ${width} ${className}`} />
  )
}

// Image skeleton specifically for images
export function ImageSkeleton({ 
  aspectRatio = 'aspect-video',
  className = ''
}: {
  aspectRatio?: string
  className?: string
}) {
  return (
    <div className={`animate-pulse bg-slate-200 rounded-lg ${aspectRatio} ${className} flex items-center justify-center`}>
      <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  )
}