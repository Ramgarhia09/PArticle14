'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
}

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWhatsApp = () => {
    const phoneNumber = "91707764902" // ✅ Your WhatsApp number in international format (without +)
    const text = `Hello, my name is ${formData.firstName} ${formData.lastName}.
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
💬 Message: ${formData.message}`

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <div className="bg-black min-h-screen">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Circle */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto space-y-12"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-2"
            >
              <span className="text-white font-medium">Contact</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
            >
              Get in Touch with Us
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Have questions or need AI solutions? Fill out the form and send us a WhatsApp message!
            </motion.p>

            {/* Grid */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              {/* Contact Info */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">Contact Info</h3>
                <p className="text-gray-400 mb-2">Email: info@particle14.com</p>
                <p className="text-gray-400">Phone: +91 707764902</p>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white h-24 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />

                  <motion.button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send via WhatsApp
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
