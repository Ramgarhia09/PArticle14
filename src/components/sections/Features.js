'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Shield, BarChart3, Users, CheckCircle } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description: "Leverage machine learning algorithms to automate complex business processes with unprecedented accuracy."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Processing",
      description: "Process thousands of tasks simultaneously with our high-performance cloud infrastructure."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with industry standards."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Get deep insights into your operations with real-time analytics and predictive modeling."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools that keep your team synchronized across all workflows."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Built-in quality checks ensure 99.9% accuracy in all automated processes."
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how our intelligent automation platform can revolutionize your operations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features