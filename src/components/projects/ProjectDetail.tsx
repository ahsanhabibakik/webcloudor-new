'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { SafeImage } from '@/components/SafeImage'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import type { Project } from '@/types'

interface ProjectDetailProps {
  project: Project
}

function ProjectDetailContent({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: Project['category']) => {
    switch (category) {
      case 'web-app':
        return 'bg-blue-100 text-blue-800'
      case 'e-commerce':
        return 'bg-green-100 text-green-800'
      case 'corporate':
        return 'bg-purple-100 text-purple-800'
      case 'mobile':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryLabel = (category: Project['category']) => {
    switch (category) {
      case 'web-app':
        return 'Web Application'
      case 'e-commerce':
        return 'E-commerce Platform'
      case 'corporate':
        return 'Corporate Website'
      case 'mobile':
        return 'Mobile Application'
      default:
        return category
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    )
  }

  const groupedTechnologies = project.technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category]!.push(tech)
    return acc
  }, {} as Record<string, typeof project.technologies>)

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className={getCategoryColor(project.category)}>
              {getCategoryLabel(project.category)}
            </Badge>
            {project.featured && (
              <Badge className="bg-yellow-500 text-yellow-900">
                Featured Project
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              Completed {formatDate(project.completedDate)}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Site
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Gallery</h2>
              
              {/* Main Image */}
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
                <SafeImage
                  src={project.gallery[currentImageIndex]}
                  alt={`${project.title} - Screenshot ${currentImageIndex + 1} of ${project.gallery.length}`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  fallbackClassName="aspect-video rounded-lg"
                />
                
                {/* Navigation Arrows */}
                {project.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      title="Previous image"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      title="Next image"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.gallery.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              {project.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.gallery.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex
                          ? 'border-blue-500'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      title={`View image ${index + 1}`}
                      aria-label={`View image ${index + 1} of ${project.gallery.length}`}
                    >
                      <SafeImage
                        src={image}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        fallbackClassName="w-20 h-20 rounded-lg"
                        showFallbackIcon={false}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">About This Project</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Technologies Used */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Technologies Used
                </h3>
                
                {Object.entries(groupedTechnologies).map(([category, techs]) => (
                  <div key={category} className="mb-4 last:mb-0">
                    <h4 className="text-sm font-medium text-gray-700 mb-2 capitalize">
                      {category === 'tool' ? 'Tools & Services' : category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="outline"
                          className="bg-gray-50"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Project Links */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Project Links
                </h3>
                
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Website
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-screen bg-white">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <Link href="/projects">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
              </Link>
            </div>
            <div className="text-center py-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Project Unavailable
              </h1>
              <p className="text-gray-600 mb-8">
                Sorry, this project couldn&apos;t be loaded. Please try again later.
              </p>
              <Link href="/projects">
                <Button>View All Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      }
    >
      <ProjectDetailContent project={project} />
    </ErrorBoundary>
  )
}