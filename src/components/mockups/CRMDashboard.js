'use client'

import { motion } from 'framer-motion'
import { User, CheckCircle } from 'lucide-react'

const CRMDashboard = () => {
  const contacts = [
    { name: "Jack Daniel", email: "justin@main.com", company: "Xavier LLC" },
    { name: "Gorge Chapel", email: "gorge@mail.com", company: "Chapel LLC" },
    { name: "Mike Tylor", email: "mike@Cmb.com", company: "CMB LLC" },
    { name: "Thomas Shelby", email: "thomas@Sby.com", company: "Shelby.co" }
  ]

  const tabs = ["Draft", "Schedule", "Sent"]

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`text-xs px-3 py-1 rounded-full transition-colors ${
              i === 2 ? 'bg-purple-600 text-white' : 'text-gray-400 bg-gray-700/50 hover:bg-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-purple-400 text-xs mb-3 font-medium"
      >
        IT services
      </motion.div>
      
      <div className="text-white text-sm mb-4 font-semibold">Founders</div>
      
      <div className="space-y-3">
        {contacts.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 bg-gray-700/50 rounded-lg p-3 hover:bg-gray-700/70 transition-colors"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-300" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-medium truncate">{person.name}</div>
              <div className="text-gray-400 text-xs truncate">{person.email}</div>
              <div className="text-gray-500 text-xs truncate">{person.company}</div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Email status indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 pt-4 border-t border-gray-700/50"
      >
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">Campaign Status:</span>
          <span className="text-green-400 text-xs font-medium">✓ Sent to 156 contacts</span>
        </div>
      </motion.div>
    </div>
  )
}

export default CRMDashboard