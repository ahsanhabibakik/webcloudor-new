'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useScreenReaderAnnouncement } from '@/hooks/useKeyboardNavigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import type { ContactFormData } from '@/types'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  projectType: z.enum(['web-app', 'e-commerce', 'corporate', 'mobile'], {
    required_error: 'Please select a project type'
  }),
  budget: z.enum(['under-5k', '5k-15k', '15k-50k', '50k-plus'], {
    required_error: 'Please select a budget range'
  }),
  timeline: z.string().min(1, 'Please specify your timeline'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type ContactFormValues = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const { announce } = useScreenReaderAnnouncement()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isValid }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange'
  })

  const projectType = watch('projectType')
  const budget = watch('budget')

  const handleFormSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      if (onSubmit) {
        await onSubmit(data as ContactFormData)
      }
      
      setSubmitStatus('success')
      announce('Form submitted successfully! We will get back to you within 24 hours.', 'assertive')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      setErrorMessage(message)
      announce(`Error: ${message}`, 'assertive')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send us a message</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.form
          variants={formVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-6"
        >
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div variants={fieldVariants} className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Your full name"
                className={errors.name ? 'border-red-500' : ''}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-600" role="alert">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            <motion.div variants={fieldVariants} className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="your.email@company.com"
                className={errors.email ? 'border-red-500' : ''}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-600" role="alert">
                  {errors.email.message}
                </p>
              )}
            </motion.div>
          </div>

          {/* Company */}
          <motion.div variants={fieldVariants} className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              {...register('company')}
              placeholder="Your company name (optional)"
            />
          </motion.div>

          {/* Project Type and Budget Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div variants={fieldVariants} className="space-y-2">
              <Label>Project Type *</Label>
              <Select onValueChange={(value) => setValue('projectType', value as any)}>
                <SelectTrigger className={errors.projectType ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-app">Web Application</SelectItem>
                  <SelectItem value="e-commerce">E-commerce</SelectItem>
                  <SelectItem value="corporate">Corporate Website</SelectItem>
                  <SelectItem value="mobile">Mobile App</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && (
                <p className="text-sm text-red-600">{errors.projectType.message}</p>
              )}
            </motion.div>

            <motion.div variants={fieldVariants} className="space-y-2">
              <Label>Budget Range *</Label>
              <Select onValueChange={(value) => setValue('budget', value as any)}>
                <SelectTrigger className={errors.budget ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">Under $5,000</SelectItem>
                  <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                  <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                  <SelectItem value="50k-plus">$50,000+</SelectItem>
                </SelectContent>
              </Select>
              {errors.budget && (
                <p className="text-sm text-red-600">{errors.budget.message}</p>
              )}
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div variants={fieldVariants} className="space-y-2">
            <Label htmlFor="timeline">Timeline *</Label>
            <Input
              id="timeline"
              {...register('timeline')}
              placeholder="e.g., 3 months, ASAP, Q2 2024"
              className={errors.timeline ? 'border-red-500' : ''}
            />
            {errors.timeline && (
              <p className="text-sm text-red-600">{errors.timeline.message}</p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div variants={fieldVariants} className="space-y-2">
            <Label htmlFor="message">Project Details *</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Tell us about your project, goals, and any specific requirements..."
              rows={5}
              className={errors.message ? 'border-red-500' : ''}
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message.message}</p>
            )}
          </motion.div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Thank you for your message! We'll get back to you within 24 hours.
              </AlertDescription>
            </Alert>
          )}

          {submitStatus === 'error' && (
            <Alert className="border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                {errorMessage}
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <motion.div variants={fieldVariants}>
            <Button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </motion.div>
        </motion.form>
      </CardContent>
    </Card>
  )
}