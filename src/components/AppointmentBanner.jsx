import { Phone } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

export default function AppointmentBanner() {
  return (
    <section className="bg-red py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
            Ready to Schedule?
          </h2>
          <div className="flex flex-col items-center md:items-end gap-1">
            <a
              href={`tel:${shopInfo.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-3 text-white font-bold text-3xl sm:text-4xl hover:opacity-90 transition-opacity"
            >
              <Phone size={36} />
              {shopInfo.phone}
            </a>
            <p className="text-white text-opacity-90 text-sm">
              Call us to make an appointment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
