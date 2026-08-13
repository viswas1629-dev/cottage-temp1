import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Flame, Trees, Compass, ArrowRight, Coffee, Moon } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import CottageCard from '../components/CottageCard';
import LocationMap from '../components/LocationMap';
import WhatsAppButton from '../components/WhatsAppButton';
import { COTTAGES } from '../data/cottages';
import { EXPERIENCES } from '../data/experiences';
import { GALLERY_ITEMS } from '../data/gallery';
import { REVIEWS } from '../data/reviews';

export const Home: React.FC = () => {
  const featuredCottages = COTTAGES.filter(c => c.featured);
  const galleryPreview = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="w-full bg-[#FAF7F2]">
      
      {/* 1. Cinematic Hero */}
      <HeroSlider />

      {/* 2. Property Introduction Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15291E]/5 text-[#15291E] text-xs font-mono font-medium border border-[#15291E]/10">
              <Compass className="w-3.5 h-3.5 text-[#C89D66]" />
              <span>Welcome to Anto's Comfort Residence </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-[#1C201D]">
              A Sanctuary Built in Harmony With Misty Pine Forests.
            </h2>

            <p className="text-base text-[#3D4540] font-sans font-light leading-relaxed">
              Tucked away on a quiet mountain ridge in Kodaikanal, Anto's Comfort Residence is an exclusive collection of 9 standalone luxury cottages. Each accommodation is thoughtfully crafted with natural river stone, fragrant cedar timber, and floor-to-ceiling glass walls that welcome the morning mist.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#EAE2D5]">
              <div>
                <span className="font-serif text-3xl font-bold text-[#15291E] block">9</span>
                <span className="text-xs text-[#6E7771] font-sans uppercase tracking-wider">Private Cottages</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-[#15291E] block">7,200 ft</span>
                <span className="text-xs text-[#6E7771] font-sans uppercase tracking-wider">Mountain Elevation</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#15291E] hover:text-[#C89D66] transition-colors group"
              >
                <span>Read Our Story & Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE2D5] img-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Cottage interior bedroom"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Overlay Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#15291E] text-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block border border-white/10">
              <div className="flex items-center gap-1 text-[#C89D66] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="w-4 h-4 fill-[#C89D66]" />
                ))}
              </div>
              <p className="text-xs font-serif italic text-white/90">
                "Pure peace. Waking up to pine trees through floor-to-ceiling glass was an unforgettable experience."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Featured Cottages / Rooms */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C89D66] font-medium">
                Our Accommodations
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C201D]">
                Explore Our Signature Rooms & Suites
              </h2>
              <p className="text-sm text-[#3D4540] font-sans font-light">
                Select from 9 unique rooms — from glass chalets hovering over clouds to cozy stone fireplaces.
              </p>
            </div>

            <Link
              to="/cottages"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#15291E] text-[#FAF7F2] hover:bg-[#1D3829] rounded-full text-sm font-semibold transition-all shadow-md self-start md:self-auto"
            >
              <span>View All 9 Cottages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cottage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCottages.map((cottage, index) => (
              <CottageCard key={cottage.id} cottage={cottage} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Stay With Us (USPs) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C89D66] font-medium">
            The Anto's Comfort Residence Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C201D]">
            Thoughtfully Curated For Peace & Rest
          </h2>
          <p className="text-sm text-[#3D4540] font-sans font-light">
            Every feature at our cottage stay is designed to help you disconnect from stress and reconnect with nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-8 bg-white rounded-2xl border border-[#EAE2D5] shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="p-3 bg-[#15291E]/5 text-[#15291E] rounded-xl w-fit">
              <Flame className="w-6 h-6 text-[#C89D66]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">Wood Fireplaces</h3>
            <p className="text-xs text-[#6E7771] font-sans leading-relaxed font-light">
              Every room features authentic wood fireplaces or cast-iron wood stoves for cozy mountain evenings.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-[#EAE2D5] shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="p-3 bg-[#15291E]/5 text-[#15291E] rounded-xl w-fit">
              <Trees className="w-6 h-6 text-[#C89D66]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">Panoramic Views</h3>
            <p className="text-xs text-[#6E7771] font-sans leading-relaxed font-light">
              Floor-to-ceiling glass windows and private balconies overlooking misty pine canyons and flower valleys.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-[#EAE2D5] shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="p-3 bg-[#15291E]/5 text-[#15291E] rounded-xl w-fit">
              <Moon className="w-6 h-6 text-[#C89D66]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">Stargazing Skies</h3>
            <p className="text-xs text-[#6E7771] font-sans leading-relaxed font-light">
              Zero light pollution location ideal for telescope observation, shooting stars, and clear night skies.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-[#EAE2D5] shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="p-3 bg-[#15291E]/5 text-[#15291E] rounded-xl w-fit">
              <Coffee className="w-6 h-6 text-[#C89D66]" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">Fireside Dining</h3>
            <p className="text-xs text-[#6E7771] font-sans leading-relaxed font-light">
              Farm-to-table South Indian & Continental food prepared fresh with local herbs and served in your private room.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Scroll-Driven Nature Parallax Banner (Requirement 10) */}
      <section className="relative py-28 sm:py-36 bg-[#0F1D15] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000"
            alt="Misty forest depth"
            className="w-full h-full object-cover transform scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1D15] via-[#0F1D15]/80 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C89D66]">
              Immersion in Nature
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-tight text-white">
              Listen to the Pine Breeze & Mountain Streams.
            </h2>
            <p className="text-base text-white/80 font-sans font-light leading-relaxed">
              Step outside your veranda into clean, crisp 7,000 ft mountain air. Breathe in fresh eucalyptus notes, hear wild birds singing in morning canopy, and experience deep restful sleep.
            </p>
            <div className="pt-4">
              <WhatsAppButton
                label="Enquire About Availability"
                size="lg"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Experiences Preview */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C89D66] font-medium">
              Curated Activities
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C201D]">
              Nature & Fireside Experiences
            </h2>
          </div>
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#15291E] hover:text-[#C89D66]"
          >
            <span>Explore All Experiences</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCES.slice(0, 3).map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EAE2D5] shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[11px] font-mono text-[#C89D66] uppercase tracking-wider">
                  {exp.category}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">
                  {exp.title}
                </h3>
                <p className="text-xs text-[#6E7771] font-sans font-light line-clamp-2">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Gallery Preview Grid */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C89D66] font-medium">
              Visual Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C201D]">
              Moments at Anto's Comfort Residence
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((item) => (
              <div key={item.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-white text-xs font-serif font-medium">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#15291E] text-white hover:bg-[#1D3829] rounded-full text-sm font-semibold transition-all shadow-md"
            >
              <span>Open Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Location Preview Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <LocationMap />
      </section>

      {/* 9. Reviews & Testimonials */}
      <section className="py-20 bg-[#15291E] text-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
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
      </section>

      {/* 10. Final WhatsApp CTA Banner */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#EAE2D5]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C89D66] font-medium">
            Plan Your Stay
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C201D]">
            Ready for a Quiet Escape into Nature?
          </h2>
          <p className="text-base text-[#3D4540] font-sans font-light max-w-xl mx-auto">
            Contact us directly on WhatsApp to check live availability, discuss room features, or reserve your stay.
          </p>
          <div className="pt-4 flex justify-center">
            <WhatsAppButton
              label="Instant WhatsApp Enquiry"
              size="lg"
              variant="primary"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
