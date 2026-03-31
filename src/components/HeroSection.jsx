import { Link } from 'react-router-dom';
import { Phone, Shield, Truck, Wrench, CalendarCheck } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

export default function HeroSection() {
  return (
    <section className="bg-cream min-h-[85vh] flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: Text content (60%) */}
          <div className="w-full md:w-3/5 flex flex-col gap-6">
            <p className="text-red font-semibold uppercase tracking-widest text-sm">
              Serving San Pedro Since 2004
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Your Trusted Neighborhood Auto Shop
            </h1>
            <p className="text-slate text-lg leading-relaxed max-w-xl">
              Family-owned and operated. Foreign &amp; domestic vehicles.{' '}
              <strong className="text-navy">2-year / 24,000-mile warranty</strong> on most repairs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:3105472226"
                className="flex items-center justify-center gap-2 bg-red text-white px-6 py-3 rounded-xl font-semibold text-lg hover:bg-opacity-90 transition-colors shadow-md"
              >
                <Phone size={20} />
                Call to Schedule: {shopInfo.phone}
              </a>
              <Link
                to="/services"
                className="flex items-center justify-center gap-2 border-2 border-navy text-navy px-6 py-3 rounded-xl font-semibold text-lg hover:bg-navy hover:text-white transition-colors"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: <Shield size={18} />, label: 'GM Specialist' },
                { icon: <Truck size={18} />, label: 'Fleet Service' },
                { icon: <Wrench size={18} />, label: 'Foreign & Domestic' },
                { icon: <CalendarCheck size={18} />, label: 'Since 2004' },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-sand text-navy px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {icon}
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Logo (40%) */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-64 h-64 bg-sand rounded-full opacity-60" />
              <img
                src="logo.svg"
                alt="Pacific Auto Repair"
                className="relative w-56 h-56 object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
