'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
        { name: 'Services', href: '/services' },

    { name: 'Contact', href: '/contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo - Exact match with Particle14 */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* Logo Icon - White rounded square with P14 */}
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-bold text-sm">P14</span>
            </div>
            <span className="text-white text-xl font-bold">
              Particle14
            </span>
          </motion.div>

          {/* Desktop Navigation - Exact match */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA - Exact purple button */}
         <div className="hidden lg:block">
  <a 
    href="https://cal.com/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <motion.button
      className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      Book a call
    </motion.button>
  </a>
</div>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden mt-6 pb-6"
            >
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block text-white hover:text-gray-300 transition-colors font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="pt-4">
                  <a
    href="https://cal.com/"  // replace with your external link
    target="_blank"
    rel="noopener noreferrer"
    className="w-full block text-center bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300"
    onClick={() => setIsMenuOpen(false)}
  >
    Book a call
  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header