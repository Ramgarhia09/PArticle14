'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  BarChart3, 
  Zap 
} from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      title: "Increased Productivity",
      description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      stats: "300% faster task completion"
    },
    {
      title: "Better Customer Experience", 
      description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      stats: "95% customer satisfaction rate"
    },
    {
      title: "24/7 Availability",
      description: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
      icon: <Clock className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      stats: "99.9% uptime guarantee"
    },
    {
      title: "Cost Reduction",
      description: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      stats: "Average 40% cost savings"
    },
    {
      title: "Data-Driven Insights",
      description: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600",
      stats: "Real-time analytics & reporting"
    },
    {
      title: "Scalability & Growth",
      description: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      stats: "Unlimited scaling potential"
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-lg text-purple-400 font-medium mb-4">Benefits</h2>
          <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            The Key Benefits of AI for Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Business Growth
            </span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${benefit.color}`} />
              
              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-white">
                  {benefit.icon}
                </div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Stats */}
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${benefit.color} bg-opacity-10 rounded-full`}>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.stats}
                  </span>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.color} p-[1px]`}>
                  <div className="w-full h-full bg-gray-800/90 rounded-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
        
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits