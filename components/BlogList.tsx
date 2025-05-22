"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useRef } from 'react';

type Blog = {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  image: string;
  readTime: string;
};

const blogs: Blog[] = [
  {
    title: 'Bridging the Digital Divide: Our Mission in Rural Colombia',
    description: 'Our team of four students from The Columbus School partners with SEE CHANGE to address educational inequality in rural communities through technology and connectivity.',
    slug: 'bridging-digital-divide',
    date: 'March 15, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg'
    },
    category: 'Education',
    image: '/img1.jpeg',
    readTime: '5 min read'
  },
  {
    title: 'A Day in Santa Fe: Witnessing the Impact of Rural Education',
    description: 'Our full team visit to Santa Fe de Antioquia schools reveals the real challenges and opportunities in bringing digital transformation to rural education.',
    slug: 'santa-fe-visit',
    date: 'March 10, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg'
    },
    category: 'Community',
    image: '/blogimg3.jpeg',
    readTime: '4 min read'
  },
  {
    title: 'Building Our Digital Presence: The Instagram Journey Begins',
    description: 'Our Instagram launch marks the start of our digital outreach, connecting with supporters and sharing our mission to transform rural education.',
    slug: 'digital-presence',
    date: 'March 5, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg'
    },
    category: 'Social Media',
    image: '/blogimg2.jpeg',
    readTime: '3 min read'
  },
  {
    title: 'Planning Day at the Escuelita',
    description: 'Our crucial planning session with the engineer to assess electrical systems and develop a comprehensive installation strategy.',
    slug: 'planning-day',
    date: 'May 12, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg'
    },
    category: 'Planning',
    image: '/',
    readTime: '4 min read'
  },
  {
    title: 'Installation Day at La Escuelita',
    description: 'A successful day of installing internet, computers, and setting up the entire digital infrastructure with the help of our technical team.',
    slug: 'installation-day',
    date: 'May 13, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg'
    },
    category: 'Project Update',
    image: '/',
    readTime: '5 min read'
  },
  {
    title: 'Completing the Manuals: Building a Bridge to Knowledge',
    description: 'We created comprehensive digital learning manuals featuring carefully selected educational platforms to empower students and teachers.',
    slug: 'learning-manuals',
    date: 'May 13, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg'
    },
    category: 'Education',
    image: '/',
    readTime: '6 min read'
  },
  {
    title: 'A Challenging Day: Overcoming Obstacles',
    description: 'Despite a landslide blocking access to the school, we adapted our plans and continued working to ensure the technology setup was complete.',
    slug: 'challenging-day',
    date: 'May 14, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg'
    },
    category: 'Project Update',
    image: '/',
    readTime: '4 min read'
  },
  {
    title: 'A Wave of Generosity: Over 9 Million Pesos in Donations',
    description: 'Thanks to incredible community support, we secured over 9 million pesos in donations, enabling us to provide 28 months of internet service and essential equipment.',
    slug: 'generous-donations',
    date: 'May 14, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg'
    },
    category: 'Impact',
    image: '/',
    readTime: '4 min read'
  },
  {
    title: 'Leaving Our Mark: A Farewell Filled with Meaning',
    description: 'Our final day at La Escuelita was filled with emotional moments as students shared their dreams and made commitments to care for their new digital tools.',
    slug: 'farewell-day',
    date: 'May 15, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg'
    },
    category: 'Community',
    image: '/',
    readTime: '5 min read'
  }
];

export default function BlogList() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400; // Adjust this value based on your needs
            const currentScroll = scrollContainerRef.current.scrollLeft;
            const targetScroll = direction === 'left' 
                ? currentScroll - scrollAmount 
                : currentScroll + scrollAmount;
            
            scrollContainerRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
      <section className="py-16 px-4 bg-zinc-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Latest Updates</h2>
          
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 -ml-4"
            >
              <ChevronLeft className="w-6 h-6 text-zinc-900" />
            </button>

            {/* Blog Cards Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {blogs.map((blog) => (
                <Link 
                  href={`/blog/${blog.slug}`} 
                  key={blog.slug}
                  className="block transition-transform hover:scale-105 flex-none w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] snap-start"
                >
                  <motion.div
                    className="bg-white rounded-lg shadow-md overflow-hidden h-full cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover object-[center_10%] scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-sm">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                          <Image
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-zinc-900">{blog.author.name}</p>
                          <p className="text-sm text-zinc-500">{blog.date}</p>
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-zinc-900 mb-2">
                        {blog.title}
                      </h3>
                      <p className="text-zinc-600 mb-4">{blog.description}</p>
                      <div className="flex items-center text-sm text-zinc-500">
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 -mr-4"
            >
              <ChevronRight className="w-6 h-6 text-zinc-900" />
            </button>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-zinc-600 hover:text-zinc-900 transition-colors bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    );
}
