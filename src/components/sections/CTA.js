'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Calendar } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300 font-medium">Ready to Transform Your Business?</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Let AI do the Work so{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              you can Scale Faster
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of businesses already using AI automation to reduce costs, 
            increase efficiency, and accelerate growth. Start your transformation today.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto"
          >
            {[
              { number: "10,000+", label: "Businesses Trust Us" },
              { number: "85%", label: "Average Efficiency Gain" },
              { number: "40%", label: "Cost Reduction" },
              { number: "2-4 weeks", label: "Implementation Time" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
         <a
  href="https://www.framer.com/?via=kanishkdubey&dub_id=KBINQyyX1cmMiWXf"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2 transition-all min-w-[250px] justify-center"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)"
    }}
    whileTap={{ scale: 0.95 }}
  >
    <Calendar className="w-5 h-5" />
    Book a Call Today
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </motion.button>
</a>

            
            
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-500 mb-6 text-sm">
              ✓ No credit card required  •  ✓ 30-day money-back guarantee  •  ✓ Setup in 24 hours
            </p>
            
            {/* Company Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
              {['Microsoft', 'Google', 'Amazon', 'Tesla', 'Apple'].map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-xl font-bold text-gray-600 hover:text-gray-400 transition-colors cursor-pointer"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        />
      </div>
    </section>
  )
}

export default CTA