/**
 * Accessibility utilities and helpers
 */

// Skip link component for keyboard navigation
export const skipLinkStyles = {
  position: 'absolute' as const,
  left: '-9999px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  zIndex: 999999,
  padding: '8px 16px',
  background: '#000',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 'bold',
  transition: 'all 0.2s ease',
}

export const skipLinkFocusStyles = {
  ...skipLinkStyles,
  left: '20px',
  top: '20px',
  width: 'auto',
  height: 'auto',
  overflow: 'visible',
}

// ARIA label generators
export const generateAriaLabel = {
  navigation: (current?: string) => 
    current ? `Main navigation, current page: ${current}` : 'Main navigation',
  
  button: (action: string, context?: string) =>
    context ? `${action} ${context}` : action,
  
  link: (destination: string, external = false) =>
    external ? `${destination} (opens in new tab)` : `Go to ${destination}`,
  
  image: (title: string, description?: string) =>
    description ? `${title}: ${description}` : title,
  
  form: (purpose: string) => `${purpose} form`,
  
  status: (message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') =>
    `${type}: ${message}`,
}

// Focus management utilities
export const focusManagement = {
  // Trap focus within an element
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }

    element.addEventListener('keydown', handleTabKey)
    firstElement?.focus()

    return () => {
      element.removeEventListener('keydown', handleTabKey)
    }
  },

  // Move focus to element
  moveFocusTo: (selector: string | HTMLElement) => {
    const element = typeof selector === 'string' 
      ? document.querySelector(selector) as HTMLElement
      : selector

    if (element) {
      element.focus()
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  },

  // Save and restore focus
  saveFocus: () => {
    const activeElement = document.activeElement as HTMLElement
    return () => activeElement?.focus()
  }
}

// Keyboard navigation helpers
export const keyboardNavigation = {
  // Handle arrow key navigation in lists
  handleArrowKeys: (
    e: KeyboardEvent,
    items: HTMLElement[],
    currentIndex: number,
    onIndexChange: (index: number) => void
  ) => {
    let newIndex = currentIndex

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
        break
      case 'ArrowUp':
      case 'ArrowLeft':
        newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
        break
      case 'Home':
        newIndex = 0
        break
      case 'End':
        newIndex = items.length - 1
        break
      default:
        return
    }

    e.preventDefault()
    onIndexChange(newIndex)
    items[newIndex]?.focus()
  },

  // Handle escape key
  handleEscape: (callback: () => void) => (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      callback()
    }
  }
}

// Screen reader utilities
export const screenReader = {
  // Announce message to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message

    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  },

  // Create visually hidden text for screen readers
  createSROnlyText: (text: string) => {
    const span = document.createElement('span')
    span.className = 'sr-only'
    span.textContent = text
    return span
  }
}

// Color contrast utilities
export const colorContrast = {
  // Check if user prefers reduced motion
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  // Check if user prefers high contrast
  prefersHighContrast: () => {
    return window.matchMedia('(prefers-contrast: high)').matches
  },

  // Check if user prefers dark mode
  prefersDarkMode: () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

// Form accessibility helpers
export const formAccessibility = {
  // Generate form field IDs and associate labels
  generateFieldId: (name: string, prefix = 'field') => `${prefix}-${name}`,
  
  // Create error message ID
  generateErrorId: (fieldName: string) => `${fieldName}-error`,
  
  // Create description ID
  generateDescriptionId: (fieldName: string) => `${fieldName}-description`,
  
  // Get ARIA attributes for form field
  getFieldAriaAttributes: (
    fieldName: string,
    hasError = false,
    hasDescription = false
  ) => ({
    id: formAccessibility.generateFieldId(fieldName),
    'aria-invalid': hasError,
    'aria-describedby': [
      hasError ? formAccessibility.generateErrorId(fieldName) : null,
      hasDescription ? formAccessibility.generateDescriptionId(fieldName) : null
    ].filter(Boolean).join(' ') || undefined
  })
}

// Responsive design helpers for accessibility
export const responsiveA11y = {
  // Check if touch device
  isTouchDevice: () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  },

  // Get minimum touch target size
  getMinTouchTargetSize: () => '44px', // WCAG AA standard

  // Check if device supports hover
  supportsHover: () => {
    return window.matchMedia('(hover: hover)').matches
  }
}