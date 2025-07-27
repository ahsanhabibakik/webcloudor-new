import { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'

interface NoScriptProps {
  children: ReactNode
  fallback?: ReactNode
  message?: string
}

export function NoScript({ 
  children, 
  fallback,
  message = "This feature requires JavaScript to be enabled in your browser."
}: NoScriptProps) {
  return (
    <>
      <noscript>
        {fallback || (
          <Card className="w-full max-w-md mx-auto my-8 border-yellow-200 bg-yellow-50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                <CardTitle className="text-lg text-yellow-800">JavaScript Required</CardTitle>
              </div>
              <CardDescription className="text-yellow-700">
                {message}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-yellow-700">
                Please enable JavaScript in your browser settings and refresh the page to use this feature.
              </p>
            </CardContent>
          </Card>
        )}
      </noscript>
      {children}
    </>
  )
}

// Progressive enhancement wrapper
export function ProgressiveEnhancement({ 
  children, 
  fallback,
  className 
}: { 
  children: ReactNode
  fallback: ReactNode
  className?: string 
}) {
  return (
    <div className={className}>
      <NoScript fallback={fallback}>
        {children}
      </NoScript>
    </div>
  )
}