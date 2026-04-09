import ServicesSection from '../components/ServicesSection';
import AppointmentBanner from '../components/AppointmentBanner';

export default function Services() {
  return (
    <main className="pt-16">
      {/* Hero Banner */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-hand text-gold text-2xl">What We Do</span>
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Our Services
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Comprehensive auto repair and maintenance for all makes and models.
            Family-owned and operated in San Pedro since 2004.
          </p>
        </div>
      </section>

      <ServicesSection showAll={true} />
      <AppointmentBanner />
    </main>
  );
}
