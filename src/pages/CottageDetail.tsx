import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Users, BedDouble, Maximize2, Sparkles, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { COTTAGES } from '../data/cottages';
import WhatsAppButton from '../components/WhatsAppButton';
import CottageCard from '../components/CottageCard';
import { SITE_CONFIG } from '../config/site';

export const CottageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const cottage = COTTAGES.find((c) => c.id === id);

  if (!cottage) {
    return <Navigate to="/cottages" replace />;
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const currentImage = cottage.images[activeImageIndex] || cottage.images[0];

  // Related cottages (other rooms)
  const relatedCottages = COTTAGES.filter((c) => c.id !== cottage.id).slice(0, 3);

  return (
    <div className="pt-20 sm:pt-24 pb-20 bg-[#FAF7F2] min-h-screen">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/cottages"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#15291E] hover:text-[#C89D66] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Cottages</span>
        </Link>
      </div>

      {/* Main Room Presentation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        
        {/* Title & Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#EAE2D5]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 bg-[#15291E] text-[#FAF7F2] text-xs font-mono font-medium rounded-full">
                {cottage.shortName}
              </span>
              <span className="text-xs font-sans text-[#C89D66] font-medium uppercase tracking-wider">
                {cottage.category}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C201D]">
              {cottage.name}
            </h1>

            <p className="text-base text-[#3D4540] font-sans font-light max-w-2xl">
              {cottage.tagline}
            </p>
          </div>

          {/* Pricing & Primary WhatsApp CTA */}
          <div className="flex flex-col items-start md:items-end gap-3 bg-white p-6 rounded-2xl border border-[#EAE2D5] shadow-xs">
            <div className="text-left md:text-right">
              <span className="text-xs text-[#6E7771] block">Estimated Tariff</span>
              <span className="font-serif text-3xl font-bold text-[#15291E]">
                {cottage.priceNight} <span className="text-xs font-sans font-normal text-[#6E7771]">/ night</span>
              </span>
            </div>

            <WhatsAppButton
              roomName={cottage.name}
              label={`Enquire About ${cottage.shortName}`}
              size="lg"
              variant="primary"
            />
          </div>
        </div>

        {/* Gallery Image Viewer Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Display Image */}
          <div className="lg:col-span-9 relative aspect-[16/10] rounded-3xl overflow-hidden bg-black shadow-lg border border-[#EAE2D5]">
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {currentImage.caption && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-light">
                {currentImage.caption}
              </div>
            )}
          </div>

          {/* Image Thumbnails Sidebar */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
            {cottage.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[16/10] w-28 lg:w-full rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                  activeImageIndex === idx ? 'border-[#15291E] ring-2 ring-[#15291E]/20 scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>

        {/* Key Room Specs Bar */}
        <div className="mt-8 p-6 bg-white rounded-2xl border border-[#EAE2D5] shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-[#C89D66] flex-shrink-0" />
            <div>
              <span className="text-[#6E7771] block text-[11px]">Occupancy</span>
              <span className="font-semibold text-[#1C201D]">{cottage.capacity} Adults (Max {cottage.maxGuests})</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <BedDouble className="w-5 h-5 text-[#C89D66] flex-shrink-0" />
            <div>
              <span className="text-[#6E7771] block text-[11px]">Bed Configuration</span>
              <span className="font-semibold text-[#1C201D]">{cottage.bedType}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Maximize2 className="w-5 h-5 text-[#C89D66] flex-shrink-0" />
            <div>
              <span className="text-[#6E7771] block text-[11px]">Room Size</span>
              <span className="font-semibold text-[#1C201D]">{cottage.areaSqFt} sq ft</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#C89D66] flex-shrink-0" />
            <div>
              <span className="text-[#6E7771] block text-[11px]">View Perspective</span>
              <span className="font-semibold text-[#1C201D]">{cottage.view}</span>
            </div>
          </div>
        </div>

        {/* Room Description & Features Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Description & Special Features */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Description */}
            <div className="space-y-4 bg-white p-8 rounded-3xl border border-[#EAE2D5]">
              <h2 className="font-serif text-2xl font-semibold text-[#1C201D]">
                Room Experience & Atmosphere
              </h2>
              <p className="text-sm sm:text-base text-[#3D4540] font-sans font-light leading-relaxed">
                {cottage.longDescription}
              </p>
            </div>

            {/* Special Architectural Highlights */}
            <div className="space-y-4 bg-white p-8 rounded-3xl border border-[#EAE2D5]">
              <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">
                Special Highlights of {cottage.shortName}
              </h3>
              <div className="space-y-3">
                {cottage.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#3D4540]">
                    <CheckCircle2 className="w-5 h-5 text-[#15291E] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* All Room Amenities */}
            <div className="space-y-4 bg-white p-8 rounded-3xl border border-[#EAE2D5]">
              <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">
                Included Amenities
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cottage.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#FAF7F2] rounded-xl border border-[#EAE2D5] text-xs font-medium text-[#15291E] flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#C89D66]" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#15291E] text-[#FAF7F2] p-8 rounded-3xl space-y-6 shadow-xl border border-white/10">
              
              <div className="space-y-2 border-b border-white/10 pb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C89D66]">
                  Direct Reservation
                </span>
                <h3 className="font-serif text-3xl font-normal text-white">
                  Enquire for {cottage.shortName}
                </h3>
                <p className="text-xs font-sans text-white/70 font-light">
                  Clicking below will open WhatsApp with an automated enquiry message pre-filled for this specific room.
                </p>
              </div>

              <div className="space-y-3 text-xs text-white/80">
                <div className="flex items-center justify-between">
                  <span>Check-in:</span>
                  <span className="font-medium text-white">{SITE_CONFIG.checkInTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Check-out:</span>
                  <span className="font-medium text-white">{SITE_CONFIG.checkOutTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Contact Host:</span>
                  <span className="font-medium text-[#C89D66]">{SITE_CONFIG.whatsappDisplay}</span>
                </div>
              </div>

              <div className="pt-2">
                <WhatsAppButton
                  roomName={cottage.name}
                  label={`WhatsApp Enquiry for ${cottage.shortName}`}
                  fullWidth
                  size="lg"
                  variant="secondary"
                />
              </div>

              <p className="text-[11px] text-center text-white/50 font-light">
                ⚡ Fastest response time: usually within 15 minutes.
              </p>

            </div>
          </div>

        </div>

        {/* Related Accommodations */}
        <div className="mt-20 pt-12 border-t border-[#EAE2D5]">
          <h2 className="font-serif text-3xl font-normal text-[#1C201D] mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedCottages.map((rel, idx) => (
              <CottageCard key={rel.id} cottage={rel} index={idx} />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default CottageDetail;
