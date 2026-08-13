export interface Cottage {
  id: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  capacity: number;
  maxGuests: number;
  bedType: string;
  view: string;
  areaSqFt: number;
  bathroomType: string;
  priceNight: string;
  featured: boolean;
  amenities: string[];
  features: string[];
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
}

export const COTTAGES: Cottage[] = [
  {
    id: "room-01",
    name: "Room 01 — Pine Valley Suite",
    shortName: "Room 01",
    category: "Luxury Suite",
    tagline: "Panoramic floor-to-ceiling glass views of the misty pine canyon.",
    description: "Our signature luxury suite featuring handcrafted teakwood interiors, a private wooden deck hovering over the pine tree canopy, and a wood-burning fireplace.",
    longDescription: "Step into pure tranquility inside Room 01 — Pine Valley Suite. Designed with floor-to-ceiling double-glazed windows, this room immerses you in the raw beauty of Kodaikanal's pine forests without compromising on warmth and comfort. Sip morning filter coffee on your private sun deck as morning mist rolls across the mountain ridge.",
    capacity: 2,
    maxGuests: 3,
    bedType: "King Plush Bed with Feather Mattress",
    view: "Pine Valley & Mountain Mist",
    areaSqFt: 520,
    bathroomType: "Ensuite with Skylight Rain Shower & Copper Tub",
    priceNight: "₹7,500",
    featured: true,
    amenities: [
      "Private Deck",
      "Wood Fireplace",
      "Mountain View",
      "Free High-Speed Wi-Fi",
      "Heated Mattress Pad",
      "Artisanal Coffee & Tea",
      "Luxury Rain Shower",
      "Daily Housekeeping"
    ],
    features: [
      "Floor-to-ceiling canyon glass wall",
      "Private teakwood sun terrace with reclining chairs",
      "Cast-iron indoor wood burning fireplace",
      "Ensuite bathroom with sky view",
      "Custom wool throws & feather pillows"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=1600",
        alt: "Pine Valley Suite exterior view with mountain haze",
        caption: "Exterior view of Pine Valley Suite elevated among the trees"
      },
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1600",
        alt: "Pine Valley Suite cozy interior bed with large window",
        caption: "King bed overlooking the pine canopy"
      },
      {
        url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1600",
        alt: "Warm wooden cabin seating area with view",
        caption: "Cozy fireside reading nook inside Room 01"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600",
        alt: "Luxury stone bath with view of greenery",
        caption: "Ensuite bathroom featuring skylight rain shower"
      }
    ]
  },
  {
    id: "room-02",
    name: "Room 02 — Mist View Cottage",
    shortName: "Room 02",
    category: "Mountain Cottage",
    tagline: "Perched high on the hill, where cloud streams drift by your bedroom.",
    description: "A cozy stone-and-timber cottage with stone masonry walls, private veranda, and uninterrupted sunset views over the Western Ghats.",
    longDescription: "Mist View Cottage offers classic mountain charm blended with modern aesthetics. Built using local river stones and fragrant pine timber, Room 02 provides complete privacy surrounded by wildflower gardens. Ideal for couples seeking a peaceful romantic retreat.",
    capacity: 2,
    maxGuests: 2,
    bedType: "Queen Custom Timber Bed",
    view: "Valley Sunset & Cloud Canopy",
    areaSqFt: 440,
    bathroomType: "Ensuite Italian Tile Shower",
    priceNight: "₹6,800",
    featured: true,
    amenities: [
      "Sunset Veranda",
      "Stone Fireplace",
      "Garden Access",
      "Free High-Speed Wi-Fi",
      "Heated Blankets",
      "Electric Tea Kettle",
      "Organic Bath Products",
      "In-room Breakfast"
    ],
    features: [
      "Exposed mountain stone accent wall",
      "Private garden porch with rocking chairs",
      "Direct walking pathway to organic fruit orchard",
      "Custom dimmable mood lighting",
      "Soundproof double-pane windows"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
        alt: "Mist View Cottage stone exterior at sunset",
        caption: "Warm golden twilight light over Mist View Cottage"
      },
      {
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1600",
        alt: "Mist View Cottage bedroom interior design",
        caption: "Plush queen bed with warm earth tones"
      },
      {
        url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1600",
        alt: "Private veranda view of valley",
        caption: "Your private veranda overlooking the mist"
      }
    ]
  },
  {
    id: "room-03",
    name: "Room 03 — Cedar Ridge Cabin",
    shortName: "Room 03",
    category: "Timber Cabin",
    tagline: "Rustic elegance with cedar wood aroma and private fire pit corner.",
    description: "Surrounded by ancient cedar and eucalyptus trees, this warm log-inspired sanctuary features exposed beam ceilings and a cozy loft lounge.",
    longDescription: "Feel the authentic mountain cabin aura in Cedar Ridge Cabin. Crafted from cedar wood, the room emits a delicate natural aroma that induces deep relaxation. Features a spacious main bedroom and an intimate read-in loft lounge overlooking the hills.",
    capacity: 3,
    maxGuests: 4,
    bedType: "King Bed + Loft Single Sofa Bed",
    view: "Cedar Ridge & Starlit Sky",
    areaSqFt: 580,
    bathroomType: "Dual Vanity Shower & Deep Soaking Tub",
    priceNight: "₹8,200",
    featured: true,
    amenities: [
      "Private Fire Pit",
      "Loft Lounge",
      "Panoramic Windows",
      "Free High-Speed Wi-Fi",
      "Underfloor Heating",
      "Gourmet Coffee Machine",
      "Plush Bathrobes",
      "Star Gazing Skylight"
    ],
    features: [
      "Loft reading space with plush bean bags",
      "Dedicated private outdoor fire pit with seating",
      "Skylight window directly over the bed for stargazing",
      "Cedar wood wall panelling and vaulted ceiling",
      "Bluetooth audio speaker system"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&q=80&w=1600",
        alt: "Cedar Ridge Cabin nestled in forest",
        caption: "Cedar Ridge Cabin surrounded by tall trees"
      },
      {
        url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1600",
        alt: "Cozy timber room with warm lighting",
        caption: "Spacious wooden interior with vaulted ceiling"
      },
      {
        url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1600",
        alt: "Timber cabin seating area",
        caption: "Private loft seating space"
      }
    ]
  },
  {
    id: "room-04",
    name: "Room 04 — Forest Canopy Villa",
    shortName: "Room 04",
    category: "Family Villa",
    tagline: "Expansive 2-bedroom luxury villa immersed in lush emerald woods.",
    description: "Designed for families or friends, featuring two private bedrooms, a sunlit living room, wraparound balcony, and dining dining nook.",
    longDescription: "The Forest Canopy Villa is our largest accommodation, providing generous space and refined comfort. With two distinct bedroom suites separated by a central hearth living space, it is the perfect sanctuary for small groups seeking privacy amidst pristine nature.",
    capacity: 4,
    maxGuests: 5,
    bedType: "1 King Bed + 1 Queen Bed",
    view: "360-Degree Forest Canopy",
    areaSqFt: 850,
    bathroomType: "2 Full Ensuite Bathrooms with Rain Showers",
    priceNight: "₹12,500",
    featured: false,
    amenities: [
      "Wraparound Balcony",
      "Central Hearth",
      "2 Bedrooms & Bathrooms",
      "Free High-Speed Wi-Fi",
      "Dining Table",
      "Espresso Machine",
      "Warm Wool Blankets",
      "Complimentary Afternoon Tea"
    ],
    features: [
      "Two master suites with independent private bathrooms",
      "Wraparound balcony with 180° forest canopy panoramas",
      "Central living room with wood stove fireplace",
      "Kitchenette with refrigerator and espresso bar",
      "Private outdoor lawn area"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
        alt: "Forest Canopy Villa architectural exterior",
        caption: "Modern glass-and-timber Forest Canopy Villa"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600",
        alt: "Villa living room with big glass doors",
        caption: "Sunlit living space connecting both master bedrooms"
      },
      {
        url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1600",
        alt: "Master bedroom inside villa",
        caption: "Primary master bedroom suite"
      }
    ]
  },
  {
    id: "room-05",
    name: "Room 05 — Heritage Stone Suite",
    shortName: "Room 05",
    category: "Heritage Suite",
    tagline: "Colonial-inspired stone cottage with handcrafted rosewood furniture.",
    description: "Step back into timeless elegance. Stone fireplace, antique brass fixtures, plush rugs, and window seats facing the morning sun.",
    longDescription: "Embrace authentic hill-station heritage in Room 05. Built using traditional masonry techniques with hand-cut granite stones, this room naturally retains cozy warmth during crisp mountain nights. Features a bay window reading seat overlooking flower gardens.",
    capacity: 2,
    maxGuests: 3,
    bedType: "Four-Poster Teak King Bed",
    view: "Heritage Garden & Sunrise Peak",
    areaSqFt: 500,
    bathroomType: "Freestanding Clawfoot Tub & Walk-in Shower",
    priceNight: "₹7,200",
    featured: false,
    amenities: [
      "Clawfoot Bathtub",
      "Bay Window Seat",
      "Traditional Fireplace",
      "Free High-Speed Wi-Fi",
      "Heritage Tea Set",
      "Heated Towel Rail",
      "Plush Bathrobes",
      "Garden Path Access"
    ],
    features: [
      "Solid rosewood four-poster bed with canopy",
      "Deep freestanding clawfoot bathtub with garden view",
      "Custom bay window bench with hand-quilted cushions",
      "Original stone fireplace with vintage brass mantelpiece",
      "High ceilings with exposed timber rafters"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600",
        alt: "Heritage stone cottage front facade",
        caption: "Colonial stone architecture surrounded by hydrangeas"
      },
      {
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1600",
        alt: "Four-poster bed in heritage suite",
        caption: "Four-poster teak bed with hand-loomed linens"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600",
        alt: "Vintage bath in stone room",
        caption: "Clawfoot tub with garden views"
      }
    ]
  },
  {
    id: "room-06",
    name: "Room 06 — Meadow Edge Cottage",
    shortName: "Room 06",
    category: "Garden Cottage",
    tagline: "Serene single-story cottage opening directly onto blooming meadows.",
    description: "Peaceful ground-level sanctuary surrounded by wild lavender, roses, and mountain grasses. Private patio ideal for outdoor breakfast.",
    longDescription: "For guests who love stepping straight out onto soft green grass, Meadow Edge Cottage is an absolute haven. With sliding glass doors that open to your personal lawn corner, enjoy the scents of fresh mountain air and blooming flowers throughout the day.",
    capacity: 2,
    maxGuests: 2,
    bedType: "Queen Plush Bed",
    view: "Wildflower Meadow & Valleys",
    areaSqFt: 420,
    bathroomType: "Modern Glass Enclosure Shower",
    priceNight: "₹6,200",
    featured: false,
    amenities: [
      "Private Lawn Patio",
      "Garden Chairs",
      "Free High-Speed Wi-Fi",
      "Organic Herbal Teas",
      "Heated Blanket",
      "Sound System",
      "Daily Room Service",
      "Eco Toiletries"
    ],
    features: [
      "Direct step-out access to private lawn",
      "Outdoor breakfast table under parasol",
      "Large picture windows with garden perspectives",
      "Quiet location away from property pathways",
      "Custom bamboo blinds and blackout curtains"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",
        alt: "Meadow Edge Cottage patio with lawn",
        caption: "Private patio overlooking blooming gardens"
      },
      {
        url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1600",
        alt: "Cozy bedroom with bright garden light",
        caption: "Sun-drenched bedroom interior"
      },
      {
        url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1600",
        alt: "Green lawn and trees in front of room",
        caption: "Garden lawns right outside your window"
      }
    ]
  },
  {
    id: "room-07",
    name: "Room 07 — Cloud Peak Chalet",
    shortName: "Room 07",
    category: "Glass Chalet",
    tagline: "Perched at the highest ridge with 270-degree cloudscape vistas.",
    description: "An architectural masterpiece constructed with floor-to-ceiling structural glass, cantilevered deck, and private infrared sauna.",
    longDescription: "Floating above the valley at our highest elevation point, Cloud Peak Chalet delivers breathtaking views of Kodaikanal's signature cloud formations. Watch the weather change dynamically across the horizon while relaxing inside your private climate-controlled glass sanctuary.",
    capacity: 2,
    maxGuests: 3,
    bedType: "Super King Scandinavian Bed",
    view: "270° Panoramic Cloud & Mountain Ridge",
    areaSqFt: 620,
    bathroomType: "Luxury Bath with Private Infrared Sauna",
    priceNight: "₹9,800",
    featured: true,
    amenities: [
      "Private Infrared Sauna",
      "Cantilevered Deck",
      "Super King Bed",
      "Free High-Speed Wi-Fi",
      "Stargazing Telescope",
      "Smart Climate Control",
      "Gourmet Snack Bar",
      "Butler Service"
    ],
    features: [
      "Integrated private 2-person infrared sauna in bathroom",
      "Cantilevered glass-guardrail deck suspended over valley",
      "High-power astronomical telescope for clear night skies",
      "Motorized blackout blinds",
      "Custom ambient LED lighting scenes"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1600",
        alt: "Cloud Peak Chalet floating over clouds",
        caption: "Highest elevation chalet with 270° panoramic views"
      },
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600",
        alt: "Modern luxury chalet interior with glass walls",
        caption: "Unobstructed cloud vistas from your king bed"
      },
      {
        url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1600",
        alt: "Sun deck over mountain gorge",
        caption: "Cantilevered terrace deck"
      }
    ]
  },
  {
    id: "room-08",
    name: "Room 08 — Stream Side Sanctuary",
    shortName: "Room 08",
    category: "Nature Hideaway",
    tagline: "Located near a bubbling mountain stream with soothing natural soundscape.",
    description: "Tucked into a tranquil woodland hollow where gentle stream water flows past your private wooden deck. Perfect for deep relaxation.",
    longDescription: "Escape the noise of modern life in Room 08. Positioned right beside our property's natural freshwater spring stream, the rhythmic murmur of moving water creates a deeply soothing ambience day and night. Features a private outdoor tub set amongst ferns.",
    capacity: 2,
    maxGuests: 2,
    bedType: "Queen Feather Top Bed",
    view: "Stream & Fern Glen",
    areaSqFt: 460,
    bathroomType: "Indoor Rain Shower + Outdoor Soak Tub",
    priceNight: "₹6,900",
    featured: false,
    amenities: [
      "Outdoor Bath Tub",
      "Stream View Deck",
      "Soundscape Ambience",
      "Free High-Speed Wi-Fi",
      "Warm Wool Capes",
      "Artisan Teapot",
      "Organic Bath Salts",
      "Breakfast Delivery"
    ],
    features: [
      "Private outdoor wooden soak tub with heated water",
      "Direct soundscape of natural bubbling mountain stream",
      "Surrounded by natural tree ferns and mossy rock formations",
      "Wood-panelled interior with cozy reading lounge",
      "Aromatherapy diffuser with native pine essential oils"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1600",
        alt: "Stream Side Sanctuary surrounded by lush green nature",
        caption: "Hidden in a fern-lined woodland hollow"
      },
      {
        url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1600",
        alt: "Interior of stream side room",
        caption: "Warm natural timber bedroom interior"
      },
      {
        url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1600",
        alt: "Private deck beside stream",
        caption: "Relax on your deck listening to running stream water"
      }
    ]
  },
  {
    id: "room-09",
    name: "Room 09 — Whispering Pines Suite",
    shortName: "Room 09",
    category: "Penthouse Suite",
    tagline: "Top-floor penthouse with private fire lounge and mountain sunrise deck.",
    description: "An exclusive upper-level suite featuring cathedral wooden ceilings, marble fireplace, private study desk, and dual mountain views.",
    longDescription: "The crown jewel of our main cottage lodge, Whispering Pines Suite occupies the entire upper story. Wake up to the golden rays of sunrise hitting the Kodaikanal peak, enjoy evening cognac by your private marble fireplace, and experience ultimate peace.",
    capacity: 2,
    maxGuests: 4,
    bedType: "King Grand Custom Bed",
    view: "Dual East & South Mountain Vistas",
    areaSqFt: 700,
    bathroomType: "Marble Bathroom with Jacuzzi Jet Tub",
    priceNight: "₹10,500",
    featured: true,
    amenities: [
      "Jacuzzi Jet Tub",
      "Marble Fireplace",
      "Sunrise Balcony",
      "Free High-Speed Wi-Fi",
      "Executive Writing Desk",
      "Espresso Machine",
      "High-thread Linens",
      "VIP Concierge"
    ],
    features: [
      "Upper penthouse floor with private staircase entrance",
      "Marble fireplace in spacious private lounge",
      "Deep Jacuzzi jet bath with valley views",
      "East-facing balcony for private sunrise morning tea",
      "Custom sound system and wine chiller"
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1600",
        alt: "Whispering Pines Suite penthouse view",
        caption: "Upper story penthouse suite overlooking mountain ridges"
      },
      {
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1600",
        alt: "Grand luxury room with fireplace",
        caption: "Spacious master bedroom with cathedral ceiling"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600",
        alt: "Jacuzzi bath with view",
        caption: "Jacuzzi jet tub overlooking sunrise mountains"
      }
    ]
  }
];
