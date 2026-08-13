import React from 'react';
import { Flame, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/experiences';
import WhatsAppButton from '../components/WhatsAppButton';

export const Experiences: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15291E]/5 text-[#15291E] text-xs font-mono font-medium border border-[#15291E]/10">
            <Flame className="w-3.5 h-3.5 text-[#C89D66]" />
            <span>Curated Nature & Hospitality</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C201D]">
            Experiences at Anto's Comfort Residence
          </h1>
          <p className="text-base text-[#3D4540] font-sans font-light leading-relaxed">
            From evening campfires under starry skies to guided morning treks above the cloud line, immerse yourself in authentic mountain living.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="mt-14 space-y-16">
          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-[#EAE2D5] shadow-sm hover:shadow-md transition-shadow`}
              >
                
                {/* Media Image */}
                <div className={`lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md img-zoom-container ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#15291E] text-[#FAF7F2] px-3.5 py-1 rounded-full text-xs font-mono">
                    {exp.category}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C201D]">
                    {exp.title}
                  </h2>

                  <p className="text-sm text-[#C89D66] font-medium italic">
                    "{exp.subtitle}"
                  </p>

                  <p className="text-sm text-[#3D4540] font-sans font-light leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Timing metadata */}
                  <div className="flex items-center gap-6 text-xs text-[#6E7771] pt-2 border-t border-[#EAE2D5]">
                    {exp.duration && (
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#15291E]" />
                        <span>Duration: {exp.duration}</span>
                      </div>
                    )}
                    {exp.timing && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#15291E]" />
                        <span>Timing: {exp.timing}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights list */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#1C201D] font-medium pt-2">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C89D66] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <WhatsAppButton
                      customMessage={`Hello, I would like to enquire about experiencing ${exp.title} during my stay at Anto's Comfort Residence.`}
                      label={`Enquire About ${exp.title}`}
                      size="sm"
                      variant="primary"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Experiences;
