'use client'

import { useEffect, useRef } from 'react'

interface AnnouncementOptions {
  priority?: 'polite' | 'assertive'
  delay?: number
  clearPrevious?: boolean
}

class AccessibilityAnnouncer {
  private static instance: AccessibilityAnnouncer
  private announcements: Map<string, HTMLElement> = new Map()

  static getInstance(): AccessibilityAnnouncer {
    if (!AccessibilityAnnouncer.instance) {
      AccessibilityAnnouncer.instance = new AccessibilityAnnouncer()
    }
    return AccessibilityAnnouncer.instance
  }

  announce(message: string, options: AnnouncementOptions = {}) {
    const {
      priority = 'polite',
      delay = 0,
      clearPrevious = false
    } = options

    if (clearPrevious) {
      this.clearAll()
    }

    const announceMessage = () => {
      const id = `announcement-${Date.now()}-${Math.random()}`
      const element = document.createElement('div')
      
      element.id = id
      element.setAttribute('aria-live', priority)
      element.setAttribute('aria-atomic', 'true')
      element.className = 'sr-only'
      element.textContent = message

      document.body.appendChild(element)
      this.announcements.set(id, element)

      // Remove after announcement is likely to have been read
      setTimeout(() => {
        this.remove(id)
      }, Math.max(1000, message.length * 50)) // Estimate reading time
    }

    if (delay > 0) {
      setTimeout(announceMessage, delay)
    } else {
      announceMessage()
    }
  }

  announceNavigation(from: string, to: string) {
    this.announce(`Navigated from ${from} to ${to}`, { priority: 'polite' })
  }

  announceError(error: string) {
    this.announce(`Error: ${error}`, { priority: 'assertive', clearPrevious: true })
  }

  announceSuccess(message: string) {
    this.announce(`Success: ${message}`, { priority: 'polite' })
  }

  announceLoading(message: string = 'Loading') {
    this.announce(message, { priority: 'polite' })
  }

  announceLoadingComplete(message: string = 'Loading complete') {
    this.announce(message, { priority: 'polite' })
  }

  private remove(id: string) {
    const element = this.announcements.get(id)
    if (element && document.body.contains(element)) {
      document.body.removeChild(element)
      this.announcements.delete(id)
    }
  }

  private clearAll() {
    this.announcements.forEach((element, id) => {
      this.remove(id)
    })
  }
}

// React component for managing announcements
export function AccessibilityAnnouncerProvider({ children }: { children: React.ReactNode }) {
  const announcerRef = useRef<AccessibilityAnnouncer>()

  useEffect(() => {
    announcerRef.current = AccessibilityAnnouncer.getInstance()
  }, [])

  return <>{children}</>
}

// Hook for using the announcer
export function useAccessibilityAnnouncer() {
  const announcer = AccessibilityAnnouncer.getInstance()

  return {
    announce: announcer.announce.bind(announcer),
    announceNavigation: announcer.announceNavigation.bind(announcer),
    announceError: announcer.announceError.bind(announcer),
    announceSuccess: announcer.announceSuccess.bind(announcer),
    announceLoading: announcer.announceLoading.bind(announcer),
    announceLoadingComplete: announcer.announceLoadingComplete.bind(announcer),
  }
}

// Component for route change announcements
export function RouteAnnouncer() {
  const { announceNavigation } = useAccessibilityAnnouncer()

  useEffect(() => {
    const handleRouteChange = () => {
      const title = document.title
      const path = window.location.pathname
      
      // Extract page name from path
      const pageName = path === '/' ? 'Home' : 
                     path.split('/').pop()?.replace(/-/g, ' ') || 'Page'
      
      announceNavigation('previous page', pageName)
    }

    // Listen for navigation events
    window.addEventListener('popstate', handleRouteChange)
    
    // For client-side navigation, we need to listen to Next.js router events
    // This is a simplified version - in a real app you'd use Next.js router events
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target === document.head) {
          const titleElement = document.querySelector('title')
          if (titleElement && mutation.addedNodes.length > 0) {
            handleRouteChange()
          }
        }
      })
    })

    observer.observe(document.head, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      observer.disconnect()
    }
  }, [announceNavigation])

  return null
}

// Component for form announcements
export function FormAnnouncer({ 
  errors, 
  isSubmitting, 
  isSubmitted 
}: { 
  errors?: Record<string, string>
  isSubmitting?: boolean
  isSubmitted?: boolean
}) {
  const { announceError, announceLoading, announceSuccess } = useAccessibilityAnnouncer()

  useEffect(() => {
    if (errors && Object.keys(errors).length > 0) {
      const errorMessages = Object.values(errors).join('. ')
      announceError(`Form has errors: ${errorMessages}`)
    }
  }, [errors, announceError])

  useEffect(() => {
    if (isSubmitting) {
      announceLoading('Submitting form')
    }
  }, [isSubmitting, announceLoading])

  useEffect(() => {
    if (isSubmitted && !isSubmitting) {
      announceSuccess('Form submitted successfully')
    }
  }, [isSubmitted, isSubmitting, announceSuccess])

  return null
}

// Component for status announcements
export function StatusAnnouncer({ 
  status, 
  message 
}: { 
  status: 'loading' | 'error' | 'success' | 'info'
  message: string
}) {
  const { announce, announceError, announceSuccess, announceLoading } = useAccessibilityAnnouncer()

  useEffect(() => {
    switch (status) {
      case 'loading':
        announceLoading(message)
        break
      case 'error':
        announceError(message)
        break
      case 'success':
        announceSuccess(message)
        break
      case 'info':
        announce(message, { priority: 'polite' })
        break
    }
  }, [status, message, announce, announceError, announceSuccess, announceLoading])

  return null
}