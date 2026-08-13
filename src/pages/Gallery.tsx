import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';
import GalleryLightbox from '../components/GalleryLightbox';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15291E]/5 text-[#15291E] text-xs font-mono font-medium border border-[#15291E]/10">
            <Camera className="w-3.5 h-3.5 text-[#C89D66]" />
            <span>Property & Nature Gallery</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C201D]">
            Visual Moments of Anto's Comfort Residence
          </h1>
          <p className="text-base text-[#3D4540] font-sans font-light leading-relaxed">
            Take a visual tour through our private cottages, cozy stone hearth interiors, lush pine surroundings, and farm-fresh fireside dining.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="mt-10 flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#15291E] text-[#FAF7F2] shadow-md'
                  : 'bg-white text-[#3D4540] border border-[#EAE2D5] hover:bg-[#EAE2D5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className={`group relative rounded-2xl overflow-hidden bg-[#15291E]/10 border border-[#EAE2D5] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 ${
                item.aspectRatio === 'vertical'
                  ? 'sm:row-span-2 aspect-[3/4]'
                  : item.aspectRatio === 'square'
                  ? 'aspect-square'
                  : 'aspect-[16/10]'
              }`}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-end">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C89D66]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-xs font-sans text-white/80 font-light mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Component */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

    </div>
  );
};

export default Gallery;
