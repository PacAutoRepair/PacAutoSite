import { Phone, Heart } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

export default function AppointmentBanner() {
  return (
    <section className="relative bg-red py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-hand text-white/80 text-xl flex items-center gap-2">
              <Heart size={18} /> We'd love to help
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
              Ready to Get Your Car Fixed?
            </h2>
            <p className="text-white/80 text-lg">
              Give us a call — no appointment needed for most services.
            </p>
          </div>
          <a
            href={`tel:${shopInfo.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-3 bg-white text-red px-8 py-4 rounded-full font-bold text-2xl sm:text-3xl hover:bg-cream transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <Phone size={28} />
            {shopInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
