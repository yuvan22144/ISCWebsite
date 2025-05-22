"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      avatar: '/avatars/team.jpg'
    },
    category: 'Education',
    image: '/blog/colombia-education.jpg',
    readTime: '5 min read'
  },
  {
    title: 'A Day in Santa Fe: Witnessing the Impact of Rural Education',
    description: 'Our full team visit to Santa Fe de Antioquia schools reveals the real challenges and opportunities in bringing digital transformation to rural education.',
    slug: 'santa-fe-visit',
    date: 'March 10, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/avatars/team.jpg'
    },
    category: 'Community',
    image: '/blog/santa-fe.jpg',
    readTime: '4 min read'
  },
  {
    title: 'Building Our Digital Presence: The Instagram Journey Begins',
    description: 'Our Instagram launch marks the start of our digital outreach, connecting with supporters and sharing our mission to transform rural education.',
    slug: 'digital-presence',
    date: 'March 5, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/avatars/team.jpg'
    },
    category: 'Social Media',
    image: '/blog/social-media.jpg',
    readTime: '3 min read'
  },
];

export default function BlogList() {
    return (
      <section className="py-16 px-4 bg-zinc-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Latest Updates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                href={`/blog/${blog.slug}`} 
                key={blog.slug}
                className="block transition-transform hover:scale-105"
              >
                <motion.div
                  className="bg-white rounded-lg shadow-md overflow-hidden h-full cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
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
        </div>
      </section>
    );
}
