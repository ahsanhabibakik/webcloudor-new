'use client'

import Link from 'next/link'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SafeImage } from '@/components/SafeImage'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

function ProjectCardContent({ project }: ProjectCardProps) {

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  const getCategoryColor = (category: Project['category']) => {
    switch (category) {
      case 'web-app':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200'
      case 'e-commerce':
        return 'bg-green-100 text-green-800 hover:bg-green-200'
      case 'corporate':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200'
      case 'mobile':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-200'
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }
  }

  const getCategoryLabel = (category: Project['category']) => {
    switch (category) {
      case 'web-app':
        return 'Web App'
      case 'e-commerce':
        return 'E-commerce'
      case 'corporate':
        return 'Corporate'
      case 'mobile':
        return 'Mobile'
      default:
        return category
    }
  }

  return (
    <Card 
      className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <SafeImage
          src={project.image}
          alt={`Screenshot of ${project.title} project showing the main interface`}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
          fallbackClassName="aspect-video"
        />
        
        {/* Overlay with links */}
        <div 
          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
          role="group"
          aria-label="Project actions"
        >
          <Link href={`/projects/${project.id}`}>
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-white/90 hover:bg-white"
              aria-label={`View detailed information about ${project.title}`}
            >
              View Details
            </Button>
          </Link>
          {project.liveUrl && (
            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white" asChild>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title} (opens in new tab)`}
              >
                <ExternalLink className="w-4 h-4 mr-1" aria-hidden="true" />
                Live Demo
              </a>
            </Button>
          )}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-600">
              Featured
            </Badge>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <Badge className={getCategoryColor(project.category)}>
            {getCategoryLabel(project.category)}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 
            id={`project-title-${project.id}`}
            className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors"
          >
            <Link 
              href={`/projects/${project.id}`}
              aria-describedby={`project-desc-${project.id}`}
            >
              {project.title}
            </Link>
          </h3>
          <p 
            id={`project-desc-${project.id}`}
            className="text-gray-600 text-sm line-clamp-2"
          >
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="sr-only">Technologies used</h4>
          <div 
            className="flex flex-wrap gap-1"
            role="list"
            aria-label="Technologies used in this project"
          >
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech.name}
                variant="outline"
                className="text-xs bg-gray-50 hover:bg-gray-100"
                role="listitem"
              >
                {tech.name}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge 
                variant="outline" 
                className="text-xs bg-gray-50"
                role="listitem"
                aria-label={`${project.technologies.length - 4} additional technologies`}
              >
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Completion Date */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
          <time dateTime={project.completedDate.toISOString()}>
            Completed {formatDate(project.completedDate)}
          </time>
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 bg-gray-50 border-t">
        <div className="flex items-center justify-between w-full">
          <Link href={`/projects/${project.id}`}>
            <Button 
              variant="outline" 
              size="sm"
              aria-label={`Learn more about ${project.title} project`}
            >
              Learn More
            </Button>
          </Link>
          
          <div 
            className="flex items-center gap-2"
            role="group"
            aria-label="External project links"
          >
            {project.githubUrl && (
              <Button size="sm" variant="ghost" className="p-2" asChild>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" variant="ghost" className="p-2" asChild>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title} (opens in new tab)`}
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <ErrorBoundary
      fallback={
        <Card className="overflow-hidden">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Project unavailable</p>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {project.description}
            </p>
          </CardContent>
        </Card>
      }
    >
      <ProjectCardContent project={project} />
    </ErrorBoundary>
  )
}