'use client'

import { useState, useMemo } from 'react'
import { ProjectCard } from './ProjectCard'
import { ProjectFilter } from './ProjectFilter'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { LoadingState } from '@/components/LoadingState'
import { mockProjects } from '@/lib/data/projects'
import type { Project, ProjectCategory } from '@/types'

function ProjectsShowcaseContent() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const filteredProjects = useMemo(() => {
    let filtered = mockProjects

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.name.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [selectedCategory, searchQuery])

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our portfolio of successful web development projects. From e-commerce platforms 
          to corporate websites, each project showcases our commitment to quality and innovation.
        </p>
      </div>

      {/* Filter Controls */}
      <ErrorBoundary
        fallback={
          <div className="mb-12 text-center">
            <p className="text-gray-500">Filter controls unavailable</p>
          </div>
        }
      >
        <ProjectFilter
          selectedCategory={selectedCategory}
          onCategoryChange={(category) => {
            setIsLoading(true)
            setSelectedCategory(category)
            // Simulate brief loading for better UX
            setTimeout(() => setIsLoading(false), 100)
          }}
          searchQuery={searchQuery}
          onSearchChange={(query) => {
            setIsLoading(true)
            setSearchQuery(query)
            // Simulate brief loading for better UX
            setTimeout(() => setIsLoading(false), 300)
          }}
        />
      </ErrorBoundary>

      {/* Loading State */}
      {isLoading && (
        <div className="py-8">
          <LoadingState message="Filtering projects..." />
        </div>
      )}

      {/* Projects Grid */}
      {!isLoading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
                className="mt-4 text-blue-600 hover:text-blue-800 underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export function ProjectsShowcase() {
  return (
    <ErrorBoundary
      fallback={
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, our projects showcase is temporarily unavailable.
            </p>
            <p className="text-gray-500">
              Please try refreshing the page or contact us if the problem persists.
            </p>
          </div>
        </div>
      }
    >
      <ProjectsShowcaseContent />
    </ErrorBoundary>
  )
}