import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-hand text-red text-2xl">Come See Us</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-navy mt-2 mb-4">
            Find Us in San Pedro
          </h2>
          <p className="text-slate text-lg">We're right in the heart of the neighborhood.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Map */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <iframe
              title="Pacific Auto Repair Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d-118.2925!3d33.7367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd370b3e8d5555%3A0x0!2s678+W+6th+St%2C+San+Pedro%2C+CA+90731!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/40 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-red" />
              </div>
              <div>
                <p className="font-semibold text-navy mb-1">Address</p>
                <a
                  href={shopInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-red transition-colors"
                >
                  {shopInfo.address}<br />{shopInfo.city}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/40 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-red" />
              </div>
              <div>
                <p className="font-semibold text-navy mb-1">Phone</p>
                <a
                  href={`tel:${shopInfo.phone.replace(/\D/g, '')}`}
                  className="text-slate hover:text-red transition-colors text-lg font-medium"
                >
                  {shopInfo.phone}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/40 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-red" />
              </div>
              <div>
                <p className="font-semibold text-navy mb-1">Email</p>
                <a
                  href={`mailto:${shopInfo.email}`}
                  className="text-slate hover:text-red transition-colors"
                >
                  {shopInfo.email}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand/40 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-red" />
              </div>
              <div>
                <p className="font-semibold text-navy mb-2">Hours</p>
                <table className="text-sm">
                  <tbody>
                    {shopInfo.hours.map((h) => (
                      <tr key={h.day}>
                        <td className="text-navy font-medium pr-6 py-0.5">{h.day}</td>
                        <td className="text-slate">{h.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
