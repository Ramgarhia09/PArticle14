'use client'

import { motion } from 'framer-motion'

const TaskDashboard = () => {
  const tasks = [
    { task: "Waiting for approval", status: "pending" },
    { task: "Payroll management", status: "due", date: "Due on 2nd july" },
    { task: "Employee Tracking", status: "completed", date: "2 days ago" },
    { task: "Social media post", status: "cancelled", date: "Cancelled by user" },
    { task: "Lead list", status: "progress", progress: "70% prepared" },
    { task: "Payment reminder", status: "sent", date: "sent to selected clients" }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500'
      case 'due': return 'bg-red-500'
      case 'completed': return 'bg-green-500'
      case 'cancelled': return 'bg-gray-500'
      case 'progress': return 'bg-blue-500'
      case 'sent': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-white mb-4">
        <h4 className="font-semibold">All Tasks</h4>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      </div>
      
      {tasks.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3 hover:bg-gray-700/70 transition-colors"
        >
          <div className="flex-1">
            <div className="text-white text-sm font-medium">{item.task}</div>
            {item.date && <div className="text-gray-400 text-xs mt-1">{item.date}</div>}
            {item.progress && <div className="text-purple-400 text-xs mt-1">{item.progress}</div>}
          </div>
          <div className={`w-2 h-2 rounded-full ${getStatusColor(item.status)}`} />
        </motion.div>
      ))}
      
      {/* Scrolling animation to show more tasks */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-center text-xs text-gray-500 pt-2"
      >
        + 15 more tasks
      </motion.div>
    </div>
  )
}

export default TaskDashboard