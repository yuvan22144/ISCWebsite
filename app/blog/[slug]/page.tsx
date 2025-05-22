import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';

type Blog = {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  image: string;
  readTime: string;
  content: string;
  tags: string[];
};

const blogs: Blog[] = [
  {
    title: 'Bridging the Digital Divide: Our Mission in Rural Colombia',
    description: 'Our team of four students from The Columbus School partners with SEE CHANGE to address educational inequality in rural communities through technology and connectivity.',
    slug: 'bridging-digital-divide',
    date: 'March 15, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg',
      bio: 'A team of dedicated students from The Columbus School: Carla Echavarría, Akshay Thirukumaran, Antonia Garcia, and Joaquín Perez.'
    },
    category: 'Education',
    image: '/blog/colombia-education.jpg',
    readTime: '5 min read',
    content: `Reminiscing on the problems of Colombia, our group, made up of Carla Echavarría, Akshay Thirukumaran, Antonia Garcia, and Joaquín Perez, came up with an answer: the lack of quality education in rural communities. Through our research, we found that rural schools are far less privileged than their urban counterparts in terms of resources, and because of this, the students from such areas have less access to opportunities.

    Consequently, we partnered with SEE CHANGE, a foundation that provides and installs technological equipment like computers and Starlink internet in remote areas of the country. Previously, we met with the superintendent of a school in Santa Fe de Antioquia, called Institution Educativa Arturo Velasquez Ortiz, and subsequently met with the teacher from a rural school (under the umbrella of bigger school) which has only 16 students and where we are going to develop our pilot ISC project by installing the starlink internet and computers in order to favour the community, and for SEE CHANGE to eventually develop.

    Although the members of our group did not previously know one another, we are firmly committed and united towards the goal of providing quality education for rural communities that need it.`,
    tags: ['Education', 'Colombia', 'Digital Divide', 'Rural Development', 'SEE CHANGE']
  },
  {
    title: 'A Day in Santa Fe: Witnessing the Impact of Rural Education',
    description: 'Our full team visit to Santa Fe de Antioquia schools reveals the real challenges and opportunities in bringing digital transformation to rural education.',
    slug: 'santa-fe-visit',
    date: 'March 10, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg',
      bio: 'A team of dedicated students from The Columbus School: Carla Echavarría, Akshay Thirukumaran, Antonia Garcia, and Joaquín Perez.'
    },
    category: 'Community',
    image: '/blog/santa-fe.jpg',
    readTime: '4 min read',
    content: `Last week, our team—Antonia García, Carla Echavarría, Joaquín Pérez, and Akshay Thirukumaran—embarked on our second official visit to the schools in Santa Fe de Antioquia, and this time, we were all able to go together. This visit marked a major step forward in our journey to bring meaningful change to the educational environment of these communities.

    We were welcomed warmly and taken on a guided tour of both the main school, Arturo Velásquez Ortiz, and one of the rural satellite schools. We had the chance to observe their daily operations, learn more about the structure of their school system, and see firsthand the current resources they are working with. It was eye-opening to see the challenges these students and teachers face on a daily basis, and it only reinforced our commitment to make this project as impactful as possible.

    One of the most valuable moments of the visit was receiving a general list of needs for all three rural school sites. This list wasn't just a request—it was a reflection of their hopes, and a roadmap for turning those hopes into a better reality. We were told that the changes we're planning are not just dreams anymore. They are a necessity—essential for improving the students' educational experience and allowing them to thrive in a more connected, functional, and inspiring learning environment.

    We also finalized the installation dates, setting a clear schedule for when ventilators, printers, internet connections, and computers will start arriving and being set up. It's no longer a project on paper. It's happening.`,
    tags: ['Community Engagement', 'Santa Fe de Antioquia', 'Education', 'Technology', 'School Visit']
  },
  {
    title: 'Building Our Digital Presence: The Instagram Journey Begins',
    description: 'Our Instagram launch marks the start of our digital outreach, connecting with supporters and sharing our mission to transform rural education.',
    slug: 'digital-presence',
    date: 'March 5, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg',
      bio: 'A team of dedicated students from The Columbus School: Carla Echavarría, Akshay Thirukumaran, Antonia Garcia, and Joaquín Perez.'
    },
    category: 'Social Media',
    image: '/blog/social-media.jpg',
    readTime: '3 min read',
    content: `Upon polishing some final details regarding our project, we promptly opened our Instagram account last week. For our project and goals to get exposure, it was essential to promote the account as much as possible. Because of this, we sent the account to our close friends and relatives, quickly hitting more than 50 followers in the first hour.

    Furthermore, to keep the aesthetic of the account, we uploaded 6 posts with different information and photos regarding our mission and project goals. This digital presence is helping us build momentum and create a broader impact for our mission.`,
    tags: ['Social Media', 'Digital Marketing', 'Community Engagement', 'Education', 'Instagram']
  },
  {
    title: 'Planning Day at the Escuelita',
    description: 'Our crucial planning session with the engineer to assess electrical systems and develop a comprehensive installation strategy.',
    slug: 'planning-day',
    date: 'May 12, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg',
      bio: 'A team of dedicated students from The Columbus School: Carla Echavarría, Akshay Thirukumaran, Antonia Garcia, and Joaquín Perez.'
    },
    category: 'Planning',
    image: '/blog/planning-day.jpg',
    readTime: '4 min read',
    content: `On May 12th, we visited la escuelita with the engineer to plan the entire installation process. It was a key day for the project, as we got to learn more about the school's electrical system and work through every detail of the setup.

    Together with the engineer, we carefully reviewed the existing power network and checked the strength and availability of the signal for the internet. This was crucial to ensure everything runs smoothly once all the equipment is installed.

    We developed a complete installation plan that includes internet setup, computers, printers, speakers, a video beam, and tables. We also took time to clean and prepare the room where everything will be placed, making sure the space is ready for installation day.

    The engineer who joined us played a vital role in assessing the electricity and connection points, helping us make informed decisions to guarantee a safe and efficient installation.

    This day brought us one step closer to bringing digital tools and better resources to the students of la escuelita. We're excited for what's coming next!`,
    tags: ['Planning', 'Infrastructure', 'Education', 'Technology', 'Rural Development']
  },
  {
    title: 'Installation Day at La Escuelita',
    description: 'A successful day of installing internet, computers, and setting up the entire digital infrastructure with the help of our technical team.',
    slug: 'installation-day',
    date: 'May 13, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg',
      bio: 'A team of dedicated students from The Columbus School: Carla Echavarría, Akshay Thirukumaran, Antonia Garcia, and Joaquín Perez.'
    },
    category: 'Project Update',
    image: '/blog/installation-day.jpg',
    readTime: '5 min read',
    content: `On May 13th, we returned to la escuelita with both an engineer and a technician to carry out the full installation. It was a big day—we finally began setting everything up!

    The technician helped us install the internet antenna and route the network cables down to the router. We organized all the connections, set up the computers, and installed the necessary software to ensure the school had the tools it needs to function efficiently.

    Throughout the day, the engineer and technician also worked alongside us to install and organize all the wiring and the overall system. It was a long process that took the entire day, but the weather was beautiful, and everything went smoothly.

    We spent time with the students, walking them through what we were doing and explaining how each part of the system works. We also introduced them to the rules and guidelines for using the new equipment, emphasizing the importance of responsible and respectful use.

    Together with the teacher, the engineer, the students, and our team, we came up with a set of rules that will help ensure the equipment is well-maintained and used wisely.

    This day marked a major milestone in the project, and seeing the students' excitement made it all worth it!`,
    tags: ['Installation', 'Technology', 'Education', 'Community', 'Infrastructure']
  },
  {
    title: 'Completing the Manuals: Building a Bridge to Knowledge',
    description: 'We created comprehensive digital learning manuals featuring carefully selected educational platforms to empower students and teachers.',
    slug: 'learning-manuals',
    date: 'May 13, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg',
      bio: 'A team of dedicated students from The Columbus School: Carla Echavarría, Akshay Thirukumaran, Antonia Garcia, and Joaquín Perez.'
    },
    category: 'Education',
    image: '/blog/manuals.jpg',
    readTime: '6 min read',
    content: `One of the key parts of our project was the creation of digital learning manuals to guide both students and teachers in making the most of the new technology. To do this properly, we had to carefully research and select the most useful, accessible, and relevant educational platforms for children in rural schools.

    We started by asking ourselves two main questions:
    What are the most important and useful tools that Google and the internet offer?
    What are the primary educational needs of a child in a rural classroom?

    From this, we built a curated list of free and high-quality platforms designed to support learning, exploration, and creativity. Some of the top resources we included in the manuals were:

    • Khan Academy – A completely free platform that helps students of all levels strengthen their math, science, and reading skills. It's engaging and easy to use.

    • Puntaje Nacional – A free Colombian resource that helps students prepare for the ICFES exam and improve their academic performance.

    • Google Docs, Slides, and Forms – Essential tools for working on school projects, taking notes, collaborating, and organizing ideas.

    • Duolingo – A fun and interactive way for students to learn new languages and open themselves up to global opportunities.

    • YouTube (Educational Content) – A powerful tool for visual and auditory learners, with endless videos on topics ranging from science and history to art and storytelling.

    These platforms were carefully chosen to empower students with the tools they need to grow academically and personally. The manuals, which were installed in both physical and PDF format on each device, are meant to guide them in navigating these tools responsibly and effectively.

    We hope this small but powerful guide becomes a bridge for these children to explore the world, expand their minds, and believe in how far they can go.`,
    tags: ['Education', 'Digital Learning', 'Resources', 'Technology', 'Student Success']
  },
  {
    title: 'A Challenging Day: Overcoming Obstacles',
    description: 'Despite a landslide blocking access to the school, we adapted our plans and continued working to ensure the technology setup was complete.',
    slug: 'challenging-day',
    date: 'May 14, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg',
      bio: 'A team of dedicated students from The Columbus School: Carla Echavarría, Akshay Thirukumaran, Antonia Garcia, and Joaquín Perez.'
    },
    category: 'Project Update',
    image: '/blog/challenging-day.jpg',
    readTime: '4 min read',
    content: `May 14 was the most difficult day of the entire project. We had planned a training session at 10:00 a.m. with the teachers from the three rural schools to help them get familiar with the new technology. Unfortunately, the night before, on May 13, heavy rain caused a landslide that blocked the main road into the vereda El Espinal.

    Antonia García had gone out to buy some materials we needed for the activities with the children, but returning was nearly impossible. A utility pole had fallen during the landslide, and the area was flooded, making it dangerous to cross—especially on foot due to the risk of electrocution. The vereda lost power, and the damage was significant.

    As a result, not only were school activities canceled, but we were also unable to carry out our planned sessions with the children to teach them how to use the new devices. It was a disappointing moment for all of us.

    Despite the setback, we made the most of the situation. Since we were staying in the vereda, we were still able to go to the school and work alongside the teacher. We took the opportunity to add more content to the instruction manual and trained the teacher further on how to use the equipment effectively.

    We also completed the installation by adding a few missing cables from the previous day. Even though the day didn't go as planned, we managed to finalize everything and ensure the school was fully set up and ready.`,
    tags: ['Challenges', 'Community', 'Education', 'Resilience', 'Project Update']
  },
  {
    title: 'A Wave of Generosity: Over 9 Million Pesos in Donations',
    description: 'Thanks to incredible community support, we secured over 9 million pesos in donations, enabling us to provide 28 months of internet service and essential equipment.',
    slug: 'generous-donations',
    date: 'May 14, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg',
      bio: 'A team of dedicated students from The Columbus School: Carla Echavarría, Akshay Thirukumaran, Antonia Garcia, and Joaquín Perez.'
    },
    category: 'Impact',
    image: '/blog/donations.jpg',
    readTime: '4 min read',
    content: `One of the most powerful moments of our project came when we received over 9 million Colombian pesos in donations. This incredible support allowed us to go beyond just the basic setup and truly transform the learning environments of the three rural schools we were working with.

    We invited each school to create a kind of "wish list," identifying their most urgent needs and the tools that would most significantly improve their learning spaces. Based on these lists, we built a detailed budget to make sure our impact was meaningful and targeted.

    Thanks to our amazing partnership with Full Hogar, we were able to get everything the schools needed at excellent prices. But the generosity didn't stop there — they also gifted us additional items to give the schools even more resources and privileges. Through this collaboration, we were able to acquire essential appliances that improved the classroom environments and overall study conditions.

    Even better, we had enough leftover funds to pay for 16 months of internet service for the school. When combined with the support from SEE Change, which had already funded 12 months, we reached a total of 28 months of internet fully paid.

    This level of support gave the schools not just tools for today, but also a more sustainable and connected future. It was a huge reminder that real change happens when communities come together with a shared purpose.`,
    tags: ['Donations', 'Community Support', 'Education', 'Sustainability', 'Impact']
  },
  {
    title: 'Leaving Our Mark: A Farewell Filled with Meaning',
    description: 'Our final day at La Escuelita was filled with emotional moments as students shared their dreams and made commitments to care for their new digital tools.',
    slug: 'farewell-day',
    date: 'May 15, 2024',
    author: {
      name: 'Digital Bridges Team',
      avatar: '/globe.svg',
      bio: 'A team of dedicated students from The Columbus School: Carla Echavarría, Akshay Thirukumaran, Antonia Garcia, and Joaquín Perez.'
    },
    category: 'Community',
    image: '/blog/farewell.jpg',
    readTime: '5 min read',
    content: `May 15 was the last day we were able to visit La Escuelita. Even though the landslide had made access to the vereda extremely difficult, we managed to find a way through — and what a final adventure it was! Despite the obstacles, we made it back to the school, determined to spend this special day with the children.

    We had planned meaningful activities to wrap up the project. The first was a commitment activity: each student signed a pledge (or gave a verbal one, in the case of the younger children) to care for and make the most of the new devices. We reviewed the rules with them one more time and helped them understand just how valuable this opportunity is for their future.

    But the most powerful moment of the day was our second activity — one that truly touched our hearts. We gave each child a sheet of paper and asked them to express what these new opportunities meant to them. Some wrote words, some drew pictures, and some simply shared their dreams out loud. On the back of the paper, each child placed their handprint, symbolizing their desire to leave a mark on the future — to grow, to learn, and to impact the world in their own way.

    While the activities were happening, one of our team members was busy behind the scenes installing PDF versions of the user manuals on each computer. This way, the schools wouldn't just have physical copies, but also digital versions that could be accessed anytime, ensuring they could make the most of every tool provided.

    We ended the day by saying goodbye to the children, filled with emotion and pride in everything we had accomplished together. This project was never just about technology — it was about connection, growth, and planting seeds of opportunity in places full of potential.`,
    tags: ['Community', 'Education', 'Student Success', 'Impact', 'Future']
  }
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPost({ params, searchParams }: PageProps) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams]);
  const blog = blogs.find((blog) => blog.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <span className="bg-white text-zinc-900 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
            <p className="text-xl md:text-2xl mb-8">{blog.description}</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-medium">{blog.author.name}</p>
                <p className="text-sm opacity-80">{blog.date} · {blog.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Author Bio */}
          <div className="border-b border-zinc-200 pb-8 mb-8">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{blog.author.name}</h3>
                <p className="text-zinc-600">{blog.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-zinc-700 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-zinc-200">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-zinc-100 text-zinc-700 px-4 py-2 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
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

        {/* Back to Blogs Link */}
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-zinc-600 hover:text-zinc-900"
          >
            ← Back to Updates
          </Link>
        </div>
      </div>
    </article>
  );
} 