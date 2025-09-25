'use client'

import { motion } from 'framer-motion'
import ProcessVisuals from '@/components/mockups/ProcessVisuals'

const Process = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Smart Analyzing",
      description: "We assess your needs and identify AI solutions to streamline workflows and improve efficiency.",
      visual: "analyzing"
    },
    {
      step: "Step 2", 
      title: "AI Development",
      description: "Our team builds intelligent automation systems tailored to your business processes.",
      visual: "code"
    },
    {
      step: "Step 3",
      title: "Seamless Integration", 
      description: "We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.",
      visual: "integration"
    },
    {
      step: "Step 4",
      title: "Continuous Optimization",
      description: "We refine performance, analyze insights, and enhance automation for long-term growth.",
      visual: "optimization"
    }
  ]

  return (
    <section id="process" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-lg text-purple-400 font-medium mb-4">Our Process</h2>
          <h3 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our Simple, Smart, and{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Scalable Process
            </span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We design, develop, and implement automation tools that help you work smarter, not harder
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
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
                <div className="text-purple-400 font-medium mb-2 text-lg">{step.step}</div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="flex-1">
                <ProcessVisuals type={step.visual} />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Process