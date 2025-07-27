'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface KeyboardNavigationContextType {
  isKeyboardUser: boolean
  currentFocusedElement: HTMLElement | null
  focusNext: () => void
  focusPrevious: () => void
  focusFirst: () => void
  focusLast: () => void
}

const KeyboardNavigationContext = createContext<KeyboardNavigationContextType | undefined>(undefined)

export function KeyboardNavigationProvider({ children }: { children: React.ReactNode }) {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false)
  const [currentFocusedElement, setCurrentFocusedElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let keyboardTimeout: NodeJS.Timeout

    const handleKeyDown = (e: KeyboardEvent) => {
      // Detect keyboard usage
      if (e.key === 'Tab' || e.key === 'Enter' || e.key === ' ' || e.key.startsWith('Arrow')) {
        setIsKeyboardUser(true)
        document.body.classList.add('keyboard-navigation-active')
        
        // Clear any existing timeout
        clearTimeout(keyboardTimeout)
        
        // Reset keyboard user state after 3 seconds of no keyboard activity
        keyboardTimeout = setTimeout(() => {
          setIsKeyboardUser(false)
          document.body.classList.remove('keyboard-navigation-active')
        }, 3000)
      }

      // Handle escape key globally
      if (e.key === 'Escape') {
        const activeElement = document.activeElement as HTMLElement
        if (activeElement && activeElement.blur) {
          activeElement.blur()
        }
      }
    }

    const handleMouseDown = () => {
      setIsKeyboardUser(false)
      document.body.classList.remove('keyboard-navigation-active')
      clearTimeout(keyboardTimeout)
    }

    const handleFocusIn = (e: FocusEvent) => {
      setCurrentFocusedElement(e.target as HTMLElement)
    }

    const handleFocusOut = () => {
      setCurrentFocusedElement(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('focusout', handleFocusOut)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('focusout', handleFocusOut)
      clearTimeout(keyboardTimeout)
    }
  }, [])

  const getFocusableElements = (): HTMLElement[] => {
    const selector = [
      'button:not([disabled])',
      'a[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]:not([disabled])',
      '[role="link"]',
      '[role="menuitem"]',
      '[role="tab"]'
    ].join(', ')

    return Array.from(document.querySelectorAll(selector)) as HTMLElement[]
  }

  const focusNext = () => {
    const focusableElements = getFocusableElements()
    const currentIndex = currentFocusedElement 
      ? focusableElements.indexOf(currentFocusedElement)
      : -1
    
    const nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0
    focusableElements[nextIndex]?.focus()
  }

  const focusPrevious = () => {
    const focusableElements = getFocusableElements()
    const currentIndex = currentFocusedElement 
      ? focusableElements.indexOf(currentFocusedElement)
      : -1
    
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1
    focusableElements[prevIndex]?.focus()
  }

  const focusFirst = () => {
    const focusableElements = getFocusableElements()
    focusableElements[0]?.focus()
  }

  const focusLast = () => {
    const focusableElements = getFocusableElements()
    focusableElements[focusableElements.length - 1]?.focus()
  }

  return (
    <KeyboardNavigationContext.Provider
      value={{
        isKeyboardUser,
        currentFocusedElement,
        focusNext,
        focusPrevious,
        focusFirst,
        focusLast,
      }}
    >
      {children}
    </KeyboardNavigationContext.Provider>
  )
}

export function useKeyboardNavigationContext() {
  const context = useContext(KeyboardNavigationContext)
  if (context === undefined) {
    throw new Error('useKeyboardNavigationContext must be used within a KeyboardNavigationProvider')
  }
  return context
}

// Hook for handling common keyboard shortcuts
export function useKeyboardShortcuts() {
  const { focusNext, focusPrevious, focusFirst, focusLast } = useKeyboardNavigationContext()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if user is typing in an input
      const activeElement = document.activeElement
      if (activeElement && (
        activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.getAttribute('contenteditable') === 'true'
      )) {
        return
      }

      // Handle keyboard shortcuts
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'Home':
            e.preventDefault()
            focusFirst()
            break
          case 'End':
            e.preventDefault()
            focusLast()
            break
        }
      }

      // Handle navigation without modifiers
      switch (e.key) {
        case 'F6':
          e.preventDefault()
          if (e.shiftKey) {
            focusPrevious()
          } else {
            focusNext()
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [focusNext, focusPrevious, focusFirst, focusLast])
}