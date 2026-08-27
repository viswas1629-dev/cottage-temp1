import React from 'react';
import { Compass, Heart, Shield, Trees, Sparkles } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import { REVIEWS } from '../data/reviews';
import cottaBack from "../assets/images/cota-backs2.webp";

export const About: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15291E]/5 text-[#15291E] text-xs font-mono font-medium border border-[#15291E]/10">
            <Compass className="w-3.5 h-3.5 text-[#C89D66]" />
            <span>Our Story & Philosophy</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C201D]">
            Crafted for Peace, Privacy & Nature
          </h1>
          <p className="text-base text-[#3D4540] font-sans font-light leading-relaxed">
            Anto's Comfort Residence was born out of a desire to create a true mountain sanctuary — where human architecture blends seamlessly into the surrounding pine canopy.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE2D5] shadow-sm">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C201D]">
              Building Without Distributing the Forest
            </h2>
            <p className="text-sm sm:text-base text-[#3D4540] font-sans font-light leading-relaxed">
              When we first walked through this hillside parcel in Kodaikanal, we made a strict promise: not a single mature pine tree would be felled. Instead, our cottage were meticulously positioned around the natural contours of the rocks and trees.
            </p>
            <p className="text-sm text-[#3D4540] font-sans font-light leading-relaxed">
              Every stone used in our hearth fireplaces was reclaimed from local river beds, and all timber panelling is sourced from sustainable cedar plantations. The result is an accommodation that feels like it has organically belonged to the mountain for decades.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md img-zoom-container">
            <img
              src={cottaBack}
              alt="Anto's Comfort Residence architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-[#EAE2D5] space-y-4">
            <Shield className="w-8 h-8 text-[#C89D66]" />
            <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">Absolute Privacy</h3>
            <p className="text-xs text-[#6E7771] font-sans font-light leading-relaxed">
              Each cottage maintains wide buffer zones of native flora, ensuring complete visual and auditory privacy for every guest stay.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-[#EAE2D5] space-y-4">
            <Heart className="w-8 h-8 text-[#C89D66]" />
            <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">Warm Hospitality</h3>
            <p className="text-xs text-[#6E7771] font-sans font-light leading-relaxed">
              Our small host team is dedicated to personal service — from lighting your evening fireplace to brewing fresh filter coffee at dawn.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-[#EAE2D5] space-y-4">
            <Trees className="w-8 h-8 text-[#C89D66]" />
            <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">Eco-Conscious</h3>
            <p className="text-xs text-[#6E7771] font-sans font-light leading-relaxed">
              Rainwater harvesting, solar water heating, zero single-use plastics, and organic waste composting on property grounds.
            </p>
          </div>
        </div>

        {/* Reviews & Testimonials Section */}
        <div className="bg-[#15291E] text-[#FAF7F2] p-8 sm:p-12 rounded-3xl space-y-12 shadow-md">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C89D66]">
              Guest Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              Loved by Nature Seekers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 space-y-6">
                <div className="flex items-center gap-1 text-[#C89D66]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 fill-[#C89D66]" />
                  ))}
                </div>
                <p className="text-sm font-serif italic text-white/90 leading-relaxed">
                  "{rev.comment}"
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#C89D66]"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-white">{rev.author}</h4>
                    <span className="text-[11px] text-[#C89D66] block">{rev.roomBooked}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#15291E] text-[#FAF7F2] p-10 sm:p-14 rounded-3xl text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            We Look Forward to Welcoming You
          </h2>
          <p className="text-sm font-sans font-light text-white/80 max-w-lg mx-auto">
            Experience the natural charm of Kodaikanal at Anto's Comfort Residence. Connect with us directly on WhatsApp for enquiries and stay arrangements.
          </p>
          <div className="flex justify-center">
            <WhatsAppButton
              label="Talk to Our Host on WhatsApp"
              size="lg"
              variant="secondary"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
