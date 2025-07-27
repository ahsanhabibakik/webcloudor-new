import React from 'react'

/**
 * Performance optimization utilities
 */

// Lazy loading utility for components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createLazyComponent<T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  fallback?: React.ComponentType
) {
  const LazyComponent = React.lazy(importFn)
  
  const LazyWrapper = (props: React.ComponentProps<T>) => (
    <React.Suspense fallback={fallback ? React.createElement(fallback) : null}>
      <LazyComponent {...props} />
    </React.Suspense>
  )
  
  LazyWrapper.displayName = 'LazyComponent'
  
  return LazyWrapper
}

// Image preloader utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Batch image preloader
export const preloadImages = async (srcs: string[]): Promise<void> => {
  try {
    await Promise.all(srcs.map(preloadImage))
  } catch (error) {
    console.warn('Some images failed to preload:', error)
  }
}

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false)
  const [hasIntersected, setHasIntersected] = React.useState(false)

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIsIntersecting(entry.isIntersecting)
          if (entry.isIntersecting && !hasIntersected) {
            setHasIntersected(true)
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, hasIntersected, options])

  return { isIntersecting, hasIntersected }
}

// Debounce utility for performance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle utility for performance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Memory usage monitoring (development only)
export const logMemoryUsage = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const perf = window.performance as any
    if ('memory' in perf) {
      const memory = perf.memory
      console.log('Memory Usage:', {
        used: `${Math.round(memory.usedJSHeapSize / 1048576)} MB`,
        total: `${Math.round(memory.totalJSHeapSize / 1048576)} MB`,
        limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)} MB`
      })
    }
  }
}

// Performance mark utility
export const performanceMark = (name: string) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.performance.mark(name)
  }
}

// Performance measure utility
export const performanceMeasure = (name: string, startMark: string, endMark?: string) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    try {
      if (endMark) {
        window.performance.measure(name, startMark, endMark)
      } else {
        window.performance.measure(name, startMark)
      }
      
      const measures = window.performance.getEntriesByName(name, 'measure')
      if (measures.length > 0 && measures[0]) {
        console.log(`${name}: ${measures[0].duration.toFixed(2)}ms`)
      }
    } catch (error) {
      console.warn('Performance measurement failed:', error)
    }
  }
}