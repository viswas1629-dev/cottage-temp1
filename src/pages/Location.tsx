import React from 'react';
import { MapPin, Sun, CloudRain } from 'lucide-react';
import LocationMap from '../components/LocationMap';
import WhatsAppButton from '../components/WhatsAppButton';

export const Location: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15291E]/5 text-[#15291E] text-xs font-mono font-medium border border-[#15291E]/10">
            <MapPin className="w-3.5 h-3.5 text-[#C89D66]" />
            <span>High Elevation Sanctuary</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C201D]">
            Getting to Anto's Comfort Residence
          </h1>
          <p className="text-base text-[#3D4540] font-sans font-light leading-relaxed">
            Perched at 7,200 feet above sea level in the Palani Hills of the Western Ghats. Peacefully tucked away from city crowds while remaining easily accessible by road.
          </p>
        </div>

        {/* Location Map Section */}
        <LocationMap />

        {/* Climate & Travel Seasons Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="bg-white p-8 rounded-3xl border border-[#EAE2D5] space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <Sun className="w-6 h-6 text-[#C89D66]" />
              <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">Best Time to Visit</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#3D4540] font-sans font-light leading-relaxed">
              Kodaikanal enjoys pleasant, crisp weather throughout the year. Spring & Summer (September to May) bring clear skies and cool breezes (15°C to 20°C). Monsoon season (June to August) paints the mountains in vibrant emerald hues with misty rain and cascading waterfalls.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EAE2D5] space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <CloudRain className="w-6 h-6 text-[#15291E]" />
              <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">Pick-up & Transfer Assistance</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#3D4540] font-sans font-light leading-relaxed">
              We can arrange private chauffeured car pick-up services from Madurai Airport, Coimbatore Airport, or Kodai Road Railway Station directly to our cottage gates upon request.
            </p>
            <div className="pt-2">
              <WhatsAppButton
                customMessage="Hello, I would like to enquire about transport pick-up assistance for my trip to Anto's Comfort Residence."
                label="Enquire for Taxi Transfer"
                size="sm"
                variant="outline"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Location;
