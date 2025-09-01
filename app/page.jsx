import HeroSection from '@/components/sections/HeroSection';
import FeaturedCountries from '@/components/sections/FeaturedCountries';
import ServicesSection from '@/components/sections/ServicesSection';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCountries />
      <ServicesSection />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}