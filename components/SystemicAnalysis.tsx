"use client";
import { motion } from 'framer-motion';
import { 
  Wifi, 
  School, 
  Users, 
  BookOpen, 
  Globe, 
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const challenges = [
  {
    icon: School,
    title: "Infrastructure Gap",
    description: "Many rural schools lack basic infrastructure, from functioning classrooms to reliable electricity and internet access.",
    impact: "Limits learning opportunities and technological integration",
    solution: "Implementing Starlink and modern classroom setups"
  },
  {
    icon: Wifi,
    title: "Digital Divide",
    description: "Without reliable internet and digital tools, students are unable to access modern educational content and resources.",
    impact: "Hinders digital literacy and global connectivity",
    solution: "Providing high-speed internet and digital devices"
  },
  {
    icon: Users,
    title: "Teacher Resources",
    description: "Educators in rural schools often lack access to professional development and modern teaching resources.",
    impact: "Affects teaching quality and student engagement",
    solution: "Comprehensive teacher training programs"
  },
  {
    icon: Globe,
    title: "Geographical Barriers",
    description: "The remoteness of rural areas creates significant challenges in accessing quality education and resources.",
    impact: "Increases educational inequality",
    solution: "Mobile learning centers and digital resources"
  },
  {
    icon: BookOpen,
    title: "Resource Inequality",
    description: "Historical and systemic inequality has left rural schools with fewer resources compared to urban institutions.",
    impact: "Perpetuates educational disparities",
    solution: "Equitable resource distribution and support"
  },
  {
    icon: Lightbulb,
    title: "Innovation Gap",
    description: "Limited access to technology and modern teaching methods creates a gap in innovative learning approaches.",
    impact: "Reduces future opportunities for students",
    solution: "Modern teaching methodologies and tools"
  }
];

export default function SystemicAnalysis() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Systemic Analysis</h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Understanding the interconnected challenges in rural education and our comprehensive approach to creating lasting change.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Challenges */}
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl transform transition-transform group-hover:scale-105" />
                <div className="relative bg-white rounded-2xl p-6 shadow-lg transform transition-transform group-hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
                      <challenge.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-zinc-900 mb-2">{challenge.title}</h3>
                      <p className="text-zinc-600 mb-4">{challenge.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-zinc-50 rounded-lg p-3">
                          <p className="text-sm font-medium text-zinc-900 mb-1">Impact</p>
                          <p className="text-zinc-600 text-sm">{challenge.impact}</p>
                        </div>
                        <div className="bg-zinc-50 rounded-lg p-3">
                          <p className="text-sm font-medium text-zinc-900 mb-1">Solution</p>
                          <p className="text-zinc-600 text-sm">{challenge.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Solution Overview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:sticky lg:top-8 h-fit"
          >
            <div className="bg-zinc-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Holistic Approach</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technology Integration</h4>
                    <p className="text-zinc-400 text-sm">
                      Implementing Starlink and modern digital tools to bridge the infrastructure gap
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Teacher Empowerment</h4>
                    <p className="text-zinc-400 text-sm">
                      Comprehensive training programs and resources for educators
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Community Support</h4>
                    <p className="text-zinc-400 text-sm">
                      Building sustainable partnerships and local engagement
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="font-semibold mb-4">Expected Impact</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <p className="text-2xl font-bold text-green-400">100%</p>
                    <p className="text-zinc-400 text-sm">Internet Coverage</p>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <p className="text-2xl font-bold text-green-400">50+</p>
                    <p className="text-zinc-400 text-sm">Teachers Trained</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
