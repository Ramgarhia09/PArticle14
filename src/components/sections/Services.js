'use client'

import { motion } from 'framer-motion'
import TaskDashboard from '@/components/mockups/TaskDashboard'
import AiChat from '@/components/mockups/AiChat'
import CRMDashboard from '@/components/mockups/CRMDashboard'
import ProjectSchedule from '@/components/mockups/ProjectSchedule'

const Services = () => {
  const services = [
    {
      title: "Workflow Automation",
      subtitle: "Automate repetitive tasks",
      description: "We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.",
      features: ["Internal Task Bots", "100+ Automations"],
      mockup: "task-dashboard"
    },
    {
      title: "AI Assistant",
      subtitle: "Delegate Daily Tasks",
      description: "From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.",
      features: ["Summaries", "Scheduling", "Many more"],
      mockup: "ai-chat"
    },
    {
      title: "Sales & Marketing",
      subtitle: "Accelerate Sales Growth",
      description: "AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.",
      features: ["Leads", "Content", "Social post"],
      mockup: "crm-dashboard"
    },
    {
      title: "Custom Projects",
      subtitle: "Build Smarter Systems",
      description: "Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.",
      features: ["Strategy", "Custom AI", "Consulting"],
      mockup: "project-schedule"
    }
  ]

  const renderMockup = (mockupType) => {
    switch (mockupType) {
      case "task-dashboard":
        return <TaskDashboard />
      case "ai-chat":
        return <AiChat />
      case "crm-dashboard":
        return <CRMDashboard />
      case "project-schedule":
        return <ProjectSchedule />
      default:
        return <div className="min-h-[300px] bg-gray-700/30 rounded-xl" />
    }
  }

  return (
    <section id="services" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-lg text-purple-400 font-medium mb-4">Our Services</h2>
          <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            AI Solutions That Take Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Business to the Next Level
            </span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We design, develop, and implement automation tools that help you work smarter, not harder
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                <h4 className="text-xl text-purple-400 mb-4">{service.subtitle}</h4>
                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 min-h-[400px]">
                  {renderMockup(service.mockup)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services