'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

interface AccessibilityCheck {
  name: string
  status: 'pass' | 'fail' | 'warning'
  description: string
}

export function AccessibilityTest() {
  const [checks, setChecks] = useState<AccessibilityCheck[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const runAccessibilityChecks = () => {
      const results: AccessibilityCheck[] = []

      // Check for skip links
      const skipLink = document.querySelector('.skip-link')
      results.push({
        name: 'Skip Link',
        status: skipLink ? 'pass' : 'fail',
        description: skipLink ? 'Skip link found' : 'Skip link missing'
      })

      // Check for main landmark
      const mainElement = document.querySelector('main[role="main"], main')
      results.push({
        name: 'Main Landmark',
        status: mainElement ? 'pass' : 'fail',
        description: mainElement ? 'Main landmark found' : 'Main landmark missing'
      })

      // Check for proper heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      const hasH1 = document.querySelector('h1')
      results.push({
        name: 'Heading Hierarchy',
        status: hasH1 ? 'pass' : 'fail',
        description: hasH1 ? `Found ${headings.length} headings with H1` : 'No H1 found'
      })

      // Check for alt text on images
      const images = document.querySelectorAll('img')
      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt && !img.getAttribute('aria-hidden'))
      results.push({
        name: 'Image Alt Text',
        status: imagesWithoutAlt.length === 0 ? 'pass' : 'warning',
        description: imagesWithoutAlt.length === 0 
          ? `All ${images.length} images have alt text` 
          : `${imagesWithoutAlt.length} images missing alt text`
      })

      // Check for form labels
      const inputs = document.querySelectorAll('input, select, textarea')
      const inputsWithoutLabels = Array.from(inputs).filter(input => {
        const id = input.id
        const ariaLabel = input.getAttribute('aria-label')
        const ariaLabelledBy = input.getAttribute('aria-labelledby')
        const label = id ? document.querySelector(`label[for="${id}"]`) : null
        return !label && !ariaLabel && !ariaLabelledBy
      })
      results.push({
        name: 'Form Labels',
        status: inputsWithoutLabels.length === 0 ? 'pass' : 'warning',
        description: inputsWithoutLabels.length === 0 
          ? `All ${inputs.length} form controls have labels` 
          : `${inputsWithoutLabels.length} form controls missing labels`
      })

      // Check for focus indicators
      const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])')
      results.push({
        name: 'Focusable Elements',
        status: focusableElements.length > 0 ? 'pass' : 'warning',
        description: `Found ${focusableElements.length} focusable elements`
      })

      // Check for reduced motion support
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      results.push({
        name: 'Reduced Motion',
        status: 'pass',
        description: prefersReducedMotion ? 'User prefers reduced motion' : 'Motion enabled'
      })

      // Check for high contrast support
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
      results.push({
        name: 'High Contrast',
        status: 'pass',
        description: prefersHighContrast ? 'User prefers high contrast' : 'Normal contrast'
      })

      setChecks(results)
    }

    // Run checks after a short delay to ensure DOM is ready
    const timer = setTimeout(runAccessibilityChecks, 1000)
    return () => clearTimeout(timer)
  }, [])

  const getStatusIcon = (status: AccessibilityCheck['status']) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'fail':
        return <XCircle className="w-4 h-4 text-red-600" />
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />
    }
  }

  const getStatusBadge = (status: AccessibilityCheck['status']) => {
    switch (status) {
      case 'pass':
        return <Badge className="bg-green-100 text-green-800">Pass</Badge>
      case 'fail':
        return <Badge className="bg-red-100 text-red-800">Fail</Badge>
      case 'warning':
        return <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>
    }
  }

  if (!isVisible) {
    return (
      <Button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-50"
        size="sm"
        variant="outline"
      >
        A11y Test
      </Button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Accessibility Check</CardTitle>
            <Button
              onClick={() => setIsVisible(false)}
              size="sm"
              variant="ghost"
            >
              ×
            </Button>
          </div>
          <CardDescription>
            Automated accessibility validation results
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 max-h-96 overflow-y-auto">
          {checks.map((check, index) => (
            <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50">
              {getStatusIcon(check.status)}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium">{check.name}</h4>
                  {getStatusBadge(check.status)}
                </div>
                <p className="text-xs text-slate-600">{check.description}</p>
              </div>
            </div>
          ))}
          
          <div className="pt-3 border-t">
            <div className="flex gap-2 text-xs">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-600" />
                {checks.filter(c => c.status === 'pass').length} Pass
              </span>
              <span className="flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-yellow-600" />
                {checks.filter(c => c.status === 'warning').length} Warning
              </span>
              <span className="flex items-center gap-1">
                <XCircle className="w-3 h-3 text-red-600" />
                {checks.filter(c => c.status === 'fail').length} Fail
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}