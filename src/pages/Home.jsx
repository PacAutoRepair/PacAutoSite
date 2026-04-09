import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import AppointmentBanner from '../components/AppointmentBanner';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection showAll={false} />
      <WhyChooseUs />
      <GallerySection />
      <TestimonialsSection />
      <AppointmentBanner />
      <ContactSection />
    </main>
  );
}
