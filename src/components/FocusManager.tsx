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

// Enhanced focus manager with better accessibility features
export function AccessibleFocusManager({
  children,
  trapFocus = false,
  restoreFocus = false,
  autoFocus = false,
  className,
  role,
  ariaLabel,
  ariaLabelledBy,
}: FocusManagerProps & {
  role?: string
  ariaLabel?: string
  ariaLabelledBy?: string
}) {
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
  }, [autoFocus, restoreFocus])

  useEffect(() => {
    if (trapFocus && containerRef.current) {
      const container = containerRef.current
      const focusableElements = container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus()
            e.preventDefault()
          }
        }
      }

      const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && restoreFocus && previousActiveElement.current) {
          previousActiveElement.current.focus()
        }
      }

      container.addEventListener('keydown', handleTabKey)
      container.addEventListener('keydown', handleEscapeKey)
      
      return () => {
        container.removeEventListener('keydown', handleTabKey)
        container.removeEventListener('keydown', handleEscapeKey)
      }
    }
  }, [trapFocus, restoreFocus])

  return (
    <div 
      ref={containerRef} 
      className={className}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
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
      aria-atomic={true}
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
  const Element = role === 'main' ? 'main' : 
                  role === 'navigation' ? 'nav' : 
                  role === 'banner' ? 'header' : 
                  role === 'contentinfo' ? 'footer' : 
                  'section'

  return (
    <Element
      role={role === 'main' || role === 'navigation' || role === 'banner' || role === 'contentinfo' ? undefined : role}
      aria-label={label}
      aria-labelledby={labelledBy}
      className={className}
    >
      {children}
    </Element>
  )
}