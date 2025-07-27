import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingStateProps {
  message?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function LoadingState({ 
  message = 'Loading...', 
  className,
  size = 'md' 
}: LoadingStateProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  return (
    <div className={cn(
      "flex items-center justify-center gap-2 text-muted-foreground",
      className
    )}>
      <Loader2 className={cn("animate-spin", sizeClasses[size])} />
      <span className="text-sm">{message}</span>
    </div>
  )
}

// Skeleton loading component
export function SkeletonLoader({ 
  className,
  lines = 3,
  width = 'full'
}: { 
  className?: string
  lines?: number
  width?: 'full' | 'half' | 'quarter'
}) {
  const widthClasses = {
    full: 'w-full',
    half: 'w-1/2',
    quarter: 'w-1/4'
  }

  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-4 bg-muted rounded animate-pulse",
            i === lines - 1 ? widthClasses[width] : 'w-full'
          )}
        />
      ))}
    </div>
  )
}