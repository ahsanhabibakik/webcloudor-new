'use client'

import { useEffect } from 'react'

export function MobileOptimizations() {
  useEffect(() => {
    // Add mobile-specific viewport and touch optimizations
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, user-scalable=yes, viewport-fit=cover'
      )
    }

    // Add touch-action CSS for better touch handling
    const style = document.createElement('style')
    style.textContent = `
      /* Touch-friendly interactions */
      button, [role="button"], a, input, select, textarea {
        touch-action: manipulation;
        min-height: 44px;
        min-width: 44px;
      }
      
      /* Improve touch targets for small elements */
      .touch-target {
        position: relative;
      }
      
      .touch-target::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: max(44px, 100%);
        height: max(44px, 100%);
        z-index: -1;
      }
      
      /* Prevent text selection on touch devices for interactive elements */
      button, [role="button"] {
        -webkit-user-select: none;
        user-select: none;
      }
      
      /* Improve scrolling on iOS */
      * {
        -webkit-overflow-scrolling: touch;
      }
      
      /* Fix iOS zoom on input focus */
      input, select, textarea {
        font-size: max(16px, 1rem);
      }
      
      /* Improve mobile focus states */
      @media (hover: none) and (pointer: coarse) {
        button:focus, [role="button"]:focus, a:focus {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}
