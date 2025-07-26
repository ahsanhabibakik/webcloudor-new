import { Metadata } from 'next'
import { ProjectsShowcase } from '@/components/projects/ProjectsShowcase'

export const metadata: Metadata = {
  title: 'Projects | Modern Agency',
  description: 'Explore our portfolio of web development projects, from e-commerce platforms to corporate websites and web applications.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProjectsShowcase />
    </div>
  )
}