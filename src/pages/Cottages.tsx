import React, { useState } from 'react';
import { Filter, Search, Sparkles } from 'lucide-react';
import CottageCard from '../components/CottageCard';
import { COTTAGES } from '../data/cottages';

export const Cottages: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Luxury Suite', 'Mountain Cottage', 'Timber Cabin', 'Family Villa', 'Heritage Suite', 'Glass Chalet'];

  const filteredCottages = COTTAGES.filter((c) => {
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.amenities.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15291E]/5 text-[#15291E] text-xs font-mono font-medium border border-[#15291E]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#C89D66]" />
            <span>9 Individual Accommodations</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C201D]">
            Our Luxury Cottages & Suites
          </h1>
          <p className="text-base text-[#3D4540] font-sans font-light leading-relaxed">
            Every cottage is privately situated across our mountain grounds, offering distinct architectural styles, stone fireplaces, and panoramic nature views.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="mt-12 p-4 bg-white rounded-2xl border border-[#EAE2D5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <Filter className="w-4 h-4 text-[#C89D66] flex-shrink-0 ml-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#15291E] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#FAF7F2] text-[#3D4540] hover:bg-[#EAE2D5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#6E7771] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by amenity or view..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#FAF7F2] border border-[#EAE2D5] rounded-full text-xs text-[#1C201D] focus:outline-none focus:border-[#15291E]"
            />
          </div>

        </div>

        {/* Cottage Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCottages.map((cottage, index) => (
            <CottageCard key={cottage.id} cottage={cottage} index={index} />
          ))}
        </div>

        {filteredCottages.length === 0 && (
          <div className="text-center py-16 text-[#6E7771] space-y-2">
            <p className="font-serif text-xl">No cottages match your filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-xs text-[#15291E] font-medium underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Cottages;
