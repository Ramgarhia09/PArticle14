'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BlogPost = () => {
  const router = useRouter()

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/blog')}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12">
        {/* Article Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>March 15, 2024</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>By Sarah Johnson</span>
            </div>
          </div>
          <div className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">
            AI Tools
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight"
        >
          5 Must-Have AI Tools to Streamline Your Business Tasks
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 leading-relaxed"
        >
          Discover how to supercharge your workflows and boost productivity with these cutting-edge AI automation tools that are revolutionizing how businesses operate, enhance customer experiences, and achieve sustainable growth.
        </motion.p>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="relative aspect-video bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-green-600/20 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg"></div>
                </div>
                <p className="text-white/80 text-sm sm:text-base">AI Tools Visualization</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">Introduction</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
              In today&apos;s fast-paced business environment, staying competitive requires leveraging the latest technology. Artificial Intelligence (AI) has emerged as a game-changer, offering unprecedented opportunities to automate routine tasks, enhance decision-making, and drive innovation.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              This comprehensive guide explores five essential AI tools that can transform your business operations, helping you work smarter, not harder. From customer service to marketing automation, these tools represent the cutting edge of business efficiency.
            </p>
          </motion.section>

          {/* Tool 1 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">1. AI-Powered Chatbots</h2>
            
            <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-3 sm:mb-4">What It Does</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
              AI chatbots provide instant customer support, handle inquiries, and guide users through purchasing decisions. These intelligent systems can understand context, learn from interactions, and provide personalized responses 24/7.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-3 sm:mb-4">Why You Need It</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              A well-integrated chatbot can help to instantly respond to customer queries, reduce response times by up to 90%, and handle multiple conversations simultaneously. This translates to improved customer satisfaction and significant cost savings on support staff.
            </p>
          </motion.section>

          {/* Tool 2 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">2. AI-Based Project Management Tools</h2>
            
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3 sm:mb-4">What It Does</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
              These tools automate task assignments, track progress, predict project timelines, and optimize resource allocation. AI algorithms analyze team performance and suggest improvements for better project outcomes.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3 sm:mb-4">Why You Need It</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              Project management AI reduces administrative overhead, prevents bottlenecks, and ensures deadlines are met with optimal resource utilization. Teams report 40% improvement in project delivery times.
            </p>
          </motion.section>

          {/* Tool 3 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">3. Intelligent Data Analytics Software</h2>
            
            <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-3 sm:mb-4">What It Does</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
              AI-driven analytics tools process vast datasets to uncover patterns, predict trends, and generate actionable insights. These platforms transform raw data into strategic business intelligence.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-3 sm:mb-4">Why You Need It</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              Make data-driven decisions with confidence. AI analytics can identify market opportunities, optimize pricing strategies, and predict customer behavior with remarkable accuracy, leading to increased revenue and competitive advantage.
            </p>
          </motion.section>

          {/* Tool 4 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">4. AI-Powered Marketing Automation</h2>
            
            <h3 className="text-lg sm:text-xl font-semibold text-orange-400 mb-3 sm:mb-4">What It Does</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
              Advanced marketing platforms use AI to personalize campaigns, optimize ad targeting, and predict customer lifetime value. These systems automatically adjust strategies based on performance data.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-orange-400 mb-3 sm:mb-4">Why You Need It</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              Increase conversion rates by up to 300% with personalized marketing campaigns and more effective lead nurturing. AI marketing tools ensure your message reaches the right audience at the optimal time.
            </p>
          </motion.section>

          {/* Tool 5 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">5. AI-Enhanced Cybersecurity</h2>
            
            <h3 className="text-lg sm:text-xl font-semibold text-red-400 mb-3 sm:mb-4">What It Does</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
              AI cybersecurity systems continuously monitor network activity, detect anomalies, and respond to threats in real-time. Machine learning algorithms evolve to recognize new attack patterns.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-red-400 mb-3 sm:mb-4">Why You Need It</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              With cyberattacks increasing exponentially, businesses need AI-powered security that can respond faster than human analysts. Protect your valuable data and maintain customer trust with proactive threat detection.
            </p>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">Conclusion</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
              Integrating AI tools into your business operations isn&apos;t just about staying competitive—it&apos;s about unlocking new levels of efficiency, insight, and growth potential. These five categories of AI tools represent the foundation of modern business automation.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              Start with one tool that addresses your most pressing business challenge, then gradually expand your AI toolkit. The future belongs to businesses that embrace intelligent automation today.
            </p>
          </motion.section>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
