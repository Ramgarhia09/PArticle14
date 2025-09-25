'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Star } from 'lucide-react'

const Pricing = () => {
  const [pricingToggle, setPricingToggle] = useState('monthly')

  const plans = [
    {  
      name: "Starter",
      price: { monthly: 37, annually: 30 },
      description: "Perfect for small businesses starting with AI automation.",
      features: [
        "Basic workflow automation",
        "AI-powered personal assistant", 
        "Standard analytics & reporting",
        "Email & chat support",
        "Up to 3 AI integrations"
      ],
      popular: false,
      buttonText: "Get Started",
      link: "https://example.com/starter"
    },
    {
      name: "Professional",
      price: { monthly: 75, annually: 60 },
      description: "Ideal for growing companies scaling their operations.",
      features: [
        "Advanced workflow automation",
        "AI-driven sales & marketing tools",
        "Enhanced data analytics & insights", 
        "Priority customer support",
        "Up to 10 AI integrations"
      ],
      popular: true,
      buttonText: "Get Started",
      link: "https://example.com/pro"
    },
    {
      name: "Enterprise", 
      price: { monthly: "Custom", annually: "Custom" },
      description: "For large organizations with complex requirements.",
      features: [
        "Fully customizable AI automation",
        "Dedicated AI business consultant",
        "Enterprise-grade compliance",
        "24/7 VIP support",
        "Unlimited AI integrations"
      ],
      popular: false,
      buttonText: "Contact Sales",
      link: "https://example.com/enterprise"
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-lg text-purple-400 font-medium mb-4">Pricing</h2>
          <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            The Best AI Automation,{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              at the Right Price
            </span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Choose a plan that fits your business needs and start automating with AI
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`${pricingToggle === 'monthly' ? 'text-white' : 'text-gray-400'} transition-colors font-medium`}>
              Monthly
            </span>
            <motion.button
              className="relative w-16 h-8 bg-gray-700 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={() => setPricingToggle(pricingToggle === 'monthly' ? 'annually' : 'monthly')}
              animate={{ backgroundColor: pricingToggle === 'annually' ? '#7c3aed' : '#374151' }}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: pricingToggle === 'annually' ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <div className="flex items-center gap-2">
              <span className={`${pricingToggle === 'annually' ? 'text-white' : 'text-gray-400'} transition-colors font-medium`}>
                Annually
              </span>
              {pricingToggle === 'annually' && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium"
                >
                  Save 20%
                </motion.span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:border-purple-500/50 ${
                plan.popular 
                  ? 'border-purple-500 scale-105 bg-gray-800/70 shadow-2xl shadow-purple-500/20' 
                  : 'border-gray-700 hover:scale-102'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
                  >
                    <Star className="w-4 h-4" />
                    Popular
                  </motion.div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {typeof plan.price[pricingToggle] === 'number' ? '$' : ''}{plan.price[pricingToggle]}
                  </span>
                  {typeof plan.price[pricingToggle] === 'number' && (
                    <span className="text-lg text-gray-400">
                      /{pricingToggle === 'monthly' ? 'month' : 'year'}
                    </span>
                  )}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">What&apos;s Included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Button with external link */}
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-purple-500/25'
                      : 'border border-gray-600 hover:border-gray-500 text-white hover:bg-gray-800/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                </motion.button>
              </a>

              {/* Money-back guarantee */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center mt-4"
                >
                  <span className="text-green-400 text-xs font-medium">
                    ✓ 30-day money-back guarantee
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Have questions about our pricing?
          </p>
          <a
            href="#faq"
            className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Check our FAQ section &rarr;
          </a>
        </motion.div>

        {/* Enterprise Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Something More Custom?
            </h3>
            <p className="text-gray-400 mb-6">
              Our enterprise solutions can be tailored to your specific needs with custom integrations, 
              dedicated support, and specialized training.
            </p>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Enterprise Sales
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
