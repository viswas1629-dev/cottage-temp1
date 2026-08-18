import React from 'react';
import { Users, BedDouble } from 'lucide-react';
import type { BedroomCategory } from '../data/bedrooms';
import WhatsAppButton from './WhatsAppButton';

interface BedroomCardProps {
  bedroom: BedroomCategory;
  index?: number;
}

export const BedroomCard: React.FC<BedroomCardProps> = ({ bedroom, index = 0 }) => {
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-[#EAE2D5] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1.5"
    >
      {/* Bedroom Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#15291E]/10 img-zoom-container">
        <img
          src={bedroom.image}
          alt={bedroom.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading={index === 0 ? 'eager' : 'lazy'}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Title Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3.5 py-1 bg-[#15291E]/90 backdrop-blur-md text-[#FAF7F2] text-xs font-mono font-medium rounded-full border border-white/20">
            {bedroom.name}
          </span>
        </div>

        {/* Capacity Pill */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-xs font-medium">
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <Users className="w-3.5 h-3.5 text-[#C89D66]" />
            <span>{bedroom.capacity}</span>
          </div>
        </div>
      </div>

      {/* Card Content Section */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between bg-[#FAF7F2]/50">
        <div className="space-y-3">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-3xl font-semibold text-[#1C201D] leading-tight">
              {bedroom.name}
            </h3>
            <BedDouble className="w-5 h-5 text-[#C89D66]" />
          </div>

          <p className="text-xs font-mono uppercase tracking-widest text-[#C89D66] font-medium">
            {bedroom.tagline}
          </p>

          {/* Simple Indian-friendly English Description */}
          <p className="text-sm text-[#3D4540] font-sans font-light leading-relaxed">
            {bedroom.description}
          </p>

        </div>

        {/* Dynamic WhatsApp Booking Button */}
        <div className="mt-8 pt-6 border-t border-[#EAE2D5]">
          <WhatsAppButton
            roomName={bedroom.name}
            label={`${bedroom.whatsappLabel}`}
            size="lg"
            variant="primary"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default BedroomCard;
