'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Globe, CheckCircle, Linkedin, Github, Twitter, Youtube, Instagram, Facebook } from 'lucide-react'
import Link from 'next/link'

const ServiceDetail = ({ serviceType = 'web-development' }) => {
  const router = useRouter()
  // Service data - you can expand this for different services
  const serviceData = {
    'web-development': {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development Services | Responsive & SEO-Friendly Websites",
      description: "Custom web development services in India including responsive design, SEO-friendly sites, PWAs, and scalable backend solutions for startups and enterprises.",
      technologies: [
        "React Web Development",
        "Node.js Backend",
        "Django Framework",
        "Next.js"
      ],
      subservices: [
        "Responsive Website Design (UI/UX Focused)",
        "Custom Web Application Development",
        "E-commerce Development & Optimization",
        "SEO-friendly Web Development",
        "Frontend & Backend Integration"
      ]
    },
    'ai-ml': {
      icon: <Globe className="w-6 h-6" />,
      title: "AI & Machine Learning Solutions for Businesses",
      description: "Advanced AI & ML services including predictive analytics, automation, and intelligent systems for modern businesses.",
      technologies: [
        "Python Machine Learning",
        "TensorFlow",
        "PyTorch",
        "AI Model Development"
      ],
      subservices: [
        "Custom AI Model Development",
        "Machine Learning Integration",
        "Predictive Analytics Solutions",
        "AI Automation Systems",
        "Data Science Consulting"
      ]
    }
  }

  const service = serviceData[serviceType] || serviceData['web-development']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Github className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Facebook className="w-5 h-5" />, href: "#" }
  ]

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">P14</span>
              </div>
              <span className="text-white text-xl font-bold">Particle14</span>
            </div>
            
            <button className="p-2 text-white">
              <div className="w-6 h-6 grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <motion.button
            onClick={() => router.push('/services')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white font-medium transition-all mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </motion.button>
        </div>
      </section>

      {/* Service Header */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Icon */}
            <motion.div
              variants={itemVariants}
              className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-8"
            >
              <div className="text-blue-400">
                {service.icon}
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
            >
              {service.title}
            </motion.h1>

            {/* Main Description */}
            <motion.div
              variants={itemVariants}
              className="bg-blue-600/10 backdrop-blur-sm border border-blue-600/20 rounded-2xl p-8 mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-400 mb-6">
                Web Development Services | Responsive & SEO-Friendly Websites
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technologies Used:</h3>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-600/20 border border-blue-600/30 text-blue-300 px-4 py-2 rounded-full font-medium hover:bg-blue-600/30 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subservices */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Subservices:</h3>
            <div className="space-y-4">
              {service.subservices.map((subservice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">{subservice}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
           <Link href="/contact" passHref>
  <motion.button
    className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-3 mx-auto transition-all"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Get Started With This Service
    <ArrowRight className="w-5 h-5" />
  </motion.button>
</Link>
          </motion.div>
        </div>
      </section>

      

     

    
    </div>
  )
}

export default ServiceDetail
