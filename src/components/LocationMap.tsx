import React from 'react';
import { MapPin, Navigation, Car, Plane, Train, Compass, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

const NEARBY_SPOTS = [
  { name: "Kodaikanal Lake", distance: "3.2 km", time: "8 mins drive" },
  { name: "Fairy Falls & Stream", distance: "1.1 km", time: "12 mins walk" },
  { name: "Coaker's Walk & Viewpoint", distance: "4.0 km", time: "12 mins drive" },
  { name: "Bryant Park Botanical Gardens", distance: "3.5 km", time: "10 mins drive" },
  { name: "Pillar Rocks & Guna Caves", distance: "9.5 km", time: "22 mins drive" },
  { name: "Pine Forest Walkway", distance: "7.0 km", time: "18 mins drive" }
];

export const LocationMap: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl border border-[#EAE2D5] shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side Details */}
        <div className="lg:col-span-5 p-8 sm:p-10 bg-[#15291E] text-[#FAF7F2] flex flex-col justify-between">
          <div className="space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono text-[#C89D66] border border-white/10">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location & Surroundings</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-white">
              Secluded in Nature, Accessible by Road
            </h3>

            <p className="text-sm font-sans text-white/80 font-light leading-relaxed">
              Anto's Comfort Residence is situated in the peaceful Pambarpuram valley enclave, safely secluded from traffic noise while remaining just minutes away from Kodaikanal's main lake and dining spots.
            </p>

            <div className="pt-4 border-t border-white/10 space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C89D66] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Address</h4>
                  <p className="text-white/70 font-light mt-0.5">{SITE_CONFIG.location.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#C89D66] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Landmark</h4>
                  <p className="text-white/70 font-light mt-0.5">{SITE_CONFIG.location.landmark}</p>
                </div>
              </div>
            </div>

            {/* Travel Options */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-mono text-[#C89D66]">How to Reach Us</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <Car className="w-4 h-4 text-[#C89D66] mb-1" />
                  <span className="font-medium block text-white">By Car / Taxi</span>
                  <span className="text-[11px] text-white/60">Direct highway road</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <Train className="w-4 h-4 text-[#C89D66] mb-1" />
                  <span className="font-medium block text-white">Kodai Road Station</span>
                  <span className="text-[11px] text-white/60">80 km (2 hrs)</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <Plane className="w-4 h-4 text-[#C89D66] mb-1" />
                  <span className="font-medium block text-white">Madurai Airport</span>
                  <span className="text-[11px] text-white/60">125 km (3 hrs)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Map Button */}
          <div className="pt-8">
            <a
              href={SITE_CONFIG.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-[#C89D66] hover:bg-[#D8AE77] text-[#15291E] font-semibold text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 group shadow-md"
            >
              <Navigation className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Right Side Map Preview & Nearby Spots */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 bg-[#FAF7F2]">
          
          {/* Simulated Map Graphic Container */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#EAE2D5] shadow-inner group">
            {/* Styled Map Preview background */}
            <iframe
              title="Anto's Comfort Residence Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62828.14856011388!2d77.46467389278918!3d10.23812543977322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0766637f8f94d9%3A0xb3ef31d044238e88!2sKodaikanal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(0.9)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nearby Key Attractions Grid */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-xl font-semibold text-[#1C201D]">
                Nearby Attractions & Distances
              </h4>
              <span className="text-xs text-[#6E7771] font-sans">Ideal day trips</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {NEARBY_SPOTS.map((spot, index) => (
                <div
                  key={index}
                  className="p-3 bg-white rounded-xl border border-[#EAE2D5] hover:border-[#15291E]/30 transition-colors shadow-2xs"
                >
                  <span className="font-medium text-[#1C201D] block truncate">{spot.name}</span>
                  <div className="flex items-center justify-between text-[11px] text-[#6E7771] mt-1">
                    <span className="text-[#15291E] font-semibold">{spot.distance}</span>
                    <span>{spot.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LocationMap;
