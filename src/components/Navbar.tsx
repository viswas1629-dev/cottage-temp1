import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import WhatsAppButton from './WhatsAppButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Dynamic header styling based on scroll and route
  const getHeaderBackground = () => {
    if (mobileMenuOpen) return 'bg-[#0F1D15] text-[#FAF7F2] border-b border-white/10';
    if (isScrolled) {
      return 'bg-[#FAF7F2]/95 backdrop-blur-md text-[#1C201D] shadow-md border-b border-[#EAE2D5] py-3';
    }
    if (isHomePage) {
      return 'bg-gradient-to-b from-black/70 via-black/30 to-transparent text-[#FAF7F2] py-5';
    }
    return 'bg-[#FAF7F2] text-[#1C201D] border-b border-[#EAE2D5] py-4';
  };

  const getTextColor = (path: string) => {
    const isActive = location.pathname === path;
    if (isScrolled || !isHomePage) {
      return isActive
        ? 'text-[#15291E] font-semibold border-b-2 border-[#15291E]'
        : 'text-[#3D4540] hover:text-[#15291E]';
    }
    return isActive
      ? 'text-white font-semibold border-b-2 border-[#C89D66]'
      : 'text-[#FAF7F2]/80 hover:text-white';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${getHeaderBackground()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Anto's Comfort Residence Home"
          >
            <div className={`p-2 rounded-full transition-transform duration-300 group-hover:scale-105 ${
              isScrolled || (!isHomePage && !mobileMenuOpen)
                ? 'bg-[#15291E] text-[#FAF7F2]'
                : 'bg-white/10 text-white backdrop-blur-sm border border-white/20'
            }`}>
              <Compass className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none ${
                isScrolled || (!isHomePage && !mobileMenuOpen) ? 'text-[#15291E]' : 'text-white'
              }`}>
                {SITE_CONFIG.name}
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-sans mt-0.5 ${
                isScrolled || (!isHomePage && !mobileMenuOpen) ? 'text-[#6E7771]' : 'text-white/70'
              }`}>
                Cottage & Nature Stay
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-1 transition-colors duration-200 ${getTextColor(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className={`text-xs font-medium flex items-center gap-1.5 transition-colors ${
                isScrolled || !isHomePage ? 'text-[#3D4540] hover:text-[#15291E]' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.whatsappDisplay}</span>
            </a>
            
            <WhatsAppButton
              label="Book / Enquire"
              size="sm"
              variant={isScrolled || !isHomePage ? 'primary' : 'secondary'}
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <WhatsAppButton
              label="Enquire"
              size="sm"
              variant={isScrolled || !isHomePage ? 'primary' : 'secondary'}
              showArrow={false}
              className="px-3 py-1.5 text-xs"
            />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled || (!isHomePage && !mobileMenuOpen)
                  ? 'text-[#15291E] hover:bg-[#EAE2D5]'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Full Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#0F1D15] text-[#FAF7F2] z-50 flex flex-col justify-between px-6 py-8 animate-fadeIn overflow-y-auto">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#C89D66] font-medium border-b border-white/10 pb-2">
              Navigation Menu
            </p>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-serif tracking-wide py-1 flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#C89D66] font-medium pl-2 border-l-2 border-[#C89D66]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="text-xs uppercase font-sans tracking-widest bg-[#C89D66]/20 px-2 py-0.5 rounded text-[#C89D66]">Active</span>}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-white/50">Location</span>
              <span className="text-sm font-medium text-white/90">Kodaikanal, Tamil Nadu, India</span>
            </div>

            <WhatsAppButton
              label="Quick WhatsApp Enquiry"
              fullWidth
              size="lg"
              variant="secondary"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
