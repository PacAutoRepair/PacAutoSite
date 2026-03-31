import ServicesSection from '../components/ServicesSection';
import AppointmentBanner from '../components/AppointmentBanner';

export default function Services() {
  return (
    <main className="pt-16">
      {/* Hero Banner */}
      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-cream text-lg opacity-90 max-w-2xl mx-auto">
            Comprehensive auto repair and maintenance for foreign and domestic vehicles.
            Family-owned and operated in San Pedro since 2004.
          </p>
        </div>
      </section>

      <ServicesSection showAll={true} />
      <AppointmentBanner />
    </main>
  );
}
