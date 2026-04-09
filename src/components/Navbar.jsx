import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { shopInfo } from '../data/shopInfo';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/#about', label: 'About' },
    { to: '/#contact', label: 'Contact' },
  ];

  const activeLinkClass = ({ isActive }) =>
    isActive
      ? 'text-navy font-semibold'
      : 'text-slate hover:text-red transition-colors';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="logo.png"
              alt="Pacific Auto Repair Logo"
              className="h-10 w-10 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-navy text-lg leading-tight">
                Pacific Auto Repair
              </span>
              <span className="text-xs text-slate font-hand hidden sm:block">
                San Pedro, CA — Since 2004
              </span>
            </div>
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
            className="hidden md:flex items-center gap-2 bg-red text-white px-5 py-2 rounded-full font-semibold hover:bg-red/90 transition-all hover:shadow-md"
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
        <div className="md:hidden bg-white border-t border-sand px-4 pb-4 shadow-lg">
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
              className="flex items-center gap-2 bg-red text-white px-5 py-2.5 rounded-full font-semibold w-fit"
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
