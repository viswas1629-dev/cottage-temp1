export interface GalleryItem {
  id: string;
  title: string;
  category: 'Rooms' | 'Interiors' | 'Exterior' | 'Nature' | 'Experiences' | 'Food' | 'Surroundings';
  url: string;
  caption?: string;
  aspectRatio: 'vertical' | 'horizontal' | 'square';
}

export const GALLERY_CATEGORIES = [
  'All',
  'Rooms',
  'Interiors',
  'Exterior',
  'Nature',
  'Experiences',
  'Food',
  'Surroundings'
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Pine Valley Sunset",
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=1600",
    caption: "Golden hour glow across the main cottage property",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-02",
    title: "Fireplace Living Nook",
    category: "Interiors",
    url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1600",
    caption: "Warm evening fireside atmosphere in Room 01",
    aspectRatio: "vertical"
  },
  {
    id: "gal-03",
    title: "Misty Mountain Canopy",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1600",
    caption: "Morning fog drifting through the pine woods",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-04",
    title: "Cloud Peak Glass Suite",
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600",
    caption: "Floor-to-ceiling glass wall inside Room 07",
    aspectRatio: "vertical"
  },
  {
    id: "gal-05",
    title: "Evening Campfire Circle",
    category: "Experiences",
    url: "https://images.unsplash.com/photo-1526491109672-74f44073b7f3?auto=format&fit=crop&q=80&w=1600",
    caption: "Stargazing under the clear Kodaikanal sky",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-06",
    title: "Farm-to-Table Breakfast Spread",
    category: "Food",
    url: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=1600",
    caption: "Freshly brewed filter coffee, warm pastries, and seasonal fruits",
    aspectRatio: "square"
  },
  {
    id: "gal-07",
    title: "Heritage Stone Architecture",
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600",
    caption: "Colonial stone masonry surrounded by mountain hydrangeas",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-08",
    title: "Soaking Tub with Garden View",
    category: "Interiors",
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600",
    caption: "Freestanding copper tub overlooking nature",
    aspectRatio: "vertical"
  },
  {
    id: "gal-09",
    title: "Pine Forest Walking Trail",
    category: "Surroundings",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1600",
    caption: "Private forest trail directly behind the property",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-10",
    title: "Whispering Pines Master Bedroom",
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1600",
    caption: "Luxury linens and custom teakwood details",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-11",
    title: "Outdoor Dining under Pine Canopy",
    category: "Food",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600",
    caption: "Candlelit alfresco dinner setting",
    aspectRatio: "square"
  },
  {
    id: "gal-12",
    title: "Cozy Loft Reading Corner",
    category: "Interiors",
    url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1600",
    caption: "Cedar wood panelling and plush wool pillows",
    aspectRatio: "vertical"
  },
  {
    id: "gal-13",
    title: "Kodaikanal Valley Viewpoint",
    category: "Surroundings",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600",
    caption: "Panoramic mountain ranges 5 minutes from property",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-14",
    title: "Guided Sunrise Trek",
    category: "Experiences",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
    caption: "Early morning mountain walk above the clouds",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-15",
    title: "Cedar Ridge Cabin Lawn",
    category: "Rooms",
    url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&q=80&w=1600",
    caption: "Private fire pit lawn in front of Room 03",
    aspectRatio: "square"
  }
];
