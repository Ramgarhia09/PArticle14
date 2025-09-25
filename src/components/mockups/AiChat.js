'use client'

import { motion } from 'framer-motion'

const AIChat = () => {
  const actions = ["Add document", "Analyze", "Generate Image", "Research"]

  return (
    <div className="space-y-4">
      <div className="bg-gray-700/50 rounded-lg p-4">
        <div className="text-white text-sm mb-3 font-medium">What can I help with?</div>
        <div className="text-gray-400 text-xs mb-4 leading-relaxed">
          Weather you want help in customer handling or make changes in your system just give me command
        </div>
        <div className="grid grid-cols-2 gap-2">
          {actions.map((action, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(75, 85, 99, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-600/50 text-white text-xs py-2 px-3 rounded-lg hover:bg-gray-600/70 transition-all"
            >
              {action}
            </motion.button>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full"
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            E-mail Sending...
          </motion.span>
        </motion.div>
      </div>

      {/* Chat messages simulation */}
      <div className="space-y-2 pt-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="bg-gray-700/30 rounded-lg p-2"
        >
          <div className="text-gray-300 text-xs">AI Assistant:</div>
          <div className="text-white text-xs mt-1">Email campaign sent to 150 contacts ✅</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 }}
          className="bg-purple-600/20 rounded-lg p-2 ml-8"
        >
          <div className="text-purple-300 text-xs">You:</div>
          <div className="text-white text-xs mt-1">Great! Generate a follow-up report</div>
        </motion.div>
      </div>
    </div>
  )
}

export default AIChat