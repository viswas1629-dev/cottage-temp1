export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  duration?: string;
  timing?: string;
  highlights: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-01",
    title: "Cozy Campfire Evenings",
    subtitle: "Enjoy a warm campfire evening with family and friends in the cool Kodaikanal weather.",
    description: "Spend a relaxing evening around the campfire with your loved ones. Enjoy the cool Kodaikanal weather, have some warm snacks, share stories, and make beautiful memories together.",
    image: "https://images.squarespace-cdn.com/content/v1/64b52d0d262dd80bf3ba13d5/1706086637222-1RJ85CJPM8HLN7O8SZ9H/image-asset.jpeg",
    category: "Evening Ritual",
    duration: "7:00 PM – 10:00 PM",
    timing: "Daily",
    highlights: ["🔥 Outdoor Campfire", "🌿 Natural Surroundings", "👨‍👩‍👧‍👦 Family & Friends", "🌙 Peaceful Evening"]
  },
  {
    id: "exp-02",
    title: "Pine Canopy Nature Walk",
    subtitle: "Guided morning strolls through private shola woodland trails.",
    description: "Immerse your senses in the therapeutic scents of eucalyptus, pine needles, and mountain ferns. Our resident naturalist guides you through gentle pathways to hidden natural stream spots.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1600",
    category: "Outdoor Activity",
    duration: "1.5 Hours",
    timing: "Morning 7:30 AM",
    highlights: ["Guided bird watching", "Eucalyptus forest bath", "Natural spring water stream", "Fresh morning tea on trail"]
  },
  {
    id: "exp-03",
    title: "Sunrise Cloud Ridge Trek",
    subtitle: "Hike up to Dolphin's Nose and watch morning fog rise over valleys.",
    description: "A breathtaking moderate morning trek taking you to panoramic viewpoints high above the clouds. Witness the first golden sunbeams piercing through the mist.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
    category: "Adventure",
    duration: "2.5 Hours",
    timing: "6:00 AM Departure",
    highlights: ["Panoramic cloud valley", "Guided safety trail", "Packed hot breakfast", "Photography assistance"]
  },
  {
    id: "exp-04",
    title: "Homely Dining Experience",
    subtitle: "Farm-fresh South Indian & Continental meals cooked with local mountain herbs.",
    description: "Enjoy freshly prepared meals during your stay at the cottage. Food arrangements are available on advance request at the time of booking. Since the meals are prepared based on prior orders, last-minute food requests may not be possible.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600",
    category: "Culinary",
    duration: "On Request",
    timing: "Breakfast, Lunch & Dinner",
    highlights: ["🍛 Freshly Prepared Meals", "📅 Advance Order Required", "🏡 Homely Dining", "⚠️ No Last-Minute Orders"]
  },
  {
    id: "exp-05",
    title: "Celestial Stargazing Sessions",
    subtitle: "High elevation, zero light pollution, crystal clear night sky.",
    description: "Because of our isolated mountain ridge location away from city lights, Anto's Comfort Residence offers prime conditions for telescope stargazing, observing constellations, and spotting shooting stars.",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=1600",
    category: "Mindfulness",
    duration: "8:30 PM Onwards",
    timing: "Clear Sky Nights",
    highlights: ["High-power telescope access", "Constellation map guidance", "Zero light pollution zone", "Cozy wool blankets"]
  },
  {
    id: "exp-06",
    title: "Forest Bathing & Spa Therapy",
    subtitle: "Deep relaxation massage using native pine and lavender oils.",
    description: "Rejuvenate your body and mind with bespoke aromatherapy massages performed by certified wellness therapists in the privacy of your cottage balcony room.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1600",
    category: "Wellness",
    duration: "60 / 90 Mins",
    timing: "Prior Appointment",
    highlights: ["Native essential oils", "In-room private setup", "Deep tissue & Swedish therapy", "Herbal steam bath"]
  }
];
