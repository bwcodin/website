import AboutSection from '@/components/home/AboutSection';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Program from '@/components/home/Program';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <AboutSection />
      <Features />
      <Program />
    </main>
  );
}
