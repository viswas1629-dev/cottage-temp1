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
    id: "deluxe-room",
    name: "Deluxe Room",
    tagline: "COMFORTABLE STAY FOR COUPLES & SOLO",
    description: "A comfortable and peaceful room, thoughtfully suited for couples & solo travelers looking for a relaxing stay in Kodaikanal.",
    capacity: "1 – 2 Guests",
    image: singleBedroomImage,
    imageAlt: "Clean cosy deluxe room cottage interior with window view",
    whatsappLabel: "Enquire About Deluxe Room"
  },
  {
    id: "standard-room",
    name: "Standard Room",
    tagline: "COMFORTABLE STAY FOR FAMILIES & FRIENDS",
    description: "A comfortable room suitable for families and friends, offering a convenient and relaxing stay in Kodaikanal.",
    capacity: "2 – 4 Guests",
    image: doubleBedroomImage,
    imageAlt: "Spacious standard room cottage interior with mountain views",
    whatsappLabel: "Enquire About Standard Room"
  }
];
