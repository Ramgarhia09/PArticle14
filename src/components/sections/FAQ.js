'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: "How can AI automation help my business?",
      answer: "AI automation can streamline your operations by handling repetitive tasks, improving accuracy, reducing costs, and allowing your team to focus on high-value strategic work. It can automate everything from data entry and customer service to complex decision-making processes, typically resulting in 40-80% efficiency improvements."
    },
    {
      question: "Is AI automation difficult to integrate?",
      answer: "Not at all! Our team handles the entire integration process. We design solutions that work seamlessly with your existing systems, provide comprehensive training, and offer ongoing support to ensure smooth implementation. Most clients see results within 2-4 weeks of deployment."
    },
    {
      question: "What industries can benefit from AI automation?",
      answer: "AI automation benefits virtually every industry - from healthcare and finance to retail and manufacturing. Any business with repetitive tasks, data processing needs, or customer service requirements can see significant improvements. We&apos;ve successfully implemented solutions across 50+ industries."
    },
    {
      question: "Do I need technical knowledge to use AI automation?",
      answer: "No technical expertise required! Our AI solutions are designed with user-friendly interfaces and intuitive controls. We provide comprehensive training and 24/7 support to ensure your team can effectively use and manage the automation systems."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer multi-tier support including email, chat, phone, and dedicated account management. Our support includes initial setup assistance, ongoing optimization, regular system updates, and proactive monitoring. Enterprise clients receive 24/7 priority support with guaranteed response times."
    },
    {
      question: "How secure is AI automation?",
      answer: "Security is our top priority. We implement bank-level encryption, comply with SOC 2 and GDPR standards, and conduct regular security audits. All data processing happens in secure, monitored environments with role-based access controls and comprehensive audit trails."
    },
    {
      question: "What&apos;s the typical ROI for AI automation?",
      answer: "Most clients see 200-400% ROI within the first year. Benefits include reduced operational costs (typically 30-50% savings), increased productivity (2-3x improvement), fewer errors (80-95% reduction), and faster processing times. We provide detailed ROI analysis during implementation."
    },
    {
      question: "Can AI automation scale with my business?",
      answer: "Absolutely! Our AI solutions are built to scale dynamically with your business growth. Whether you&apos;re processing 100 or 100,000 transactions per day, the system automatically adjusts resources and capacity. You only pay for what you use, with no upfront infrastructure costs."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-lg text-purple-400 font-medium mb-4">FAQs</h2>
          <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            We&apos;ve Got the Answers{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              You&apos;re Looking For
            </span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Quick answers to your AI automation questions.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
              >
                <span className="text-white font-semibold text-lg pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
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
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-700/50 pt-6">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions Section */}
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

export default FAQ
