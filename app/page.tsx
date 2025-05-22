// app/page.tsx
import Hero from '@/components/Hero';
import About from '@/components/About';
import Goals from '@/components/Goals';
import BlogList from '@/components/BlogList';
import CommunityImpact from '@/components/CommunityImpact';
import SystemicAnalysis from '@/components/SystemicAnalysis';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Goals />
      <SystemicAnalysis />
      <CommunityImpact />
      <BlogList />
    </div>
  );
}
