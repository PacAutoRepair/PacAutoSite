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
    <section className="bg-sand py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-3">What We Do</h2>
          <p className="text-slate text-lg">
            From quick oil changes to full engine work — we handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((service) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-sm border border-sand p-6 flex flex-col gap-3"
              >
                <Icon size={32} className="text-navy" />
                <h3 className="font-playfair font-bold text-navy text-lg">{service.name}</h3>
                <p className="text-slate text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="text-red font-semibold text-lg hover:underline"
            >
              See All Services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
