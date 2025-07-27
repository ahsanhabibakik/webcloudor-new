'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { contactInfo } from '@/lib/data'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: contactInfo.email,
    description: 'Send us an email anytime',
    href: `mailto:${contactInfo.email}`,
    color: 'text-blue-600'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: contactInfo.phone,
    description: 'Call us during business hours',
    href: `tel:${contactInfo.phone}`,
    color: 'text-green-600'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: `${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zip}`,
    description: 'Visit our office',
    href: `https://maps.google.com/?q=${encodeURIComponent(`${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zip}`)}`,
    color: 'text-red-600'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: contactInfo.hours.weekdays,
    description: contactInfo.hours.weekends,
    color: 'text-purple-600'
  }
]

export function ContactInfo() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-blue-600" />
          Contact Information
        </CardTitle>
        <CardDescription>
          Reach out to us through any of these channels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              variants={itemVariants}
              className="group"
            >
              {method.href ? (
                <a
                  href={method.href}
                  target={method.title === 'Address' ? '_blank' : undefined}
                  rel={method.title === 'Address' ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-white transition-colors`}>
                    <method.icon className={`w-5 h-5 ${method.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-slate-700 font-medium mb-1 break-words">
                      {method.value}
                    </p>
                    <p className="text-sm text-slate-500">
                      {method.description}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center`}>
                    <method.icon className={`w-5 h-5 ${method.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-slate-700 font-medium mb-1">
                      {method.value}
                    </p>
                    <p className="text-sm text-slate-500">
                      {method.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="pt-6 border-t border-slate-200">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">
                Quick Response Guarantee
              </h4>
              <p className="text-sm text-blue-800">
                We typically respond to all inquiries within 2-4 hours during business hours. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  )
}