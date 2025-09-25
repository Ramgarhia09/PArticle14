'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowRight, Users, Shield, Zap, BarChart3, Video, Globe } from 'lucide-react'

const ServicesPage = () => {
  const router = useRouter()

  const services = [
    {
      id: 'ai-ml',
      icon: <Users className="w-6 h-6" />,
      title: "AI & Machine Learning Solutions for Businesses in India",
      description: "AI & Machine Learning services, including comprehensive analytics, model development, deployment, and automated operations and machine learning solutions.",
      tags: ["Artificial Development", "Researching", "AI-Tools"],
      features: ["Tools & Models", "Example Use Cases"],
      buttonText: "Learn More About AI & ML"
    },
    {
      id: 'cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity Services & Penetration Testing in India",
      description: "Comprehensive cybersecurity services including red team testing, VAPT, vulnerability scanning, GRC and incident response for Indian businesses.",
      tags: ["API Cyber Security Testing", "VAPT"],
      features: ["Tools & Models", "Example Use Cases"],
      buttonText: "Learn More About Security"
    },
    {
      id: 'web-development',
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development Services | Responsive & SEO-Friendly Websites",
      description: "Custom web development services in India including responsive design, UI/UX optimization, CMS, and scalable backend solutions for startups and enterprises.",
      tags: ["Web & Business", "Design Development"],
      features: ["Tools & Models", "Example Use Cases"],
      buttonText: "Learn More About Web Dev"
    },
    {
      id: 'mobile-development',
      icon: <Zap className="w-6 h-6" />,
      title: "Mobile App Development | Native & Cross-Platform Apps",
      description: "Mobile app development services using Flutter, React Native, Swift, and Kotlin. Expert app development for startups, business apps in India.",
      tags: ["Mobile", "Smart Agency"],
      features: ["Tools & Models", "Example Use Cases"],
      buttonText: "Learn More About Mobile"
    },
    {
      id: 'digital-marketing',
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Digital Marketing Agency Services in India",
      description: "Full-service digital marketing firm providing SEO, social media marketing, PPC, email marketing, content marketing, and online advertising campaigns.",
      tags: ["Google Ads", "Meta Ads", "Social Media Management"],
      features: ["Tools & Models", "Example Use Cases"],
      buttonText: "Learn More"
    },
    {
      id: 'video-editing',
      icon: <Video className="w-6 h-6" />,
      title: "Video Editing & Creative Media Services in India",
      description: "Professional video editing and creative media services for ads, corporate videos, social media content, and marketing materials.",
      tags: ["Video Content Pre-Editing", "After Effects Animation", "Creative and Logo Editing"],
      features: ["Tools & Models", "Example Use Cases"],
      buttonText: "Learn More"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  }

  const handleServiceClick = (serviceId) => {
    router.push(`/services/${serviceId}`)
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <motion.button
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white text-sm font-medium mb-12 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Home
            </motion.button>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
              Our Services
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-gray-900/70 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <div className="text-blue-400">{service.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-800/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-gray-400 text-sm mb-2"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={() => handleServiceClick(service.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {service.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
