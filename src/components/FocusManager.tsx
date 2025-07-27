'use client'

import { useEffect, useRef } from 'react'
import { useFocusTrap } from '@/hooks/useKeyboardNavigation'

interface FocusManagerProps {
  children: React.ReactNode
  trapFocus?: boolean
  restoreFocus?: boolean
  autoFocus?: boolean
  className?: string
}

export function FocusManager({
  children,
  trapFocus = false,
  restoreFocus = false,
  autoFocus = false,
  className
}: FocusManagerProps) {
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const containerRef = useFocusTrap(trapFocus) as React.RefObject<HTMLDivElement>

  useEffect(() => {
    if (restoreFocus) {
      previousActiveElement.current = document.activeElement as HTMLElement
    }

    if (autoFocus && containerRef.current) {
      const firstFocusable = containerRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement
      
      firstFocusable?.focus()
    }

    return () => {
      if (restoreFocus && previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }
  }, [autoFocus, restoreFocus, containerRef])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

// Component for managing focus announcements
export function FocusAnnouncer({ 
  message, 
  priority = 'polite' 
}: { 
  message: string
  priority?: 'polite' | 'assertive' 
}) {
  return (
    <div
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  )
}

// Component for creating landmark regions
export function LandmarkRegion({
  children,
  role,
  label,
  labelledBy,
  className
}: {
  children: React.ReactNode
  role: 'main' | 'navigation' | 'banner' | 'contentinfo' | 'complementary' | 'region'
  label?: string
  labelledBy?: string
  className?: string
}) {
  return (
    <div
      role={role}
      aria-label={label}
      aria-labelledby={labelledBy}
      className={className}
    >
      {children}
    </div>
  )
}