'use client'

import { lazy, Suspense } from 'react'
import { SkeletonLoader, ImageSkeleton } from './LazyLoad'

// Lazy load heavy components that are not immediately visible
export const LazyProjectDetail = lazy(() => 
  import('./projects/ProjectDetail').then(module => ({ default: module.ProjectDetail }))
)

export const LazyContactForm = lazy(() => 
  import('./contact/ContactForm').then(module => ({ default: module.ContactForm }))
)

export const LazyTeamGrid = lazy(() => 
  import('./team/TeamGrid').then(module => ({ default: module.TeamGrid }))
)

// Wrapper components with appropriate fallbacks
export function LazyProjectDetailWrapper(props: any) {
  return (
    <Suspense fallback={
      <div className="space-y-6">
        <SkeletonLoader height="h-8" width="w-1/2" />
        <ImageSkeleton aspectRatio="aspect-video" />
        <div className="space-y-3">
          <SkeletonLoader height="h-4" />
          <SkeletonLoader height="h-4" width="w-3/4" />
          <SkeletonLoader height="h-4" width="w-1/2" />
        </div>
      </div>
    }>
      <LazyProjectDetail {...props} />
    </Suspense>
  )
}

export function LazyContactFormWrapper(props: any) {
  return (
    <Suspense fallback={
      <div className="space-y-4">
        <SkeletonLoader height="h-6" width="w-1/3" />
        <div className="grid grid-cols-2 gap-4">
          <SkeletonLoader height="h-10" />
          <SkeletonLoader height="h-10" />
        </div>
        <SkeletonLoader height="h-10" />
        <div className="grid grid-cols-2 gap-4">
          <SkeletonLoader height="h-10" />
          <SkeletonLoader height="h-10" />
        </div>
        <SkeletonLoader height="h-24" />
        <SkeletonLoader height="h-10" />
      </div>
    }>
      <LazyContactForm {...props} />
    </Suspense>
  )
}

export function LazyTeamGridWrapper(props: any) {
  return (
    <Suspense fallback={
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <ImageSkeleton aspectRatio="aspect-[4/5]" />
            <SkeletonLoader height="h-5" width="w-2/3" />
            <SkeletonLoader height="h-4" width="w-1/2" />
            <div className="space-y-2">
              <SkeletonLoader height="h-3" />
              <SkeletonLoader height="h-3" width="w-3/4" />
            </div>
          </div>
        ))}
      </div>
    }>
      <LazyTeamGrid {...props} />
    </Suspense>
  )
}