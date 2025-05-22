"use client";
import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section id="video-section" className="py-20 px-6 bg-gradient-to-b from-white to-zinc-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Our Story in Motion</h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Watch how we're making a difference in rural education through technology and community engagement.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
        >
          <video
            className="w-full h-full object-cover"
            src="/video.mp4"
            controls
            playsInline
            title="Digital Bridges Project Video"
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Video Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center max-w-3xl mx-auto"
        >
          <p className="text-zinc-600">
            This video showcases our journey in bringing digital transformation to rural schools,
            highlighting the challenges we've faced and the impact we've made in the community.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 