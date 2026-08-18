import singleBedroomImage from "../assets/images/single-bedroom.webp";
import doubleBedroomImage from "../assets/images/double-bedroom.webp";

export interface BedroomCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  image: string;
  imageAlt: string;
  whatsappLabel: string;
}

export const BEDROOM_CATEGORIES: BedroomCategory[] = [
  {
    id: "single-bedroom",
    name: "Single Bedroom",
    tagline: "Cosy & Peaceful Retreat",
    description: "A comfortable bedroom suitable for guests looking for a cosy and peaceful stay in Kodaikanal.",
    capacity: "1 – 2 Guests",
    image: singleBedroomImage,
    imageAlt: "Clean cosy single bedroom cottage interior with window view",
    whatsappLabel: "Enquire About Single Bedroom"
  },
  {
    id: "double-bedroom",
    name: "Double Bedroom",
    tagline: "Spacious Comfort for Couples & Friends",
    description: "A comfortable bedroom with space for two guests, ideal for couples, friends or a relaxed stay in Kodaikanal.",
    capacity: "2 – 4 Guests",
    image: doubleBedroomImage,
    imageAlt: "Spacious double bedroom cottage interior with mountain views",
    whatsappLabel: "Enquire About Double Bedroom"
  }
];
