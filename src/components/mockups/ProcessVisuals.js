'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ProcessVisuals = ({ type }) => {
  if (type === "analyzing") {
    const checks = ["System check", "Process check", "Speed check", "Manual work", "Repetitive task"]
    
    return (
      <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-sm mb-6 font-medium"
        >
          Analyzing current workflow..
        </motion.div>
        
        <div className="space-y-4">
          {checks.map((item, i) => {
            const progress = Math.floor(Math.random() * 80) + 20
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="space-y-2"
              >
                <div className="flex justify-between text-gray-400 text-xs">
                  <span>{item}</span>
                  <span>{progress}%</span>
                </div>
                <div className="bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ delay: i * 0.2 + 0.3, duration: 0.8 }}
                    className="bg-purple-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-4 text-green-400 text-xs font-medium"
        >
          ✓ Analysis complete - 47% automation potential identified
        </motion.div>
      </div>
    )
  }

  if (type === "code") {
    const codeLines = [
      { color: "text-blue-400", content: "class AutomationTrigger:" },
      { color: "text-gray-400", content: "    def __init__(self, threshold):" },
      { color: "text-yellow-400", content: "        self.threshold = threshold" },
      { color: "text-yellow-400", content: '        self.status = "inactive"' },
      { color: "text-gray-400", content: "    def check_trigger(self, value):" },
      { color: "text-gray-400", content: "        if value > self.threshold:" },
      { color: "text-green-400", content: '            return "Automation triggered!"' },
      { color: "text-gray-400", content: "        else:" },
      { color: "text-red-400", content: '            return "No action taken."' }
    ]

    return (
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 font-mono text-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="text-gray-400 text-xs ml-2">automation.py</span>
        </div>
        
        <div className="text-green-400 mb-3 text-xs"># AI Automation Engine</div>
        
        <div className="space-y-1">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={line.color}
            >
              {line.content}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-green-400 text-xs"
        >
          {">>> Automation engine compiled successfully ✓"}
        </motion.div>
      </div>
    )
  }

  if (type === "integration") {
    return (
      <div className="flex items-center justify-center gap-8 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-purple-600/20 border border-purple-600/30 rounded-2xl p-6 text-center min-w-[150px]"
        >
          <div className="text-purple-400 font-medium mb-2">Our Solution</div>
          <div className="w-16 h-16 bg-purple-600/30 rounded-xl mx-auto mb-2 flex items-center justify-center">
            <div className="w-8 h-8 bg-purple-600 rounded-lg" />
          </div>
          <div className="text-gray-300 text-xs">AI Engine</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ArrowRight className="text-gray-400 w-8 h-8" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center min-w-[150px]"
        >
          <div className="text-gray-400 font-medium mb-2">Your Stack</div>
          <div className="space-y-2">
            {['CRM', 'ERP', 'Tools'].map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="bg-gray-700/50 rounded px-3 py-1"
              >
                <div className="text-gray-300 text-xs">{tool}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  }

  if (type === "optimization") {
    const systems = [
      { system: "Chatbot system", status: "Efficiency will increase by 20%", color: "text-green-400" },
      { system: "Workflow system", status: "Update available..", color: "text-yellow-400" },
      { system: "Sales system", status: "Up to date", color: "text-green-400" }
    ]

    return (
      <div className="space-y-4">
        {systems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-white font-medium">{item.system}</div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div className={`text-sm ${item.color}`}>{item.status}</div>
            
            {i === 0 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-3 bg-gray-700 rounded-full h-2"
              >
                <div className="bg-green-500 h-2 rounded-full w-full" />
              </motion.div>
            )}
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center pt-4"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            All systems optimized
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 h-64 border border-gray-700 flex items-center justify-center">
      <div className="text-gray-400">Process Visual</div>
    </div>
  )
}

export default ProcessVisuals
