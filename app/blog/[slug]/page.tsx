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
    image: '/02.jpeg',
    readTime: '4 min read',
    content: `We visited la escuelita on May 12th with the engineer to map out the entire installation process. It was a crucial day in the project because we got to learn more about the electrical system of the school and sort out every aspect of the configuration. We went through the existing power grid thoroughly with the engineer and checked the quality and strength of the signal for the internet. This was necessary so that we are aware of everything working as should be once all the hardware is installed.

    We developed a detailed installation plan incorporating internet setup, computers, printers, speakers, video beam, and tables. We took time to clean and get the room ready where all items will be installed, so the room is prepared for installation day. The joining engineer played a great role in deciding the electricity and connection points, allowing us to make appropriate decisions to provide a safe and efficient installation.This day brought us one step closer to bringing digital tools and better resources to the students of la escuelita. We’re excited for what’s coming next!
`,
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
    readTime: '/05.jpeg',
    content: `On May 13th, we returned to la escuelita with both an engineer and a technician to carry out the full installation. It was a big day—we finally began setting everything up! The technician helped us install the internet antenna and route the network cables down to the router. We organized all the connections, set up the computers, and installed the necessary software to ensure the school had the tools it needs to function efficiently.

    Throughout the day, the engineer and technician also worked alongside us to install and organize all the wiring and the overall system. It was a long process that took the entire day, but the weather was beautiful, and everything went smoothly. We spent time with the students, walking them through what we were doing and explaining how each part of the system works. We also introduced them to the rules and guidelines for using the new equipment, emphasizing the importance of responsible and respectful use.

    Together with the teacher, the engineer, the students, and our team, we came up with a set of rules that will help ensure the equipment is well-maintained and used wisely.This day marked a major milestone in the project, and seeing the students’ excitement made it all worth it!
`,
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
    image: '/04.jpeg',
    readTime: '6 min read',
    content: `One of the key parts of our project was the creation of digital learning manuals to guide both students and teachers in making the most of the new technology. To do this properly, we had to carefully research and select the most useful, accessible, and relevant educational platforms for children in rural schools.
We started by asking ourselves two main questions:
What are the most important and useful tools that Google and the internet offer?


What are the primary educational needs of a child in a rural classroom?


From this, we built a curated list of free and high-quality platforms designed to support learning, exploration, and creativity. Some of the top resources we included in the manuals were:
Khan Academy – A completely free platform that helps students of all levels strengthen their math, science, and reading skills. It’s engaging and easy to use.


Puntaje Nacional – A free Colombian resource that helps students prepare for the ICFES exam and improve their academic performance.


Google Docs, Slides, and Forms – Essential tools for working on school projects, taking notes, collaborating, and organizing ideas.


Duolingo – A fun and interactive way for students to learn new languages and open themselves up to global opportunities.


YouTube (Educational Content) – A powerful tool for visual and auditory learners, with endless videos on topics ranging from science and history to art and storytelling.


These platforms were carefully chosen to empower students with the tools they need to grow academically and personally. The manuals, which were installed in both physical and PDF format on each device, are meant to guide them in navigating these tools responsibly and effectively.
We hope this small but powerful guide becomes a bridge for these children to explore the world, expand their minds, and believe in how far they can go.
`,
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
    image: '/03.jpeg',
    readTime: '4 min read',
    content: `The most difficult day of the whole project was May 14. We had planned a training session at 10:00 a.m. with the teachers at the three schools in the rural area to introduce them to the new technology. The night before, May 13, however, there was heavy rain, which caused a landslide that clogged the main road into vereda El Espinal.

    Antonia García had also stepped out to get some things we would be utilizing during the activities with the kids, but returning was practically impossible. A power pole had been toppled by the landslide, and the area around it was flooded, and it was dangerous crossing it—particularly on foot due to the risk of being electrocuted. The vereda lost power, and the effect was significant.

    In turn, not only were school activities canceled, but we were also unable to hold our planned sessions with the children to teach them about the use of the new technology. It was an infuriating experience for us all.

    Despite the setback, we made the best out of it. Since we were already in the vereda, we could still go to the school and help with the teacher. We took the opportunity to put in more content in the instruction manual and retrained the teacher once again on the proper use of the equipment.

    We also completed the setup by hooking up some cables that had been left out the previous day. Even though the day did not go according to plan, we managed to tie everything up and have the school set up and ready.
`,
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
    content: `Some of the most moving moments of our project were when we collected over 9 million Colombian pesos in donations. This incredible kindness allowed us to do more than the bare minimum installation and truly transform the learning environment of the three rural schools we were working with. We requested that each school create a form of "wish list," identifying their biggest needs and the equipment that would best improve their learning environment. Based on those lists, we drew up an overall budget so our impact would be significant and targeted. Thanks to our amazing partnership with Full Hogar, we could get whatever was required by the schools at cheap rates. But the generosity did not stop there — they also gave us other things so that we could equip the schools with even more resources and benefits. With this partnership, we could also buy vital appliances that enriched the classroom environments as well as the overall learning environments. Better still, we had enough excess cash to pay for 16 months' worth of internet for the school. Coupled with the SEE Change funding, which was already funding 12 months, we had a total of 28 months' worth of internet paid for. This degree of support endowed the schools with not only equipment for the present, but a more sustainable and networked future. It was a sobering reminder that real change comes when communities come together with a shared vision.`,
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
    image: '/06.jpeg',
    readTime: '5 min read',
    content: `May 15 was our last day that we were allowed to visit La Escuelita. While the landslide had made it very difficult to enter the vereda, we had found a path through — and what a final adventure it was! Despite the challenges, we ended up returning to the school resolved to spend this special day with the children.
We had planned meaningful activities to wrap up the project. The first was a promise activity: all the students signed a promise (or gave their word, in the case of the younger students) to take care of and make the most of the new machines. We reviewed the rules with them again and told them just how much this chance means for their future.

But the highlight of the day was with our second activity — a moment that stirred our hearts. We gave each child a piece of paper and asked them to write down what these new opportunities meant to them. Some scribbled them down, some drew pictures, and others simply verbalized their dreams. On the back of the paper, the handprint of every child was put, symbolizing their desire to leave their mark on the future — to transform, to evolve, and to make their mark on the world in their own way.

While all this was happening, one of our staff members was secretly loading PDF copies of the user guides onto each and every computer. This uncovered not just the hard copies, but also digital copies which the schools could access whenever they needed them, so that they could make full use of every tool.

We ended the day saying goodbye to the children, our hearts full of tears and pride at all we had accomplished together. This project was never ever about technology itself — it was about connection, learning, and planting the seeds of possibility in fields teeming with hope.
`,
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