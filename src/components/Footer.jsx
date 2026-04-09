import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Column 1: Logo + Tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="logo.png"
                alt="Pacific Auto Repair"
                className="h-11 w-11 object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="font-playfair font-bold text-white text-lg">
                Pacific Auto Repair
              </span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Honest repairs. Fair prices.<br />
              Your neighborhood auto shop since 2004.
            </p>
            <p className="font-hand text-gold text-lg">
              — Shawn &amp; Luis
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-playfair font-bold text-white text-lg mb-2">Quick Links</h4>
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/#about', label: 'About' },
              { to: '/#contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-cream/70 hover:text-gold text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-playfair font-bold text-white text-lg mb-2">Contact</h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <a
                href={shopInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-gold transition-colors"
              >
                {shopInfo.address}, {shopInfo.city}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-gold shrink-0" />
              <a
                href={`tel:${shopInfo.phone.replace(/\D/g, '')}`}
                className="text-cream/70 hover:text-gold transition-colors"
              >
                {shopInfo.phone}
              </a>
            </div>
            <div className="text-sm text-cream/60 mt-2 space-y-0.5">
              <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
              <p>Sat: 8:00 AM – 2:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} Pacific Auto Repair. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
