import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/gallery';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];
  const total = items.length;

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + total) % total);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn">
      {/* Top Header Control Bar */}
      <div className="flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono tracking-wider">
            {currentIndex + 1} / {total}
          </span>
          <span className="text-xs uppercase tracking-widest text-[#C89D66] font-medium hidden sm:inline">
            {currentItem.category}
          </span>
        </div>

        <h3 className="font-serif text-lg font-normal text-white truncate max-w-xs sm:max-w-md hidden md:block">
          {currentItem.title}
        </h3>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Display */}
      <div className="relative flex-grow flex items-center justify-center my-4 overflow-hidden">
        <img
          src={currentItem.url}
          alt={currentItem.title}
          className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-300"
        />

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all focus:outline-none cursor-pointer"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 transition-all focus:outline-none cursor-pointer"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption & Details Bar */}
      <div className="text-center text-white/90 z-10 max-w-2xl mx-auto space-y-1 pb-2">
        <h4 className="font-serif text-xl sm:text-2xl font-medium text-white">
          {currentItem.title}
        </h4>
        {currentItem.caption && (
          <p className="text-xs sm:text-sm font-sans text-white/70 font-light">
            {currentItem.caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default GalleryLightbox;
