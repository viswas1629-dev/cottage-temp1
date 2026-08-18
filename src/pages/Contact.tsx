import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, Sun, CloudRain } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import WhatsAppButton from '../components/WhatsAppButton';
import LocationMap from '../components/LocationMap';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomInterest: 'Any Cottage',
    dates: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15291E]/5 text-[#15291E] text-xs font-mono font-medium border border-[#15291E]/10">
            <MessageCircle className="w-3.5 h-3.5 text-[#C89D66]" />
            <span>Location, Directions & Reservations</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#1C201D]">
            Contact & Directions
          </h1>
          <p className="text-base text-[#3D4540] font-sans font-light leading-relaxed">
            Perched at 7,200 feet in Kodaikanal. Have questions about room availability, directions, transport pick-up, or stay dates? Contact our team directly.
          </p>
        </div>

        {/* Contact Info Cards + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#15291E] text-[#FAF7F2] p-8 rounded-3xl space-y-6 shadow-md border border-white/10">
              <h2 className="font-serif text-3xl font-normal text-white">
                Quickest Contact
              </h2>
              <p className="text-xs font-sans text-white/80 font-light leading-relaxed">
                For immediate responses regarding cottage availability and booking details, WhatsApp is our primary channel.
              </p>
              
              <div className="pt-2">
                <WhatsAppButton
                  label="Message Us on WhatsApp"
                  size="lg"
                  variant="secondary"
                  fullWidth
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#EAE2D5] space-y-6 shadow-xs">
              <h3 className="font-serif text-2xl font-semibold text-[#1C201D]">
                Contact & Address
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#3D4540]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C89D66] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#1C201D]">Property Address</h4>
                    <p className="text-[#6E7771] font-light mt-0.5">{SITE_CONFIG.location.address}</p>
                    <p className="text-[11px] text-[#C89D66] font-medium mt-1">{SITE_CONFIG.location.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#EAE2D5]">
                  <Phone className="w-5 h-5 text-[#C89D66] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#1C201D]">Phone / WhatsApp</h4>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#15291E] font-medium hover:underline">
                      {SITE_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#EAE2D5]">
                  <Mail className="w-5 h-5 text-[#C89D66] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#1C201D]">Email Address</h4>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#15291E] font-medium hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Frontend Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE2D5] shadow-sm">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-[#15291E] mx-auto" />
                <h3 className="font-serif text-3xl font-semibold text-[#1C201D]">
                  Enquiry Received!
                </h3>
                <p className="text-sm text-[#3D4540] max-w-md mx-auto font-light">
                  Thank you for reaching out. Our team will contact you shortly. For immediate assistance, feel free to use WhatsApp.
                </p>
                <div className="pt-4 flex justify-center">
                  <WhatsAppButton
                    label="Open WhatsApp Now"
                    size="md"
                    variant="primary"
                  />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl font-semibold text-[#1C201D]">
                    Send an Online Enquiry
                  </h2>
                  <p className="text-xs text-[#6E7771] font-sans font-light">
                    Fill out your details below and we will get back to you with tariff and stay options.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#1C201D]">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE2D5] rounded-xl text-xs text-[#1C201D] focus:outline-none focus:border-[#15291E]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#1C201D]">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE2D5] rounded-xl text-xs text-[#1C201D] focus:outline-none focus:border-[#15291E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#1C201D]">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE2D5] rounded-xl text-xs text-[#1C201D] focus:outline-none focus:border-[#15291E]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#1C201D]">Cottage Preference</label>
                    <select
                      value={formData.roomInterest}
                      onChange={(e) => setFormData({ ...formData, roomInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE2D5] rounded-xl text-xs text-[#1C201D] focus:outline-none focus:border-[#15291E]"
                    >
                      <option value="Any Cottage">Any Cottage (Recommend me)</option>
                      <option value="Room 01 — Pine Valley Suite">Room 01 — Pine Valley Suite</option>
                      <option value="Room 02 — Mist View Cottage">Room 02 — Mist View Cottage</option>
                      <option value="Room 03 — Cedar Ridge Cabin">Room 03 — Cedar Ridge Cabin</option>
                      <option value="Room 04 — Forest Canopy Villa">Room 04 — Forest Canopy Villa</option>
                      <option value="Room 05 — Heritage Stone Suite">Room 05 — Heritage Stone Suite</option>
                      <option value="Room 06 — Meadow Edge Cottage">Room 06 — Meadow Edge Cottage</option>
                      <option value="Room 07 — Cloud Peak Chalet">Room 07 — Cloud Peak Chalet</option>
                      <option value="Room 08 — Stream Side Sanctuary">Room 08 — Stream Side Sanctuary</option>
                      <option value="Room 09 — Whispering Pines Suite">Room 09 — Whispering Pines Suite</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#1C201D]">Intended Dates / Message</label>
                  <textarea
                    rows={4}
                    placeholder="Provide preferred check-in dates and number of guests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE2D5] rounded-xl text-xs text-[#1C201D] focus:outline-none focus:border-[#15291E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#15291E] text-[#FAF7F2] hover:bg-[#1D3829] font-semibold text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Online Enquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Location Map Section */}
        <div className="pt-8">
          <LocationMap />
        </div>

        {/* Climate & Transport Pick-up Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
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
                customMessage="Hello, I would like to enquire about transport pick-up assistance for my trip to Kodai Haven."
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

export default Contact;
