'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// This is the original simple Hero component before our design transformation
export function HeroOriginal() {
  return (
    <section className="bg-background py-32 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-6">We Create Digital Excellence</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your trusted partner in web development, cloud solutions, and digital transformation.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroOriginal
