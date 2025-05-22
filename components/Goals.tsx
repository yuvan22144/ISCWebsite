"use client"
import { motion } from 'framer-motion';
import { LucideCheck, LucideTarget, LucideStar } from 'lucide-react';

const goals = [
  {
    icon: LucideTarget,
    title: "Digital Infrastructure",
    description: "Equip rural schools with internet access, computers, and educational technology to bridge the digital divide.",
    steps: [
      "Install Starlink internet connections",
      "Set up computer labs",
      "Provide technical support",
      "Ensure reliable connectivity"
    ]
  },
  {
    icon: LucideStar,
    title: "Digital Literacy",
    description: "Enable students to effectively use digital tools to improve academic performance and foster long-term learning.",
    steps: [
      "Train teachers in technology integration",
      "Develop digital literacy curriculum",
      "Create interactive learning materials",
      "Monitor student progress"
    ]
  },
  {
    icon: LucideCheck,
    title: "Sustainable Network",
    description: "Create a continuous, innovative support system to expand digital education resources to more schools across Colombia.",
    steps: [
      "Establish maintenance protocols",
      "Build community partnerships",
      "Develop scaling strategies",
      "Create knowledge sharing platform"
    ]
  }
];

export default function Goals() {
  return (
    <section className="py-20 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Our Strategic Goals</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            We're building a comprehensive framework to transform education in rural Colombia through technology and innovation.
          </p>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl transform transition-transform group-hover:scale-105" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg transform transition-transform group-hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center">
                    <goal.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{goal.title}</h3>
                <p className="text-zinc-600 mb-6">{goal.description}</p>
                
                <ul className="space-y-3">
                  {goal.steps.map((step, stepIndex) => (
                    <motion.li
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + stepIndex * 0.1 }}
                      className="flex items-center text-zinc-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 mr-3" />
                      {step}
                    </motion.li>
                  ))}
                </ul>

                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-zinc-900 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-zinc-500">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
