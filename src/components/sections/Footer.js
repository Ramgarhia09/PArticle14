'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  ArrowUpRight,
  Instagram,
  Facebook,
} from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Case Studies', href: '#cases' },
      { name: 'API Documentation', href: '#' },
      { name: 'Integrations', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'Templates', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Security', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/particle_14' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/particle14' },
     { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/particle14_?igsh=ZWJhMjVhZ3RheGx6' },
      { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/profile.php?id=61565485735255&mibextid=rS40aB7S9Ucbxw6v' },
  ]

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-sm">P14</span>
            </div>
                  <span className="text-2xl font-bold text-white">Particle14</span>
                </div>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  Advanced technology solutions for modern businesses. Transforming ideas into digital reality.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>nexus@particle14.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>+91 70787 74692</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-8 h-6 text-purple-400" />
                    <span>C/O SMT MUKESH DEVI,MAMTA VIHAR,Ghaziabad,Ghaziabad,Uttar Pradesh,India-201009</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-4 gap-8">
                
                {/* Product Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-white font-semibold mb-6">Product</h3>
                  <ul className="space-y-4">
                    {footerLinks.product.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                        >
                          {link.name}
                          {link.name === 'API Documentation' && (
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-white font-semibold mb-6">Company</h3>
                  <ul className="space-y-4">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Resources Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-white font-semibold mb-6">Resources</h3>
                  <ul className="space-y-4">
                    {footerLinks.resources.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-white font-semibold mb-6">Legal</h3>
                  <ul className="space-y-4">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </div>
            </div>
          </div>
        </div>

    

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-500 text-sm">
            © 2025 Particle14. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Visioned and Crafted  by Particle14</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 z-50"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ↑
          </motion.div>
        </motion.button>
      </div>
    </footer>
  )
}


export default Footer
