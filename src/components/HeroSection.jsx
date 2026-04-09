import { Link } from 'react-router-dom';
import { Phone, Shield, Truck, Wrench, CalendarCheck } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';
import PhotoPlaceholder from './PhotoPlaceholder';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background photo placeholder */}
      <div className="absolute inset-0 photo-placeholder rounded-none">
        <div className="relative z-10 flex flex-col items-center gap-3 text-brown/30">
          <span className="font-hand text-xl">Hero background photo</span>
        </div>
      </div>
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/60 z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left: Text content */}
          <div className="w-full md:w-3/5 flex flex-col gap-6">
            <p className="font-hand text-red text-2xl">
              Family-Owned &amp; Serving San Pedro Since 2004
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Your Neighborhood <br className="hidden sm:block" />
              Auto Shop
            </h1>
            <p className="text-slate text-lg leading-relaxed max-w-xl">
              Shawn and Luis have been keeping San Pedro's cars running
              for over 20 years. Foreign &amp; domestic — we treat every vehicle
              (and every customer) like family.
            </p>

            {/* Warranty highlight */}
            <div className="bg-white/80 backdrop-blur-sm border border-sand rounded-2xl px-5 py-3 flex items-center gap-3 w-fit shadow-sm">
              <span className="text-2xl">🛡️</span>
              <p className="text-navy font-semibold">
                2-Year / 24,000-Mile Warranty on Most Repairs
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="tel:3105472226"
                className="flex items-center justify-center gap-2 bg-red text-white px-7 py-3.5 rounded-full font-semibold text-lg hover:bg-red/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone size={20} />
                Call Us: {shopInfo.phone}
              </a>
              <Link
                to="/services"
                className="flex items-center justify-center gap-2 bg-white border-2 border-navy text-navy px-7 py-3.5 rounded-full font-semibold text-lg hover:bg-navy hover:text-white transition-all"
              >
                Our Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: <Shield size={16} />, label: 'GM Specialist' },
                { icon: <Truck size={16} />, label: 'Fleet Service' },
                { icon: <Wrench size={16} />, label: 'All Makes & Models' },
                { icon: <CalendarCheck size={16} />, label: 'Est. 2004' },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm text-navy px-3 py-1.5 rounded-full text-sm font-medium border border-sand/60"
                >
                  {icon}
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Shop photo */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="w-full max-w-md">
              <PhotoPlaceholder
                label="Shop exterior or team photo"
                className="shadow-2xl border-4 border-white"
                aspectRatio="aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
