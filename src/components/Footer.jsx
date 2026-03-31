import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Column 1: Logo + Tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="logo.svg"
                alt="Pacific Auto Repair"
                className="h-10 w-10 object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="font-playfair font-bold text-white text-lg">
                Pacific Auto Repair
              </span>
            </div>
            <p className="text-cream text-sm leading-relaxed opacity-80">
              Honest repairs. Fair prices. Your neighborhood shop.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-playfair font-bold text-white text-lg mb-1">Quick Links</h4>
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/#about', label: 'About' },
              { to: '/#contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-cream opacity-80 hover:opacity-100 text-sm transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-playfair font-bold text-white text-lg mb-1">Contact</h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={16} className="text-red mt-0.5 shrink-0" />
              <span className="text-cream opacity-80">
                {shopInfo.address}, {shopInfo.city}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-red shrink-0" />
              <a
                href={`tel:${shopInfo.phone.replace(/\D/g, '')}`}
                className="text-cream opacity-80 hover:opacity-100 transition-opacity"
              >
                {shopInfo.phone}
              </a>
            </div>
            <div className="text-sm text-cream opacity-70 mt-1">
              <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
              <p>Sat: 8:00 AM – 2:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white border-opacity-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-cream opacity-60">
          © 2025 Pacific Auto Repair. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
