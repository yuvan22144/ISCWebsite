"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, School, Wifi, Target, Star, Heart, Calendar, Book, Laptop, Globe, GraduationCap, Youtube, Brain, Languages, Award } from 'lucide-react';
import Link from 'next/link';

const timelineData = [
  {
    date: 'Early 2025',
    title: 'Problem Identification',
    description: 'ISC group members recognize inequality in Colombian rural education, especially the lack of access to digital tools and infrastructure.'
  },
  {
    date: 'February 2025',
    title: 'Research and Community Diagnosis',
    description: 'Group begins researching rural education challenges. Visits and assessments are conducted at Escuela Rural Mixta Sacramento Osorio Pérez (Santa Fe de Antioquia). Problems identified: Only one teacher for all grades, lack of internet, one outdated computer, no tech access for students.'
  },
  {
    date: 'March 2025',
    title: 'Systems Thinking Analysis',
    description: 'Applied tools like the Iceberg Model and Compass Model to analyze root causes: Socioeconomic barriers, limited government funding, cultural norms and lack of innovation in rural areas.'
  },
  {
    date: 'April 2025',
    title: 'Stakeholder Engagement',
    description: 'The group partners with Fundación S.E.E. Change and Fundación 8 Valores (from Tronex). Discussions begin on how to implement technological solutions.'
  },
  {
    date: 'May 2025',
    title: 'Project Planning',
    description: 'Plans developed to bring: Internet connectivity, modern digital tools (e.g., computers, tablets), teacher training programs, vision for a replicable model of rural digital transformation.'
  },
  {
    date: 'May 25, 2025',
    title: 'Report Finalization',
    description: 'The team compiles findings and publishes the project report: "Digital Bridges: Connecting Rural Colombia." Outlines the diagnosis, root causes, statistics, stakeholder actions, and long-term vision.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-5xl font-bold text-center mb-12">About Our Project</h1>
        
        {/* Manual Básico de Computación Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <Book className="w-12 h-12 text-zinc-900" />
            <h2 className="text-3xl font-bold">Basic Computer Manual</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <p className="text-lg text-zinc-600 leading-relaxed">
                The Manual Básico de Computación is a beginner's manual designed to teach basic computer information to newcomers. It includes simple steps to search the internet on Google, how to sign up with Google, and how to maintain a computer.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                The manual also explains how students can operate a keyboard and use important computer tools such as Google Docs, Slides, and Sheets, as these skills are essential for learning in today's digital world.
              </p>
            </div>
            <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Laptop className="w-5 h-5" />
                Key Features
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Globe className="w-5 h-5 text-zinc-600 mt-1" />
                  <span className="text-zinc-600">Internet navigation and Google search basics</span>
                </li>
                <li className="flex items-start gap-2">
                  <GraduationCap className="w-5 h-5 text-zinc-600 mt-1" />
                  <span className="text-zinc-600">Google Workspace tools (Docs, Slides, Sheets)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Book className="w-5 h-5 text-zinc-600 mt-1" />
                  <span className="text-zinc-600">Step-by-step instructions with visual guides</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Manual Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/manuel.png"
                alt="Manual Básico de Computación"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Bridging the Digital Divide</h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              This manual is particularly valuable for rural school students who may not have had the opportunity to work with computers or the internet. While learning these new skills can be challenging, our step-by-step guide with pictures makes it accessible and manageable.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Digital Literacy</h4>
                <p className="text-sm text-zinc-400">Learn essential computer skills and internet navigation</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Self-Learning</h4>
                <p className="text-sm text-zinc-400">Access free learning platforms like Khan Academy</p>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Equal Opportunity</h4>
                <p className="text-sm text-zinc-400">Bridge the gap between rural and urban education</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Educational Tools Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Educational Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Khan Academy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Khan Academy</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Free mathematics, science, reading, and history lessons in video and exercise form. Perfect for self-paced learning and extra help, especially in schools with limited teachers. Students can learn from excellent lesson plans, practice, and get instant feedback.
              </p>
            </motion.div>

            {/* Puntaje Nacional Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Puntaje Nacional</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Colombian learning system for Pruebas Saber and ICFES exam preparation. Offers lessons, quizzes, and simulations aligned with the Colombian curriculum. Free for rural students, helping them prepare for national exams and access quality universities.
              </p>
            </motion.div>

            {/* YouTube Kids Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Youtube className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">YouTube Kids</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Safe platform for educational videos about numbers, alphabets, science, and social skills. Supports early childhood education in regions without preschools, helping children develop curiosity, language, and early learning behaviors.
              </p>
            </motion.div>

            {/* Duolingo Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Languages className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Duolingo</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Interactive language learning platform using fun games and incentives. Essential for ICFES English preparation and future opportunities. Helps rural students gain global opportunities and better-paying jobs through language skills.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Project Timeline</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 text-white rounded-2xl p-12 relative overflow-hidden"
          >
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-800 rounded-full -ml-32 -mb-32" />
            
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-700"></div>
            
            {/* Timeline items */}
            <div className="space-y-8 relative z-10">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full ring-4 ring-zinc-800"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-zinc-800 rounded-xl p-6"
                    >
                      <div className="text-sm text-zinc-400 mb-2">{item.date}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-zinc-300">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-bleed Image Carousel Section */}
      {(() => {
        const images = [
          { src: '/i01.jpeg' },
          { src: '/i02.jpeg' },
          { src: '/i03.jpeg' },
          { src: '/i04.jpeg' },
          { src: '/i05.jpeg' },
          { src: '/i06.jpeg' },
          { src: '/i07.jpeg' },
          { src: '/i08.jpeg' },
          { src: '/i09.jpeg' },
          { src: '/i10.jpeg' },
          { src: '/i11.jpeg' },
          { src: '/i12.jpeg' },
          { src: '/i13.jpeg' },
          { src: '/i14.jpeg' },
          { src: '/i15.jpeg' },
        ];
        return (
          <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 overflow-hidden bg-zinc-900 py-12">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -3000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of images */}
              {images.map((img, index) => (
                <div
                  key={`first-${index}`}
                  className="relative w-[300px] h-[260px] flex-shrink-0"
                >
                  <Image
                    src={img.src}
                    alt={`Project Image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectPosition: 'top' }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {images.map((img, index) => (
                <div
                  key={`second-${index}`}
                  className="relative w-[300px] h-[260px] flex-shrink-0"
                >
                  <Image
                    src={img.src}
                    alt={`Project Image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectPosition: 'top' }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        );
      })()}
    </div>
  );
} 