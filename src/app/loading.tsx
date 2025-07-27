import { LoadingState, SkeletonLoader } from '@/components/LoadingState'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        {/* Hero section skeleton */}
        <div className="text-center space-y-4">
          <SkeletonLoader lines={2} className="max-w-2xl mx-auto" />
          <SkeletonLoader lines={1} width="half" className="max-w-xl mx-auto" />
          <div className="flex justify-center gap-4 pt-4">
            <div className="h-12 w-32 bg-muted rounded animate-pulse" />
            <div className="h-12 w-32 bg-muted rounded animate-pulse" />
          </div>
        </div>
        
        {/* Content sections skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
              <SkeletonLoader lines={3} />
            </div>
          ))}
        </div>
        
        {/* Loading indicator */}
        <div className="pt-8">
          <LoadingState message="Loading page..." />
        </div>
      </div>
    </div>
  )
}