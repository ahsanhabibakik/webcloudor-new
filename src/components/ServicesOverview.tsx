'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/button'
import { getFeaturedServices } from '@/lib/data/services'
import Link from 'next/link'
import { 
  Code, 
  ShoppingCart, 
  Palette, 
  Smartphone, 
  Users,
  ArrowRight
} from 'lucide-react'

const iconMap = {
  code: Code,
  'shopping-cart': ShoppingCart,
  palette: Palette,
  smartphone: Smartphone,
  users: Users
}

export function ServicesOverview() {
  const featuredServices = getFeaturedServices(3)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive 
              in the modern digital landscape.
            </p>
          </ScrollReveal>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code
              
              return (
                <ScrollReveal 
                  key={service.id} 
                  delay={index * 0.2}
                  className="group"
                >
                  <div className="bg-card border rounded-lg p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                    {/* Service Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Service Content */}
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Key Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <Link 
                      href={`/services#${service.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Call to Action */}
          <ScrollReveal delay={0.6} className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}