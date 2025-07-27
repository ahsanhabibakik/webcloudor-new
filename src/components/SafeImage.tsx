'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { ImageOff } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string
  showFallbackIcon?: boolean
  fallbackClassName?: string
  onError?: (error: any) => void
}

export function SafeImage({
  src,
  alt,
  fallbackSrc,
  showFallbackIcon = true,
  fallbackClassName,
  onError,
  className,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  const handleError = (error: any) => {
    console.warn('Image failed to load:', currentSrc, error)
    
    // Try fallback image first
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      return
    }
    
    // If fallback also fails or no fallback provided, show error state
    setError(true)
    
    // Call custom error handler if provided
    if (onError) {
      onError(error)
    }
  }

  if (error) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-muted text-muted-foreground",
          fallbackClassName,
          className
        )}
        style={{ 
          width: props.width || '100%', 
          height: props.height || 'auto',
          minHeight: '100px'
        }}
      >
        {showFallbackIcon ? (
          <div className="flex flex-col items-center gap-2">
            <ImageOff className="h-8 w-8" />
            <span className="text-sm">Image unavailable</span>
          </div>
        ) : (
          <span className="text-sm">Image unavailable</span>
        )}
      </div>
    )
  }

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  )
}

// Loading placeholder component
export function ImagePlaceholder({ 
  className, 
  width, 
  height 
}: { 
  className?: string
  width?: number | string
  height?: number | string 
}) {
  return (
    <div 
      className={cn(
        "animate-pulse bg-muted flex items-center justify-center",
        className
      )}
      style={{ 
        width: width || '100%', 
        height: height || 'auto',
        minHeight: '100px'
      }}
    >
      <div className="text-muted-foreground">
        <div className="w-8 h-8 bg-muted-foreground/20 rounded animate-pulse" />
      </div>
    </div>
  )
}