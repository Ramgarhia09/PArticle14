'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Users, Clock, TrendingUp, Eye, Zap } from 'lucide-react'

const About = () => {
  const [openFAQ, setOpenFAQ] = useState(-1)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  // Logo sliding animation variants
  const logoSlideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  }

  // Continuous carousel animation for logos
  const carouselVariants = {
    animate: {
      x: [0, -100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "linear",
        },
      },
    },
  }

  const faqs = [
    {
      question: "How can AI automation help my business?",
      answer: "AI automation streamlines operations, reduces costs, and improves efficiency by handling repetitive tasks automatically."
    },
    {
      question: "Is AI automation difficult to integrate?",
      answer: "Our team makes integration seamless with comprehensive support and training throughout the process."
    },
    {
      question: "How much time can I expect to save with automation?",
      answer: "Most businesses see 40-80% time savings on automated processes, allowing teams to focus on strategic work."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 support, training, ongoing optimization, and dedicated account management for all clients."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index)
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-purple-600/20 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 mt-12 sm:mt-16 lg:mt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2 sm:px-6 mb-8 sm:mb-12 lg:mb-16"
            >
              <span className="text-white font-medium text-sm sm:text-base">About Us</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-6 sm:mb-8 lg:mb-12 leading-tight px-2"
            >
              Helping Businesses Grow
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-400 mb-12 sm:mb-16 lg:mb-24 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Particle14 helps businesses streamline operations.
            </motion.p>

            {/* Trust Section */}
            <motion.div variants={itemVariants}>
              <p className="text-white font-medium mb-6 sm:mb-8 lg:mb-12 text-sm sm:text-base lg:text-lg">
                Over 50+ businesses trust us
              </p>
              
              {/* Company Logos with Continuous Carousel Animation */}
              <div className="relative overflow-hidden mb-12 sm:mb-16 lg:mb-20 w-full">
                <motion.div 
                  variants={carouselVariants}
                  animate="animate"
                  className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 opacity-50 whitespace-nowrap"
                  style={{ width: 'calc(200% + 100px)' }}
                >
                  {/* First set of logos */}
                  <motion.div
                    custom={0}
                    variants={logoSlideVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl font-medium flex-shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full" />
                    </div>
                    <span>Logoipsum</span>
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={logoSlideVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl font-medium flex-shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm" />
                    </div>
                    <span>Logoipsum</span>
                  </motion.div>

                  <motion.div
                    custom={2}
                    variants={logoSlideVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-2 sm:gap-3 text-gray-500 text-sm sm:text-base lg:text-lg xl:text-xl font-medium flex-shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">✦</span>
                    </div>
                    <span>Logoipsum</span>
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={logoSlideVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl font-medium flex-shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full" />
                    </div>
                    <span>Logoipsum</span>
                  </motion.div>

                  <motion.div
                    custom={4}
                    variants={logoSlideVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl font-medium flex-shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">▲</span>
                    </div>
                    <span>Logoipsum</span>
                  </motion.div>

                  {/* Duplicate set for seamless loop */}
                  <motion.div
                    className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl font-medium flex-shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full" />
                    </div>
                    <span>Logoipsum</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl font-medium flex-shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm" />
                    </div>
                    <span>Logoipsum</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-2 sm:gap-3 text-gray-500 text-sm sm:text-base lg:text-lg xl:text-xl font-medium flex-shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">✦</span>
                    </div>
                    <span>Logoipsum</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl font-medium flex-shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full" />
                    </div>
                    <span>Logoipsum</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base lg:text-lg xl:text-xl font-medium flex-shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">▲</span>
                    </div>
                    <span>Logoipsum</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed px-2">
              Particle14 is a team of innovative engineers and AI technology enthusiasts 
              dedicated to transforming businesses through intelligent automation. 
              We believe that every business, no matter how big or small, should have 
              access to smart solutions.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                <span className="text-2xl sm:text-3xl font-bold text-white">150+</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Businesses</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Companies have streamlined operations with Particle14 AI solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                <span className="text-2xl sm:text-3xl font-bold text-white">10+ Hours</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Hours</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Average manual work time eliminated weekly through automation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8">
              Our Vision
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">
              The Values Behind Particle14
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed px-2">
              We create intelligent, efficient, and scalable AI solutions and automate 
              common manual tasks for companies that want to focus on building and 
              growing their business core.
            </p>
          </motion.div>

          {/* Values */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4 sm:gap-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Driving Innovation Forward
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  We constantly push the boundaries of what&apos;s possible with AI technology, 
                  creating cutting-edge automation solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4 sm:gap-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Committed to Integrity &amp; Trust
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  We build transparent, secure, and reliable solutions that businesses 
                  can depend on for their most critical operations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 sm:gap-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                  Designed for Efficiency
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  Our automations are built with speed, scalability, and user experience in mind, 
                  helping businesses achieve more with less effort.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
              We&apos;ve Got the Answers You&apos;re Looking For
            </h2>
            <p className="text-base sm:text-lg text-gray-400">
              Find the information you need quickly with our FAQs.
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                >
                  <span className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  )}
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 sm:px-6 pb-4 sm:pb-6"
                    >
                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
