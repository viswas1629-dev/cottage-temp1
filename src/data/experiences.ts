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
    category: "Evening special",
    duration: "7:00 PM – 10:00 PM",
    timing: "Daily",
    highlights: ["🔥 Outdoor Campfire", "🌿 Natural Surroundings", "👨‍👩‍👧‍👦 Family & Friends", "🌙 Peaceful Evening"]
  },
  {
    id: "exp-02",
    title: "Kodaikanal Jeep Safari",
    subtitle: "Explore the scenic beauty of Kodaikanal with a comfortable jeep ride through the hills.",
    description: "Enjoy a memorable jeep ride through the beautiful hills and natural surroundings of Kodaikanal. Discover scenic viewpoints, peaceful mountain roads, and the beauty of nature with your family and friends.",
    image: "https://kodaijeepsafari.com/assets/images/homepage/sunrise-jeep-safari-in-kodaikanal.jpg",
    category: "Outdoor Activity",
    duration: "1.5 Hours",
    timing: "Morning 7:30 AM",
    highlights: ["🚙 Comfortable Jeep Ride", "🏔️ Scenic Mountain Views", "🌿 Explore Nature & Surroundings", "📸 Beautiful Photo Spots"]
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
    category: "Food Arrangements",
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
    title: "Convenient Parking Space",
    subtitle: "A comfortable and convenient parking space for guests staying at the cottage.",
    description: "Guests can park their vehicles safely and conveniently within the cottage premises. The parking area offers a decent amount of space for guests arriving by car, making your stay more comfortable and hassle-free.",
    image: "https://media-cdn.tripadvisor.com/media/photo-o/0d/c5/a7/4e/car-parking.jpg",
    category: "Wellness",
    duration: "60 / 90 Mins",
    timing: "Prior Appointment",
    highlights: ["🚗 On-Site Parking", "🅿️ Decent Parking Space", "🏡 Within the Property", "🛣️ Easy Vehicle Access"]
  }
];
