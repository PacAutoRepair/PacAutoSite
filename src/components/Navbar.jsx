import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/#about', label: 'About' },
    { to: '/#contact', label: 'Contact' },
  ];

  const activeLinkClass = ({ isActive }) =>
    isActive
      ? 'text-navy font-semibold border-b-2 border-red pb-0.5'
      : 'text-slate hover:text-navy transition-colors';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-sand shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="logo.svg"
              alt="Pacific Auto Repair Logo"
              className="h-10 w-10 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className="font-playfair font-bold text-navy text-lg leading-tight">
              Pacific Auto Repair
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={activeLinkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Phone CTA */}
          <a
            href={`tel:${shopInfo.phone.replace(/\D/g, '')}`}
            className="hidden md:flex items-center gap-2 bg-red text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            <Phone size={16} />
            {shopInfo.phone}
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-navy p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-sand px-4 pb-4">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-navy font-semibold text-lg'
                    : 'text-slate text-lg hover:text-navy'
                }
                onClick={() => setMenuOpen(false)}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${shopInfo.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 bg-red text-white px-4 py-2 rounded-lg font-semibold w-fit"
            >
              <Phone size={16} />
              {shopInfo.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
