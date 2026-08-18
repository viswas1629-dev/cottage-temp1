import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, Phone, Mail, ArrowUpRight, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { COTTAGES } from '../data/cottages';
import WhatsAppButton from './WhatsAppButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F1D15] text-[#FAF7F2] pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C89D66]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="p-2.5 rounded-full bg-white/10 text-white border border-white/20 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-sans text-[#C89D66]">
                  Cottage & Nature Stay
                </span>
              </div>
            </Link>

            <p className="text-sm font-sans text-white/75 font-light leading-relaxed max-w-md">
              A private luxury retreat offering 9 individual rooms surrounded by pine forests, mountain mist, and stargazing skies in Kodaikanal. Experience serenity without compromise.
            </p>

            <div className="pt-2">
              <WhatsAppButton
                label="Direct WhatsApp Enquiry"
                size="md"
                variant="secondary"
              />
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#C89D66] tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-white/80 font-light">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/cottages" className="hover:text-white transition-colors">Cottages & Rooms</Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-white transition-colors">Nature Experiences</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About {SITE_CONFIG.name}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Directions</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Cottages List */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#C89D66] tracking-wide">
              Our 9 Accommodations
            </h4>
            <ul className="space-y-2 text-xs font-sans text-white/75 font-light">
              {COTTAGES.slice(0, 7).map((room) => (
                <li key={room.id}>
                  <Link
                    to={`/cottages/${room.id}`}
                    className="hover:text-[#C89D66] transition-colors flex items-center justify-between"
                  >
                    <span className="truncate">{room.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-50 flex-shrink-0 ml-1" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/cottages"
                  className="text-[#C89D66] hover:underline font-medium block pt-1"
                >
                  View All 9 Cottages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#C89D66] tracking-wide">
              Reach Out
            </h4>
            <div className="space-y-3 text-xs font-sans text-white/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89D66] flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89D66] flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white">
                  {SITE_CONFIG.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C89D66] flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Social Handles */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 text-white hover:bg-[#C89D66] hover:text-[#15291E] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 text-white hover:bg-[#C89D66] hover:text-[#15291E] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-sans gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name} Cottages. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer">House Rules</span>
          </div>

          <p className="flex items-center gap-1">
            Crafted for <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline" /> Nature Lovers
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
