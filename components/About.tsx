"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, School, Wifi, Target, Star, Heart } from 'lucide-react';

const teamMembers = [
  {
    name: 'Carla Echavarría',
    role: 'Student',
    image: '/avatars/carla.jpg',
  },
  {
    name: 'Akshay Thirukumaran',
    role: 'Student',
    image: '/avatars/akshay.jpg',
  },
  {
    name: 'Antonia Garcia',
    role: 'Student',
    image: '/avatars/antonia.jpg',
  },
  {
    name: 'Joaquín Perez',
    role: 'Student',
    image: '/avatars/joaquin.jpg',
  },
];

const stats = [
  { icon: School, value: '3', label: 'Schools Supported' },
  { icon: Users, value: '50+', label: 'Students Impacted' },
  { icon: Wifi, value: '100%', label: 'Internet Coverage' },
];

export default function About() {
  return (
    <section className="py-20 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-extrabold text-zinc-800">
              Bridging the Digital Divide in Rural Colombia
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We are a team of four dedicated students from The Columbus School, driven by a shared passion to make a meaningful impact in Colombia's educational landscape. Our goal is to provide children in rural schools with access to high-quality education, digital tools, and internet connectivity.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-zinc-900 text-white px-6 py-3 rounded-lg font-medium"
              >
                Learn More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-zinc-900 text-zinc-900 px-6 py-3 rounded-lg font-medium"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/about-hero.jpg"
              alt="Students in rural Colombia"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <stat.icon className="w-12 h-12 text-zinc-900 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-zinc-900 mb-2">{stat.value}</h3>
              <p className="text-zinc-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-zinc-800 text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-zinc-900 mb-2">{member.name}</h4>
                  <p className="text-zinc-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 text-white rounded-2xl p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-800 rounded-full -ml-32 -mb-32" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-zinc-400 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Short-term Goals</h4>
                    <p className="text-zinc-400">
                      Equip rural schools with digital tools and provide comprehensive training for teachers and students.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-zinc-400 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Long-term Impact</h4>
                    <p className="text-zinc-400">
                      Establish a sustainable digital education network, ensuring continuous support and innovation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-zinc-400 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Success Metrics</h4>
                    <p className="text-zinc-400">
                      Increased student engagement, improved academic performance, and the integration of digital literacy into the curriculum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
