import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div className="noise-bg" />
      <Navbar />
      <Hero />
      <Solutions />
      <CTA />
      <Footer />
    </main>
  );
}
