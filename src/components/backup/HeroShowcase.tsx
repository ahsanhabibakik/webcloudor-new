'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Eye, Sparkles, Palette, Grid, Star } from 'lucide-react'

// Import all Hero variants
import { Hero } from '@/components/Hero'
import { HeroOriginal } from '@/components/backup/HeroOriginal'
import { HeroSimple } from '@/components/backup/HeroSimple'
import { HeroGlassMorphism } from '@/components/backup/HeroGlassMorphism'

export type HeroVariant = 'current' | 'original' | 'simple' | 'glassmorphism'

interface HeroVariantInfo {
  key: HeroVariant
  name: string
  description: string
  component: React.ComponentType
  features: string[]
  icon: React.ComponentType<{ className?: string; size?: string | number }>
  color: string
}

const heroVariants: HeroVariantInfo[] = [
  {
    key: 'current',
    name: 'Current Hero',
    description: 'Advanced hero with accessibility, animations, and modern design',
    component: Hero,
    features: ['Accessibility Support', 'Advanced Animations', 'Mouse Parallax', 'Error Boundaries', 'Performance Optimized'],
    icon: Star,
    color: 'bg-gradient-to-r from-webcloudor-blue to-webcloudor-purple'
  },
  {
    key: 'glassmorphism',
    name: 'Glass Morphism',
    description: 'Modern glass effect with backdrop blur and floating elements',
    component: HeroGlassMorphism,
    features: ['Glass Morphism', 'Backdrop Blur', 'Floating Cards', 'Gradient Orbs', 'Interactive Elements'],
    icon: Sparkles,
    color: 'bg-gradient-to-r from-webcloudor-blue/20 via-webcloudor-purple/20 to-black'
  },
  {
    key: 'simple',
    name: 'Simple Brand',
    description: 'Clean design with brand colors but no complex animations',
    component: HeroSimple,
    features: ['Brand Colors', 'Clean Layout', 'Fast Loading', 'Simple Animations', 'Responsive'],
    icon: Palette,
    color: 'bg-gradient-to-r from-webcloudor-blue to-webcloudor-purple'
  },
  {
    key: 'original',
    name: 'Original',
    description: 'Basic hero component with minimal styling',
    component: HeroOriginal,
    features: ['Minimal Design', 'Basic Layout', 'Fast Performance', 'Simple Structure', 'Lightweight'],
    icon: Grid,
    color: 'bg-background'
  }
]

export function HeroShowcase() {
  const [selectedVariant, setSelectedVariant] = useState<HeroVariant>('current')
  const [previewMode, setPreviewMode] = useState<'cards' | 'full'>('cards')

  const SelectedComponent = heroVariants.find(v => v.key === selectedVariant)?.component || Hero

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50 dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-webcloudor-blue to-webcloudor-purple bg-clip-text text-transparent">
                Hero Component Showcase
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Compare and select your preferred hero design
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={previewMode === 'cards' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setPreviewMode('cards')}
              >
                <Grid className="h-4 w-4 mr-2" />
                Cards
              </Button>
              <Button
                variant={previewMode === 'full' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setPreviewMode('full')}
              >
                <Eye className="h-4 w-4 mr-2" />
                Full Preview
              </Button>
            </div>
          </div>
        </div>
      </div>

      {previewMode === 'cards' ? (
        /* Cards View */
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroVariants.map((variant) => {
              const IconComponent = variant.icon
              const isSelected = selectedVariant === variant.key
              
              return (
                <Card 
                  key={variant.key}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    isSelected 
                      ? 'ring-2 ring-webcloudor-blue shadow-xl scale-105' 
                      : 'hover:scale-102'
                  }`}
                  onClick={() => setSelectedVariant(variant.key)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-lg ${variant.color} flex items-center justify-center`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      {isSelected && (
                        <Badge className="bg-webcloudor-blue text-white">
                          Selected
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{variant.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {variant.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {variant.features.slice(0, 3).map((feature, index) => (
                            <Badge 
                              key={index} 
                              variant="secondary" 
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                          {variant.features.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{variant.features.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      {/* Mini Preview */}
                      <div className="h-20 overflow-hidden rounded border bg-gray-50 dark:bg-gray-800 relative">
                        <div className="absolute inset-0 scale-[0.15] origin-top-left transform-gpu">
                          <div className="w-[800px] h-[400px]">
                            <variant.component />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-gray-800/50" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Selected Component Details */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  Selected: {heroVariants.find(v => v.key === selectedVariant)?.name}
                </CardTitle>
                <CardDescription>
                  All features for this variant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {heroVariants.find(v => v.key === selectedVariant)?.features.map((feature, index) => (
                    <Badge key={index} className="bg-webcloudor-blue/10 text-webcloudor-blue border-webcloudor-blue/20">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <Button 
                    onClick={() => setPreviewMode('full')}
                    className="bg-webcloudor-blue hover:bg-webcloudor-blue/90"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Full Preview
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard.writeText(`<HeroTest variant="${selectedVariant}" />`)
                    }}
                  >
                    Copy Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        /* Full Preview */
        <div className="relative">
          {/* Preview Controls */}
          <div className="bg-white/90 backdrop-blur-sm border-b py-3 sticky top-16 z-40 dark:bg-gray-900/90">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Previewing:</span>
                  <div className="flex gap-2">
                    {heroVariants.map((variant) => (
                      <Button
                        key={variant.key}
                        variant={selectedVariant === variant.key ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedVariant(variant.key)}
                      >
                        {variant.name}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPreviewMode('cards')}
                >
                  ← Back to Cards
                </Button>
              </div>
            </div>
          </div>

          {/* Full Component Preview */}
          <div className="min-h-screen">
            <SelectedComponent />
          </div>
        </div>
      )}
    </div>
  )
}

export default HeroShowcase
