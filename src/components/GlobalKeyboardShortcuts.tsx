'use client'

import { useEffect } from 'react'
import { useKeyboardShortcuts } from '@/components/KeyboardNavigationProvider'
import { useAccessibilityAnnouncer } from '@/components/AccessibilityAnnouncer'

export function GlobalKeyboardShortcuts() {
  useKeyboardShortcuts()
  const { announce } = useAccessibilityAnnouncer()

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

      // Handle accessibility shortcuts
      if (e.altKey) {
        switch (e.key) {
          case '1':
            e.preventDefault()
            const mainContent = document.getElementById('main-content')
            if (mainContent) {
              mainContent.focus()
              announce('Jumped to main content')
            }
            break
          case '2':
            e.preventDefault()
            const navigation = document.querySelector('nav[role="navigation"]') as HTMLElement
            if (navigation) {
              const firstLink = navigation.querySelector('a') as HTMLElement
              firstLink?.focus()
              announce('Jumped to navigation')
            }
            break
          case '3':
            e.preventDefault()
            const footer = document.querySelector('footer[role="contentinfo"]') as HTMLElement
            if (footer) {
              const firstLink = footer.querySelector('a, button') as HTMLElement
              firstLink?.focus()
              announce('Jumped to footer')
            }
            break
          case 'h':
            e.preventDefault()
            showKeyboardHelp()
            break
        }
      }

      // Handle search shortcut
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement
        if (searchInput) {
          searchInput.focus()
          announce('Search activated')
        }
      }
    }

    const showKeyboardHelp = () => {
      const helpText = `
        Keyboard shortcuts:
        Alt + 1: Jump to main content
        Alt + 2: Jump to navigation
        Alt + 3: Jump to footer
        Alt + H: Show this help
        Ctrl/Cmd + K: Search
        Tab: Navigate forward
        Shift + Tab: Navigate backward
        Enter/Space: Activate buttons and links
        Escape: Close dialogs and menus
      `
      announce(helpText, { priority: 'assertive' })
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [announce])

  return null
}