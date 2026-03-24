import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import ReviewSection from '@/components/ReviewSection';
import BestOxygenSection from '@/components/HeroicCherrySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="background w-full h-full">
      <Header />
      
      <section id="home">
        <HeroSection />
      </section>

      <section id="product">
        <BestOxygenSection />
      </section>

      <section id="reviews">
        <ReviewSection />
      </section>
      <Footer />
    </main>
  );
}
