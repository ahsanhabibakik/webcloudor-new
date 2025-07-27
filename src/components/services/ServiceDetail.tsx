'use client'

import Link from 'next/link'
import { ArrowLeft, CheckCircle, Clock, DollarSign, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { FadeIn } from '@/components/animations/FadeIn'
import type { Service } from '@/types'

interface ServiceDetailProps {
  service: Service
}

function ServiceDetailContent({ service }: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/services">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>

        {/* Service Header */}
        <div className="mb-12">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {service.title}
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl">
              {service.shortDescription}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  View Examples
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Service Description */}
            <ScrollReveal>
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  About This Service
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.longDescription}
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* Features */}
            <ScrollReveal delay={0.2}>
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* Process */}
            <ScrollReveal delay={0.4}>
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Our Process
                </h2>
                <div className="space-y-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            {step.duration}
                          </div>
                        </div>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Pricing */}
            {service.pricing && service.pricing.length > 0 && (
              <ScrollReveal delay={0.6}>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Pricing Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {service.pricing.map((tier) => (
                      <div 
                        key={tier.name} 
                        className={`p-4 rounded-lg border ${
                          tier.popular 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">
                            {tier.name}
                          </h4>
                          {tier.popular && (
                            <Badge className="bg-blue-600">
                              <Star className="h-3 w-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-2xl font-bold text-blue-600 mb-3">
                          {tier.price}
                        </p>
                        <ul className="space-y-2">
                          {tier.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>
            )}

            {/* CTA Card */}
            <ScrollReveal delay={0.8}>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Let&apos;s discuss your project and how we can help bring your vision to life.
                    We&apos;d love to hear about your project and explore how we can collaborate.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Start Your Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-screen bg-white">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <Link href="/services">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Services
                </Button>
              </Link>
            </div>
            <div className="text-center py-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Service Unavailable
              </h1>
              <p className="text-gray-600 mb-8">
                This service doesn&apos;t exist or couldn&apos;t be loaded.
              </p>
              <Link href="/services">
                <Button>View All Services</Button>
              </Link>
            </div>
          </div>
        </div>
      }
    >
      <ServiceDetailContent service={service} />
    </ErrorBoundary>
  )
}