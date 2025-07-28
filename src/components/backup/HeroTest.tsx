'use client'

// Import all Hero variants
import { Hero } from '@/components/Hero' // Current active version
import { HeroOriginal } from '@/components/backup/HeroOriginal'
import { HeroSimple } from '@/components/backup/HeroSimple'
import { HeroGlassMorphism } from '@/components/backup/HeroGlassMorphism'

// Hero variant selector for testing
export type HeroVariant = 'current' | 'original' | 'simple' | 'glassmorphism'

interface HeroTestProps {
  variant?: HeroVariant
}

export function HeroTest({ variant = 'current' }: HeroTestProps) {
  switch (variant) {
    case 'original':
      return <HeroOriginal />
    case 'simple':
      return <HeroSimple />
    case 'glassmorphism':
      return <HeroGlassMorphism />
    case 'current':
    default:
      return <Hero />
  }
}

// Export all variants for easy access
export {
  Hero as HeroCurrent,
  HeroOriginal,
  HeroSimple,
  HeroGlassMorphism
}

// Usage example:
// To test different versions, simply change the variant prop:
// <HeroTest variant="simple" />
// <HeroTest variant="glassmorphism" />
// <HeroTest variant="original" />

export default HeroTest
