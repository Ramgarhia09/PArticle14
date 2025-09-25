import ServiceDetail from '@/components/sections/ServiceDetail'

// Metadata for SEO
export async function generateMetadata({ params }) {
  const serviceNames = {
    'web-development': 'Web Development Services | Responsive & SEO-Friendly',
    'ai-ml': 'AI & Machine Learning Solutions for Businesses', 
    'cybersecurity': 'Cybersecurity Services & Penetration Testing',
    'mobile-development': 'Mobile App Development | Native & Cross-Platform',
    'digital-marketing': 'Digital Marketing Agency Services',
    'video-editing': 'Video Editing & Creative Media Services'
  }

  const title = serviceNames[params.serviceType] || 'Our Services'

  return {
    title: `${title} | Particle14`,
    description: `Professional ${title.toLowerCase()} in India. Get expert solutions tailored for your business needs.`,
  }
}

// Generate static params for all service types
export async function generateStaticParams() {
  return [
    { serviceType: 'web-development' },
    { serviceType: 'ai-ml' },
    { serviceType: 'cybersecurity' },
    { serviceType: 'mobile-development' },
    { serviceType: 'digital-marketing' },
    { serviceType: 'video-editing' }
  ]
}

export default function ServicePage({ params }) {
  return <ServiceDetail serviceType={params.serviceType} />
}