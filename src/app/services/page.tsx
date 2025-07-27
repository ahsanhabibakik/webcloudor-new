import { Metadata } from 'next'
import { mockServices } from '@/lib/data'
import { ServiceCard } from '@/components/services/ServiceCard'
import { ProcessTimeline } from '@/components/services/ProcessTimeline'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { FadeIn } from '@/components/animations/FadeIn'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Modern Web Agency',
  description: 'Explore our comprehensive web development services including custom development, e-commerce solutions, UI/UX design, mobile development, and consulting.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              We offer comprehensive digital solutions to help your business thrive in the modern web landscape. 
              From custom development to strategic consulting, we have the expertise to bring your vision to life.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What We Do
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our comprehensive suite of services covers every aspect of modern web development and digital strategy.
              </p>
            </div>
          </ScrollReveal>

          <ErrorBoundary
            fallback={
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Services Temporarily Unavailable
                </h3>
                <p className="text-slate-600 mb-8">
                  Our services information is currently unavailable. Please contact us directly for details about our offerings.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockServices.map((service, index) => (
                <ScrollReveal key={service.id} delay={index * 0.1}>
                  <ServiceCard service={service} />
                </ScrollReveal>
              ))}
            </div>
          </ErrorBoundary>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure every project is delivered on time, 
                within budget, and exceeds expectations.
              </p>
            </div>
          </ScrollReveal>

          <ErrorBoundary
            fallback={
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  Process Information Unavailable
                </h3>
                <p className="text-slate-600 mb-8">
                  Our process timeline is temporarily unavailable. Contact us to learn more about our development methodology.
                </p>
                <Button asChild variant="outline">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            }
          >
            <ScrollReveal delay={0.2}>
              <ProcessTimeline />
            </ScrollReveal>
          </ErrorBoundary>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life. 
              Get in touch for a free consultation and project estimate.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}