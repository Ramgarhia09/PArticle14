'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  const testimonials = [
    {
      quote: "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
      name: "James Carter",
      role: "CEO at TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      quote: "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
      name: "Sophia Martinez", 
      role: "Operations Manager at NexaCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      company: "NexaCorp",
      rating: 5
    },
    {
      quote: "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
      name: "David Reynolds",
      role: "Head of Sales at GrowthPeak", 
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      company: "GrowthPeak",
      rating: 5
    },
    {
      quote: "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to Xtract.",
      name: "Emily Wong",
      role: "Customer Success Lead at SupportHive",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      company: "SupportHive",
      rating: 5
    }
  ]

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length]) // ✅ added dependency

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-lg text-purple-400 font-medium mb-4">Testimonials</h2>
          <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Why Businesses Love Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real businesses, real results with AI automation.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500 to-transparent rounded-bl-full" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* Quote Icon */}
                <Quote className="text-purple-400 w-12 h-12 mx-auto mb-8" />

                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-2xl lg:text-3xl text-white mb-8 leading-relaxed text-center font-light">
                  &quot;{testimonials[activeTestimonial].quote}&quot; {/* ✅ fixed quotes */}
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[activeTestimonial].role}
                    </div>
                    <div className="text-purple-400 text-sm">
                      {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 rounded-full p-3 transition-colors group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 rounded-full p-3 transition-colors group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-purple-600 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="hidden lg:grid grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gray-800/30 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer ${
                index === activeTestimonial ? 'border-purple-500/50 bg-gray-800/50' : ''
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="text-purple-400/50 w-6 h-6" />
              </div>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                &quot;{testimonial.quote}&quot; {/* ✅ fixed quotes */}
              </p>
              
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-white font-medium text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-4">
              Join 10,000+ Happy Customers
            </h4>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">4.9/5</div>
                <div className="text-gray-400 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">10k+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">99%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
