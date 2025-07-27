import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetail } from '@/components/services/ServiceDetail'
import { getServiceById, mockServices } from '@/lib/data/services'

interface ServicePageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return mockServices.map((service) => ({
    id: service.id,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { id } = await params
  const service = getServiceById(id)

  if (!service) {
    return {
      title: 'Service Not Found | Modern Agency',
    }
  }

  return {
    title: `${service.title} | Modern Agency Services`,
    description: service.shortDescription,
    openGraph: {
      title: service.title,
      description: service.shortDescription,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params
  const service = getServiceById(id)

  if (!service) {
    notFound()
  }

  return <ServiceDetail service={service} />
}