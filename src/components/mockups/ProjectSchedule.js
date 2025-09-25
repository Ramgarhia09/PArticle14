'use client'

import { motion } from 'framer-motion'

const ProjectSchedule = () => {
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
  const meetings = [
    {
      title: "Discovery call",
      time: "10:00 am to 10:30 am",
      color: "purple"
    },
    {
      title: "Custom automation",
      time: "06:00 pm to 06:30 pm", 
      color: "blue"
    }
  ]

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-sm font-medium"
      >
        Hey David! 👋
      </motion.div>
      
      <div className="text-gray-400 text-xs mb-4">
        Here is your Custom project & schedule
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-700/50 rounded-lg p-4"
      >
        <div className="text-purple-400 text-xs mb-2 font-medium">On going project:</div>
        <div className="text-white text-sm mb-2 font-semibold">Customer Support Chatbot</div>
        
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-600/50 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="bg-green-500 h-2 rounded-full"
            />
          </div>
          <span className="text-green-400 text-xs font-medium">90% Finished</span>
        </div>
      </motion.div>

      <div>
        <div className="text-white text-sm mb-3 font-semibold">Schedule</div>
        
        <div className="grid grid-cols-7 gap-1 mb-4">
          {weekDays.map((day, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-xs text-center py-2 rounded ${
                i === 2 ? 'bg-purple-600/20 text-purple-400' : 'text-gray-400'
              }`}
            >
              {day}
            </motion.div>
          ))}
        </div>
        
        <div className="space-y-3">
          {meetings.map((meeting, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.2 }}
              className={`rounded-lg p-3 ${
                meeting.color === 'purple' 
                  ? 'bg-purple-600/20 border border-purple-600/30' 
                  : 'bg-blue-600/20 border border-blue-600/30'
              }`}
            >
              <div className={`text-sm font-medium mb-1 ${
                meeting.color === 'purple' ? 'text-purple-400' : 'text-blue-400'
              }`}>
                {meeting.title}
              </div>
              <div className="text-gray-400 text-xs">{meeting.time}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional project info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="pt-3 border-t border-gray-700/50"
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-xs">Next milestone:</span>
          <span className="text-yellow-400 text-xs font-medium">Beta Testing</span>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectSchedule