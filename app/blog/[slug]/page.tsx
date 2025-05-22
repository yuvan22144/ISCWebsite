import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

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
      avatar: '/avatars/team.jpg',
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
      avatar: '/avatars/team.jpg',
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
      avatar: '/avatars/team.jpg',
      bio: 'A team of dedicated students from The Columbus School: Carla Echavarría, Akshay Thirukumaran, Antonia Garcia, and Joaquín Perez.'
    },
    category: 'Social Media',
    image: '/blog/social-media.jpg',
    readTime: '3 min read',
    content: `Upon polishing some final details regarding our project, we promptly opened our Instagram account last week. For our project and goals to get exposure, it was essential to promote the account as much as possible. Because of this, we sent the account to our close friends and relatives, quickly hitting more than 50 followers in the first hour.

    Furthermore, to keep the aesthetic of the account, we uploaded 6 posts with different information and photos regarding our mission and project goals. This digital presence is helping us build momentum and create a broader impact for our mission.`,
    tags: ['Social Media', 'Digital Marketing', 'Community Engagement', 'Education', 'Instagram']
  },
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