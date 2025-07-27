import { Metadata } from 'next'
import { ContactPageClient } from '@/components/contact/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us - Modern Web Agency',
  description: 'Get in touch with our web development team. We\'re here to help bring your digital vision to life with professional web development services.',
}

export default function ContactPage() {
  return <ContactPageClient />
}