import cotaHall from "../assets/images/cota-hall.webp";
import cotaFront from "../assets/images/cota-fronts1.webp";
import cotaBack from "../assets/images/cota-backs2.webp";
import cotaBal from "../assets/images/cota-s4.webp";
import cotaRoom1 from "../assets/images/cota-s3.webp";
import cotaRoom2 from "../assets/images/single-bedroom.webp";

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
    url: cotaHall,
    caption: "Golden hour glow across the main cottage property",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-02",
    title: "Fireplace Living Nook",
    category: "Interiors",
    url: cotaFront,
    caption: "Warm evening fireside atmosphere in Room 01",
    aspectRatio: "vertical"
  },
  {
    id: "gal-03",
    title: "Misty Mountain Canopy",
    category: "Nature",
    url: cotaBack,
    caption: "Morning fog drifting through the pine woods",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-04",
    title: "Cloud Peak Glass Suite",
    category: "Rooms",
    url: cotaBal,
    caption: "Floor-to-ceiling glass wall inside Room 07",
    aspectRatio: "vertical"
  },
  {
    id: "gal-05",
    title: "Evening Campfire Circle",
    category: "Experiences",
    url: cotaRoom1,
    caption: "Stargazing under the clear Kodaikanal sky",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-06",
    title: "Farm-to-Table Breakfast Spread",
    category: "Food",
    url: cotaRoom2,
    caption: "Freshly brewed filter coffee, warm pastries, and seasonal fruits",
    aspectRatio: "square"
  },
];
