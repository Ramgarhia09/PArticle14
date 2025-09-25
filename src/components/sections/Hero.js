'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-purple-600/30 rounded-full filter blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 mt-20 sm:mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 sm:gap-3 bg-purple-600/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-12 text-sm sm:text-base"
          >
            <span className="bg-white text-purple-900 font-bold text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
              New
            </span>
            <span className="text-white font-medium">Automated Lead Generation</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-snug sm:leading-tight"
          >
            Intelligent Automation for{' '}
            <span className="block">Modern Businesses.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-md sm:max-w-2xl mx-auto leading-relaxed px-2"
          >
            Particle14 brings AI automation to your fingertips & streamline tasks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <a
              href="https://www.framer.com/?via=kanishkdubey&dub_id=KBINQyyX1cmMiWXf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </a>

            <a href="#services">
              <motion.button
                className="w-full sm:w-auto border border-gray-600 hover:border-gray-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg hover:bg-gray-800/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View services
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>

    
    </section>
  )
}

export default Hero
