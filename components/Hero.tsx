"use client"
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video background with blur */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full blur-[2px] scale-105"
          src="/bgvid.mp4"
        />
      </div>
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Digital Bridges
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-zinc-100 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-medium">
              Bridging Colombia's digital divide through education and technology
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={scrollToNextSection}
              className="group flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-zinc-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link 
              href="/blog"
              className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5" />
              Latest Updates
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-white"
          >
            <p className="text-sm mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Scroll to explore</p>
            <ChevronDown className="w-6 h-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
