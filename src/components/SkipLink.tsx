'use client'

import { skipLinkStyles, skipLinkFocusStyles } from '@/lib/utils/accessibility'
import { useState } from 'react'

export function SkipLink() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <a
      href="#main-content"
      style={isFocused ? skipLinkFocusStyles : skipLinkStyles}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="skip-link"
    >
      Skip to main content
    </a>
  )
}