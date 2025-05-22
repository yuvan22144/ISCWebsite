import BlogList from '@/components/BlogList';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12">Our Blog</h1>
        <BlogList />
      </div>
    </div>
  );
} 