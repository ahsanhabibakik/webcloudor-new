'use client'

import { Service } from '@/types'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { 
  Code, 
  ShoppingCart, 
  Palette, 
  Smartphone, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface ServiceCardProps {
  service: Service
}

const iconMap = {
  code: Code,
  'shopping-cart': ShoppingCart,
  palette: Palette,
  smartphone: Smartphone,
  users: Users,
}

function ServiceCardContent({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code

  return (
    <Card 
      className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer border-webcloudor-primary/10 hover:border-webcloudor-primary/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-labelledby={`service-title-${service.id}`}
      tabIndex={0}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div 
            className="p-2 rounded-lg bg-webcloudor-primary/10 text-webcloudor-primary group-hover:bg-webcloudor-gradient group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-lg"
            aria-hidden="true"
          >
            <IconComponent size={24} />
          </div>
          <div className="flex-1">
            <CardTitle 
              id={`service-title-${service.id}`}
              className="text-xl group-hover:text-webcloudor-primary transition-colors duration-300"
            >
              {service.title}
            </CardTitle>
          </div>
        </div>
        <CardDescription 
          className="text-gray-600 leading-relaxed"
          aria-describedby={`service-title-${service.id}`}
        >
          {service.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="space-y-4">
          {/* Key Features */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
            <ul 
              className="space-y-1"
              role="list"
              aria-label={`Key features of ${service.title} service`}
            >
              {service.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle size={16} className="text-webcloudor-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
              {service.features.length > 4 && (
                <li className="text-sm text-gray-500 italic">
                  +{service.features.length - 4} more features
                </li>
              )}
            </ul>
          </div>

          {/* Pricing Preview */}
          {service.pricing && service.pricing.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Starting from:</h4>
              <div className="flex items-center gap-2">
                <span 
                  className="text-2xl font-bold bg-webcloudor-gradient bg-clip-text text-transparent"
                  aria-label={`Starting price: ${service.pricing[0]?.price.split(' - ')[0] || 'Contact for pricing'}`}
                >
                  {service.pricing[0]?.price.split(' - ')[0] || 'Contact us'}
                </span>
                {service.pricing.find(tier => tier.popular) && (
                  <Badge variant="secondary" className="text-xs bg-webcloudor-yellow/20 text-webcloudor-accent border-webcloudor-yellow/30">
                    Most Popular
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div 
          className="flex gap-2"
          role="group"
          aria-label={`Actions for ${service.title} service`}
        >
          <Button 
            asChild 
            variant="outline" 
            className="flex-1 group-hover:bg-webcloudor-primary group-hover:text-white group-hover:border-webcloudor-primary transition-all duration-300"
            size="sm"
          >
            <Link 
              href={`/services/${service.id}`}
              className="flex items-center justify-center gap-2"
              aria-label={`Learn more about ${service.title} service`}
            >
              Learn More
            </Link>
          </Button>
          <Button 
            asChild 
            size="sm"
            className="flex-1"
          >
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2"
              aria-label={`Get quote for ${service.title} service`}
            >
              Get Quote
              <ArrowRight 
                size={16} 
                className={`transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`}
                aria-hidden="true"
              />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <ErrorBoundary
      fallback={
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-xl">Service Unavailable</CardTitle>
            <CardDescription>
              This service information is temporarily unavailable.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Please try refreshing the page or contact us for more information.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardFooter>
        </Card>
      }
    >
      <ServiceCardContent service={service} />
    </ErrorBoundary>
  )
}