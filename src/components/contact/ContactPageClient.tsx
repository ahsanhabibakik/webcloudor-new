'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { faqs } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown, MessageSquare, Users, Clock } from 'lucide-react'
import { useState } from 'react'
import type { ContactFormData } from '@/types'

export function ContactPageClient() {
  const handleFormSubmit = async (data: ContactFormData) => {
    // In a real application, this would send the data to your backend
    console.log('Form submitted:', data)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Get In Touch
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can help bring your vision to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants}>
                <ContactInfo />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ContactForm onSubmit={handleFormSubmit} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What Happens Next?
              </h2>
              <p className="text-lg text-slate-600">
                Here's our simple process to get your project started
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageSquare,
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'We discuss your project requirements, goals, and timeline to understand your vision.'
                },
                {
                  icon: Users,
                  step: '02',
                  title: 'Proposal & Planning',
                  description: 'We create a detailed proposal with project scope, timeline, and transparent pricing.'
                },
                {
                  icon: Clock,
                  step: '03',
                  title: 'Project Kickoff',
                  description: 'Once approved, we begin development with regular updates and milestone reviews.'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Quick answers to common questions about our services and process
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <FAQSection faqs={faqs} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function FAQSection({ faqs }: { faqs: typeof import('@/lib/data').faqs }) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <Card key={faq.id} className="border border-slate-200">
          <Collapsible>
            <CollapsibleTrigger
              onClick={() => toggleItem(faq.id)}
              className="w-full"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 hover:bg-slate-50 transition-colors">
                <CardTitle className="text-left text-lg font-semibold text-slate-900">
                  {faq.question}
                </CardTitle>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-500 transition-transform ${
                    openItems.includes(faq.id) ? 'rotate-180' : ''
                  }`} 
                />
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="pt-0">
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      ))}
    </div>
  )
}