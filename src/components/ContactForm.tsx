'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { contactFormSchema, type ContactFormInput } from '@/lib/validations'
import type { ContactFormData, ProjectCategory, BudgetRange } from '@/types'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { ZodError } from 'zod';

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>
}

interface FormErrors {
  [key: string]: string
}

const projectTypeOptions: { value: ProjectCategory; label: string }[] = [
  { value: 'web-app', label: 'Web Application' },
  { value: 'e-commerce', label: 'E-commerce Site' },
  { value: 'corporate', label: 'Corporate Website' },
  { value: 'mobile', label: 'Mobile App' },
]

const budgetOptions: { value: BudgetRange; label: string }[] = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-15k', label: '$5,000 - $15,000' },
  { value: '15k-50k', label: '$15,000 - $50,000' },
  { value: '50k-plus', label: '$50,000+' },
]

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    company: '',
    projectType: 'web-app',
    budget: 'under-5k',
    message: '',
    timeline: '',
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const validateField = (name: string, value: unknown) => {
    try {
      const fieldSchema = contactFormSchema.shape[name as keyof typeof contactFormSchema.shape]
      if (fieldSchema) {
        fieldSchema.parse(value)
        setErrors(prev => ({ ...prev, [name]: '' }))
      }
    } catch (error: unknown) {
      if (error instanceof ZodError && error.errors.length > 0) {
        const firstError = error.errors[0]
        if (firstError) {
          setErrors(prev => ({ ...prev, [name]: firstError.message }))
        }
      }
    }
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Real-time validation
    if (errors[name]) {
      validateField(name, value)
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear any existing error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Validate entire form
      const validationResult = contactFormSchema.safeParse(formData)
      
      if (!validationResult.success) {
        const fieldErrors: FormErrors = {}
        validationResult.error.errors.forEach((error) => {
          if (error.path[0]) {
            fieldErrors[error.path[0] as string] = error.message
          }
        })
        setErrors(fieldErrors)
        setIsSubmitting(false)
        return
      }

      // Clear any existing errors
      setErrors({})
      
      // Submit form with proper error handling
      if (onSubmit) {
        await onSubmit(validationResult.data)
      } else {
        // Default submission behavior (simulate API call with potential failure)
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate random network failures for testing
            if (Math.random() > 0.8 && process.env.NODE_ENV === 'development') {
              reject(new Error('Network error'))
            } else {
              resolve(undefined)
            }
          }, 2000)
        })
      }
      
      setSubmitStatus('success')
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.')
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'web-app',
        budget: 'under-5k',
        message: '',
        timeline: '',
      })
      
    } catch (error: unknown) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      
      // Provide specific error messages based on error type
      if (error instanceof Error) {
        if (error.message.includes('Network')) {
          setSubmitMessage('Network error. Please check your connection and try again.')
        } else if (error.message.includes('timeout')) {
          setSubmitMessage('Request timed out. Please try again.')
        } else {
          setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
        }
      } else {
        setSubmitMessage('An unexpected error occurred. Please try again later.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Get In Touch</CardTitle>
        <CardDescription>
          Tell us about your project and we&apos;ll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-2 text-green-800">
            <CheckCircle className="h-5 w-5" />
            <p>{submitMessage}</p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-800">
            <AlertCircle className="h-5 w-5" />
            <p>{submitMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onBlur={() => validateField('name', formData.name)}
                className={errors.name ? 'border-red-500' : ''}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onBlur={() => validateField('email', formData.email)}
                className={errors.email ? 'border-red-500' : ''}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              onBlur={() => validateField('company', formData.company)}
              className={errors.company ? 'border-red-500' : ''}
              placeholder="Your company name (optional)"
            />
            {errors.company && (
              <p className="text-sm text-red-600">{errors.company}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type *</Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => handleSelectChange('projectType', value)}
              >
                <SelectTrigger className={errors.projectType ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.projectType && (
                <p className="text-sm text-red-600">{errors.projectType}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range *</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleSelectChange('budget', value)}
              >
                <SelectTrigger className={errors.budget ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.budget && (
                <p className="text-sm text-red-600">{errors.budget}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Timeline *</Label>
            <Input
              id="timeline"
              type="text"
              value={formData.timeline}
              onChange={(e) => handleInputChange('timeline', e.target.value)}
              onBlur={() => validateField('timeline', formData.timeline)}
              className={errors.timeline ? 'border-red-500' : ''}
              placeholder="e.g., 2-3 months, ASAP, Flexible"
            />
            {errors.timeline && (
              <p className="text-sm text-red-600">{errors.timeline}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              onBlur={() => validateField('message', formData.message)}
              className={errors.message ? 'border-red-500' : ''}
              placeholder="Tell us about your project, goals, and any specific requirements..."
              rows={5}
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full"
            size="lg"
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
        </form>
      </CardContent>
    </Card>
  )
}