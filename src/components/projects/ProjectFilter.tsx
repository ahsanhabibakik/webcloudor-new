'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import type { ProjectCategory } from '@/types'

interface ProjectFilterProps {
  selectedCategory: ProjectCategory | 'all'
  onCategoryChange: (category: ProjectCategory | 'all') => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

const categories: Array<{ value: ProjectCategory | 'all'; label: string; count?: number }> = [
  { value: 'all', label: 'All Projects' },
  { value: 'web-app', label: 'Web Apps' },
  { value: 'e-commerce', label: 'E-commerce' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'mobile', label: 'Mobile' },
]

export function ProjectFilter({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: ProjectFilterProps) {
  return (
    <div className="mb-12">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-2 w-full"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(category.value)}
            className="transition-all duration-200"
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  )
}