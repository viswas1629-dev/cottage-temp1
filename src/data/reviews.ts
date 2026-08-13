export interface Review {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  roomBooked: string;
  comment: string;
  avatar: string;
}

export const REVIEWS: Review[] = [
  {
    id: "rev-01",
    author: "Ananya & Siddharth Sharma",
    location: "Bengaluru",
    date: "July 2026",
    rating: 5,
    roomBooked: "Room 01 — Pine Valley Suite",
    comment: "Anto's Comfort Residence exceeded every expectation! Waking up inside the Pine Valley Suite with morning mist right outside our glass wall was pure magic. The fireplace, hot tea, and prompt WhatsApp hospitality made our anniversary trip unforgettable.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "rev-02",
    author: "Vikram Menon",
    location: "Chennai",
    date: "June 2026",
    rating: 5,
    roomBooked: "Room 07 — Cloud Peak Chalet",
    comment: "The privacy and tranquility here are unmatched. Perched high above the valley in Cloud Peak Chalet, having our own infrared sauna after a morning trail walk was luxury at its finest.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "rev-03",
    author: "Dr. Radhika Nair",
    location: "Kochi",
    date: "May 2026",
    rating: 5,
    roomBooked: "Room 03 — Cedar Ridge Cabin",
    comment: "If you need to disconnect from city chaos and reconnect with nature, this is the place. The aroma of cedar wood in Room 03, the evening campfire with marshmallows, and total silence at night.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  }
];
