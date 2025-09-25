'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {  Plus, Minus, Users, Clock, TrendingUp, Eye, Zap } from 'lucide-react'

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
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/20 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-2 mb-16"
            >
              <span className="text-white font-medium">About Us</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl lg:text-8xl xl:text-9xl font-bold text-white mb-12 leading-tight"
            >
              Helping Businesses Grow
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-gray-400 mb-24 max-w-4xl mx-auto leading-relaxed"
            >
              Particle14 helps businesses streamline operations and grow faster with AI-powered automation.
            </motion.p>

            {/* Trust Section */}
            <motion.div variants={itemVariants}>
              <p className="text-white font-medium mb-12 text-lg">
                Over 50+ businesses trust us
              </p>
              
              {/* Company Logos - Added responsive gap for smaller screens */}
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 mb-20">
                <div className="text-gray-500 text-xl font-medium"></div>
                <div className="flex items-center gap-3 text-gray-400 text-xl font-medium">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  <span>Logoipsum</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-xl font-medium">
                  <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm" />
                  </div>
                  <span>Logoipsum</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500 text-xl font-medium">
                  <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">✦</span>
                  </div>
                  <span>Logoipsum</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Who We Are
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Particle14 is a team of innovative engineers and AI technology enthusiasts 
              dedicated to transforming businesses through intelligent automation. 
              We believe that every business, no matter how big or small, should have 
              access to smart solutions.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-purple-400" />
                <span className="text-3xl font-bold text-white">150+</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Businesses</h3>
              <p className="text-gray-400">
                Companies have streamlined operations with Particle14 AI solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-blue-400" />
                <span className="text-3xl font-bold text-white">10+ Hours</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
              <p className="text-gray-400">
                Average manual work time eliminated weekly through automation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Our Vision
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              The Values Behind Particle14
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed">
              We create intelligent, efficient, and scalable AI solutions and automate 
              common manual tasks for companies that want to focus on building and 
              growing their business core.
            </p>
          </motion.div>

          {/* Values */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Driving Innovation Forward
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We constantly push the boundaries of what&apos;s possible with AI technology, 
                  creating cutting-edge automation solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Committed to Integrity & Trust
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We build transparent, secure, and reliable solutions that businesses 
                  can depend on for their most critical operations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Empowering Business Growth
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We help businesses scale with smart efficiency, reducing manual tasks and 
                  optimizing operations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              We&apos;ve Got the Answers You&apos;re Looking For
            </h2>
            <p className="text-xl text-gray-400">
              Quick answers to your AI automation questions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                >
                  <span className="text-white font-semibold text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFAQ === index ? (
                      <Minus className="w-6 h-6 text-purple-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-700/50 pt-6">
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      </div>
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
