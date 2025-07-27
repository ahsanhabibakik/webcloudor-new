'use client'

import { useEffect, useRef } from 'react'
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation'

interface KeyboardNavigationProps {
  children: React.ReactNode
  className?: string
  trapFocus?: boolean
  autoFocus?: boolean
}

export function KeyboardNavigation({
  children,
  className,
  trapFocus = false,
  autoFocus = false,
}: KeyboardNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useKeyboardNavigation({
    onEscape: () => {
      // Handle escape key - could close modals, menus, etc.
      const activeElement = document.activeElement as HTMLElement
      if (activeElement && activeElement.blur) {
        activeElement.blur()
      }
    },
  })

  useEffect(() => {
    if (autoFocus && containerRef.current) {
      const firstFocusable = containerRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement
      
      firstFocusable?.focus()
    }
  }, [autoFocus])

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

      container.addEventListener('keydown', handleTabKey)
      return () => container.removeEventListener('keydown', handleTabKey)
    }
  }, [trapFocus])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

// Component for creating accessible button groups with arrow key navigation
export function ButtonGroup({
  children,
  orientation = 'horizontal',
  className,
}: {
  children: React.ReactNode
  orientation?: 'horizontal' | 'vertical'
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const buttons = Array.from(container.querySelectorAll('button')) as HTMLButtonElement[]
    let currentIndex = 0

    // Set initial tabindex
    buttons.forEach((button, index) => {
      button.tabIndex = index === 0 ? 0 : -1
    })

    const handleKeyDown = (e: KeyboardEvent) => {
      const nextKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown'
      const prevKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp'

      let newIndex = currentIndex

      switch (e.key) {
        case nextKey:
          newIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0
          break
        case prevKey:
          newIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1
          break
        case 'Home':
          newIndex = 0
          break
        case 'End':
          newIndex = buttons.length - 1
          break
        default:
          return
      }

      e.preventDefault()
      
      // Update tabindex
      if (buttons[currentIndex]) {
        buttons[currentIndex].tabIndex = -1
      }
      if (buttons[newIndex]) {
        buttons[newIndex].tabIndex = 0
        buttons[newIndex].focus()
      }
      
      currentIndex = newIndex
    }

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLButtonElement
      const index = buttons.indexOf(target)
      if (index !== -1) {
        currentIndex = index
      }
    }

    container.addEventListener('keydown', handleKeyDown)
    container.addEventListener('focusin', handleFocus)

    return () => {
      container.removeEventListener('keydown', handleKeyDown)
      container.removeEventListener('focusin', handleFocus)
    }
  }, [orientation])

  return (
    <div
      ref={containerRef}
      role="group"
      className={className}
    >
      {children}
    </div>
  )
}