'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'

const CaseStudies = () => {
  const cases = [
    {
      quote: "AI-driven forecasting cut inventory waste by 40% for TrailForge",
      description: "TrailForge, a suitcase brand, faced stock issues and inefficiencies. Our AI forecasting optimized inventory and production cycles, helping them save costs and deliver faster.",
      impact: ["40% Less Inventory Waste", "35% Faster Production", "20% More Accurate Forecasting", "25% Faster Fulfillment"],
      company: "TrailForge",
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop"
    },
    {
      quote: "AI-powered workflows reduced error rate by 80% in daily operations", 
      description: "MedixChain, a healthcare logistics company, was dealing with frequent data errors and delays. We introduced AI validation and live tracking to improve accuracy and speed across their supply chain.",
      impact: ["80% Error reduction", "90% Accuracy in Data Logs", "30% Faster Delivery", "60+ Hours Saved"],
      company: "MedixChain",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      quote: "Automating 50% of operations saved 20% in costs within 2 months",
      description: "FinSolve, a financial services firm, was overloaded with repetitive admin tasks. By automating internal workflows and integrating data systems, they streamlined operations and reduced overhead.",
      impact: ["50% Operations Automated", "20% Cost Reduction", "70+ Hours Saved/Month", "2x Faster Client Onboarding"],
      company: "FinSolve",
      industry: "Financial Services",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
    },
    {
      quote: "AI integration helped ScaleByte close 3x more deals in less time",
      description: "ScaleByte's sales team struggled with follow-up delays. Our AI sales assistant automated outreach, lead scoring, and CRM updates—resulting in faster responses and more closed deals.",
      impact: ["3x More Deals", "40% Faster Responses", "95% Lead Accuracy", "CRM Fully Synced"],
      company: "ScaleByte",
      industry: "Technology",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section id="cases" className="py-12 sm:py-16 bg-gray-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-base sm:text-lg text-purple-400 font-medium mb-3 sm:mb-4">Case Studies</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            See How Smart AI Automation{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Transforms Businesses
            </span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            See how AI automation streamlines operations, boosts efficiency and drives growth.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Case Studies */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 sm:gap-6 pb-6">
            {cases.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-w-[280px] sm:min-w-[400px] max-w-[90vw] bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 snap-center"
              >
                {/* Image */}
                <div className="relative h-32 sm:h-48 overflow-hidden">
                  <Image
                    src={caseStudy.image}
                    alt={`${caseStudy.company} case study`}
                    fill
                    className="object-cover rounded-t-xl sm:rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1">
                      <div className="text-white font-semibold text-xs sm:text-sm">{caseStudy.company}</div>
                      <div className="text-gray-300 text-[10px] sm:text-xs">{caseStudy.industry}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <Quote className="text-purple-400 w-5 h-5 sm:w-6 sm:h-6 mb-3 sm:mb-4" />
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    {caseStudy.quote}
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm">
                    {caseStudy.description}
                  </p>
                  
                  <div>
                    <h5 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Impact:</h5>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {caseStudy.impact.map((item, i) => {
                        const [metric, ...description] = item.split(' ')
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="text-center p-2 sm:p-3 bg-gray-700/30 rounded-lg"
                          >
                            <div className="text-purple-400 font-bold text-sm sm:text-base md:text-lg">{metric}</div>
                            <div className="text-gray-400 text-[10px] sm:text-xs">{description.join(' ')}</div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Drag to explore indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-6 sm:mt-8"
          >
            <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 sm:px-6 py-1.5 sm:py-2">
              <span className="text-gray-400 text-xs sm:text-sm font-medium">DRAG TO EXPLORE</span>
            </div>
          </motion.div>
        </div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "50M+", label: "Tasks Automated" },
              { number: "85%", label: "Average Efficiency Gain" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies