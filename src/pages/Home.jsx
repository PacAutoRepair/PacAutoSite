import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import AppointmentBanner from '../components/AppointmentBanner';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection showAll={false} />
      <WhyChooseUs />
      <TestimonialsSection />
      <AboutSection />
      <AppointmentBanner />
      <ContactSection />
    </main>
  );
}
