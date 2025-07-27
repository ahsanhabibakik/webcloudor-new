'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { colorContrast } from '@/lib/utils/accessibility'

interface AccessibilityContextType {
  prefersReducedMotion: boolean
  prefersHighContrast: boolean
  prefersDarkMode: boolean
  announceToScreenReader: (message: string, priority?: 'polite' | 'assertive') => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [prefersHighContrast, setPrefersHighContrast] = useState(false)
  const [prefersDarkMode, setPrefersDarkMode] = useState(false)

  useEffect(() => {
    // Set initial values
    setPrefersReducedMotion(colorContrast.prefersReducedMotion())
    setPrefersHighContrast(colorContrast.prefersHighContrast())
    setPrefersDarkMode(colorContrast.prefersDarkMode())

    // Listen for changes
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)')
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleReducedMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    const handleHighContrastChange = (e: MediaQueryListEvent) => setPrefersHighContrast(e.matches)
    const handleDarkModeChange = (e: MediaQueryListEvent) => setPrefersDarkMode(e.matches)

    reducedMotionQuery.addEventListener('change', handleReducedMotionChange)
    highContrastQuery.addEventListener('change', handleHighContrastChange)
    darkModeQuery.addEventListener('change', handleDarkModeChange)

    return () => {
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange)
      highContrastQuery.removeEventListener('change', handleHighContrastChange)
      darkModeQuery.removeEventListener('change', handleDarkModeChange)
    }
  }, [])

  const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement)
      }
    }, 1000)
  }

  return (
    <AccessibilityContext.Provider
      value={{
        prefersReducedMotion,
        prefersHighContrast,
        prefersDarkMode,
        announceToScreenReader,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}