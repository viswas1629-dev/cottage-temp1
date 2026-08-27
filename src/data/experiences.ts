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
    title: "Campfire with music (speaker available)",
    subtitle: "Enjoy a warm campfire evening with family and friends in the cool Kodaikanal weather.",
    description: "Spend a relaxing evening around the campfire with your loved members.A speaker is available for music, making your evening more enjoyable. Enjoy the cool Kodaikanal weather and make beautiful memories together.",
    image: "https://images.squarespace-cdn.com/content/v1/64b52d0d262dd80bf3ba13d5/1706086637222-1RJ85CJPM8HLN7O8SZ9H/image-asset.jpeg",
    category: "Evening special",
    duration: "7:00 PM – 10:00 PM",
    timing: "Daily",
    highlights: ["🔥 Outdoor Campfire", "🔊 Speaker available", "👨‍👩‍👧‍👦 Family & Friends", "🌙 Peaceful Evening"]
  },
  {
    id: "exp-02",
    title: "Jeep Safari available for rental",
    subtitle: "Explore the scenic beauty of Kodaikanal with a comfortable jeep ride through the hills.",
    description: "Enjoy a memorable jeep ride through the beautiful hills and natural surroundings of Kodaikanal. Discover scenic viewpoints, peaceful mountain roads, and the beauty of nature with your family and friends.",
    image: "https://kodaijeepsafari.com/assets/images/homepage/sunrise-jeep-safari-in-kodaikanal.jpg",
    category: "Outdoor Activity",
    duration: "1.5 Hours",
    timing: "Morning 7:30 AM",
    highlights: ["🚙 Jeep available for rental", "🏔️ Scenic local routes", "🌿 Explore Nature & Surroundings", "📸 Beautiful Photo Spots"]
  },
  {
    id: "exp-03",
    title: "Travel desk available",
    subtitle: "Easy Travel To & From Our Residence.",
    description: "Get assistance with local travel and sightseeing arrangements during your stay. Our travel desk helps make exploring Kodaikanal simple and convenient.",
    image: "https://t4.ftcdn.net/jpg/04/25/71/31/360_F_425713122_kYvMiGtjoODQq5XoS7P6cZYDUx6hqtRR.jpg",
    category: "Customer Facility",
    duration: "Available on Request",
    timing: "Based on booking schedule",
    highlights: ["🚕 Pickup & drop available", "📍 Travel to nearby locations", "🕐 Local travel assistance", "💬 Contact us to arrange your ride"]
  },
  {
    id: "exp-04",
    title: "Food available for pre-order only",
    subtitle: "Farm-fresh South Indian & Continental meals.",
    description: "Enjoy freshly prepared meals during your stay at the cottage. Food arrangements are available on advance request at the time of booking. Since the meals are prepared based on pre-orders, last-minute food requests may not be possible.",
    image: "https://t3.ftcdn.net/jpg/08/23/85/92/360_F_823859281_TaiWjmCWf2xevl4hHuu0r5z25Zs82sH5.jpg",
    category: "Food Arrangements",
    duration: "On Request",
    timing: "Breakfast, Lunch & Dinner",
    highlights: ["🍛 Freshly Prepared Meals", "📅 Advance Order Required", "🏡 Homely Dining", "⚠️ No Last-Minute Orders"]
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
