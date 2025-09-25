'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  // Blog posts with slug for routing
  const blogPosts = [
    {
      slug: "future-of-ai-automation",
      category: "Article",
      title: "The Future of AI Automation: How It's Changing Business Operations",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
      readTime: "5 min read"
    },
    {
      slug: "must-have-ai-tools",
      category: "Resources",
      title: "5 Must-Have AI Tools to Streamline Your Business Tasks",
      image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=600&fit=crop&crop=center",
      readTime: "3 min read"
    },
    {
      slug: "ai-vs-manual-work",
      category: "Article",
      title: "AI vs. Manual Work: Which One Saves More Time & Money?",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
      readTime: "4 min read"
    },
    {
      slug: "ai-transforming-workflows",
      category: "Article",
      title: "How AI is Transforming Workflow Automation for Businesses",
      image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=600&fit=crop&crop=center",
      readTime: "6 min read"
    }
  ]

 
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[80vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-purple-600/20 rounded-full filter blur-2xl sm:blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 sm:px-6 py-1.5 sm:py-2 mb-12 sm:mb-16"
            >
              <span className="text-white font-medium text-sm sm:text-base">Blog</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 sm:mb-12 leading-tight"
            >
              Unlock AI Insights with Us
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 sm:mb-16 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed"
            >
              Stay informed with the latest AI trends, insights, and strategies to drive
              innovation and business growth.
            </motion.p>

            {/* Blog Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
            >
              {blogPosts.map((post, index) => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="group bg-gray-800/30 border border-gray-700 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Image */}
                    <div className="relative h-48 sm:h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-xl sm:rounded-t-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/30 to-indigo-600/20">
                        <div className="absolute inset-0 bg-black/40" />
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="bg-black/50 backdrop-blur-sm text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>

                      {/* Read Time */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                        <span className="bg-black/50 backdrop-blur-sm text-gray-300 text-[10px] sm:text-xs px-2 py-1 rounded-full">
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight group-hover:text-purple-300 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs sm:text-sm">Read more</span>
                        <motion.div
                          className="w-7 sm:w-8 h-7 sm:h-8 bg-gray-700/50 rounded-full flex items-center justify-center group-hover:bg-purple-600/50 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 45 }}
                        >
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
