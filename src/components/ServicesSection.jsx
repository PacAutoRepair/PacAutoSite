import { Link } from 'react-router-dom';
import {
  Droplets, CircleDot, Gauge, Settings, Thermometer, Car,
  Zap, Truck, Star, Wind, ShieldCheck, Wrench,
} from 'lucide-react';
import { services } from '../data/services';

const iconMap = {
  Droplets, CircleDot, Gauge, Settings, Thermometer, Car,
  Zap, Truck, Star, Wind, ShieldCheck, Wrench,
};

export default function ServicesSection({ showAll = false }) {
  const displayed = showAll ? services : services.slice(0, 6);

  return (
    <section className="bg-warmgray py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-hand text-red text-2xl">What We Do</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-navy mt-2 mb-4">
            Keeping Your Car on the Road
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            From routine maintenance to complex repairs — we've got you covered.
            Every job gets the same attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((service, i) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-sm border border-sand/40 p-7 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center group-hover:bg-red/10 transition-colors">
                  <Icon size={24} className="text-navy group-hover:text-red transition-colors" />
                </div>
                <h3 className="font-playfair font-bold text-navy text-xl">{service.name}</h3>
                <p className="text-slate text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-navy/90 transition-all hover:shadow-lg"
            >
              See All Services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
