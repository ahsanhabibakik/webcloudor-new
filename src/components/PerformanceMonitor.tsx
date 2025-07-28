'use client'

import { useEffect } from 'react'
import { performanceMark, logMemoryUsage } from '@/lib/utils/performance'

interface PerformanceMonitorProps {
  enabled?: boolean
  logInterval?: number
}

export function PerformanceMonitor({ 
  enabled = process.env.NODE_ENV === 'development',
  logInterval = 30000 // 30 seconds
}: PerformanceMonitorProps) {
  useEffect(() => {
    if (!enabled) return

    // Mark initial load
    performanceMark('app-start')

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming
          console.log('Navigation Timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            firstPaint: navEntry.responseEnd - navEntry.requestStart
          })
        }

        if (entry.entryType === 'paint') {
          console.log(`${entry.name}: ${entry.startTime.toFixed(2)}ms`)
        }

        if (entry.entryType === 'largest-contentful-paint') {
          console.log(`LCP: ${entry.startTime.toFixed(2)}ms`)
        }

        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming
          console.log(`FID: ${fidEntry.processingStart - fidEntry.startTime}ms`)
        }

        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as any
          if (!clsEntry.hadRecentInput) {
            console.log(`CLS: ${clsEntry.value}`)
          }
        }
      })
    })

    // Observe different performance metrics
    try {
      observer.observe({ entryTypes: ['navigation', 'paint'] })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      observer.observe({ entryTypes: ['first-input'] })
      observer.observe({ entryTypes: ['layout-shift'] })
    } catch (error) {
      console.warn('Some performance metrics not supported:', error)
    }

    // Memory monitoring interval
    const memoryInterval = setInterval(() => {
      logMemoryUsage()
    }, logInterval)

    // Resource timing monitoring
    const checkResourceTiming = () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
      const slowResources = resources.filter((resource: PerformanceResourceTiming) => resource.duration > 1000)
      
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map((r: PerformanceResourceTiming) => ({
          name: r.name,
          duration: `${r.duration.toFixed(2)}ms`,
          size: r.transferSize
        })))
      }
    }

    const resourceInterval = setInterval(checkResourceTiming, logInterval)

    return () => {
      observer.disconnect()
      clearInterval(memoryInterval)
      clearInterval(resourceInterval)
    }
  }, [enabled, logInterval])

  // Component doesn't render anything
  return null
}

// Web Vitals reporting hook (requires web-vitals package)
export function useWebVitals(onVital?: (vital: any) => void) {
  useEffect(() => {
    if (typeof window === 'undefined' || !onVital) return

    // Basic performance monitoring without web-vitals package
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          onVital({ name: 'LCP', value: entry.startTime })
        }
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming
          onVital({ name: 'FID', value: fidEntry.processingStart - fidEntry.startTime })
        }
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as any
          if (!clsEntry.hadRecentInput) {
            onVital({ name: 'CLS', value: clsEntry.value })
          }
        }
      })
    })

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (error) {
      console.warn('Performance observer not supported:', error)
    }

    return () => observer.disconnect()
  }, [onVital])
}