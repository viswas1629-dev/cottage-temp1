import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import cotaFronts1 from '../assets/images/cota-fronts1.webp';
import cotaBacks2 from '../assets/images/cota-backs2.webp';
import cotaS3 from '../assets/images/cota-s3.webp';
import cotaS4 from '../assets/images/cota-s4.webp';

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  location: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: cotaFronts1,
    title: "A Quiet Escape Into Nature.",
    subtitle: "Experience private luxury cottages surrounded by misty pine forests and mountain tranquility.",
    location: "Upper Lake Road, Kodaikanal"
  },
  {
    id: "slide-2",
    image: cotaBacks2,
    title: "Timeless Comfort in the Hills.",
    subtitle: "Stone fireplaces, teakwood interiors, and floor-to-ceiling vistas of the Western Ghats.",
    location: "Pambarpuram Ridge, Kodaikanal"
  },
  {
    id: "slide-3",
    image: cotaS3,
    title: "Awaken Above the Clouds.",
    subtitle: "Step out onto your private veranda as morning fog gently rolls through the valley.",
    location: "Pine Valley Viewpoint"
  },
  {
    id: "slide-4",
    image: cotaS4,
    title: "Fireside Evening Stargazing.",
    subtitle: "Gather around sunken stone fire pits beneath crystal clear, zero-light-pollution skies.",
    location: "Anto's Comfort Residence Grounds"
  }
];

const SLIDE_DURATION = 6000; // 6 seconds auto cycle

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section className="relative w-full h-screen min-h-[650px] overflow-hidden flex items-center justify-center bg-[#0F1D15]">
      
      {/* Background Slideshow Images */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
            }`}
            style={{
              transition: 'opacity 1.2s ease-in-out, transform 8s ease-out'
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center transform scale-105 animate-pulse-glow"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        );
      })}

      {/* Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0F1D15] via-black/40 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 z-20 bg-radial-vignette opacity-50 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center justify-center pt-16 sm:pt-20">
        
        {/* Location & Property Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide mb-6 animate-fadeIn">
          <MapPin className="w-4 h-4 text-[#C89D66]" />
          <span>{currentSlide.location}</span>
          <span className="w-1 h-1 rounded-full bg-white/50" />
          <span className="text-[#C89D66] flex items-center gap-1 font-serif italic">
            <Sparkles className="w-3 h-3 inline" /> 9 Private Cottages
          </span>
        </div>

        {/* Dynamic Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.08] text-white max-w-4xl drop-shadow-lg transition-all duration-700">
          {currentSlide.title}
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl font-sans text-white/85 max-w-2xl font-light leading-relaxed drop-shadow-md">
          {currentSlide.subtitle}
        </p>

        {/* CTA Button Group */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#accommodations"
            className="w-full sm:w-auto px-8 py-4 bg-[#FAF7F2] text-[#15291E] hover:bg-[#EAE2D5] font-semibold text-sm rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Accommodations</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <WhatsAppButton
            label="Enquire on WhatsApp"
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      {/* Progress Indicators (Requirement 7) */}
      <div className="absolute bottom-8 sm:bottom-12 inset-x-0 z-30 max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-3 sm:gap-6 items-center">
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(index)}
                className="group flex flex-col gap-1.5 text-left focus:outline-none cursor-pointer"
                aria-label={`Jump to slide ${index + 1}`}
              >
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono font-medium tracking-wider text-white/70 group-hover:text-white transition-colors">
                  <span>Image 0{index + 1}</span>
                  <span className="hidden sm:inline text-[10px] text-[#C89D66] font-sans">
                    {isActive ? 'Active' : ''}
                  </span>
                </div>

                {/* Progress bar line */}
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden relative">
                  {isActive ? (
                    <div
                      className="h-full bg-[#C89D66] rounded-full"
                      style={{
                        animation: `progressFill ${SLIDE_DURATION}ms linear`
                      }}
                    />
                  ) : (
                    <div className="h-full w-0 group-hover:w-full bg-white/40 transition-all duration-300" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Keyframe style for progress fill */}
      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
