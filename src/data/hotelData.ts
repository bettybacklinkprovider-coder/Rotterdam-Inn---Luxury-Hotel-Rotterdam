export interface Room {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  capacity: string;
  size: string;
  bed: string;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  popular?: boolean;
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  price: number;
  originalPrice: number;
  duration: string;
  image: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  source: 'Google Reviews' | 'Trustpilot' | 'Booking.com' | 'Direct Guest';
  comment: string;
  avatar: string;
  verified: boolean;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
}

export const HOTEL_INFO = {
  name: "Rotterdam Inn",
  tagline: "Your Luxurious Home in the Heart of Rotterdam",
  phone: "+31 6 2490 8319",
  whatsapp: "31624908319",
  email: "reservations@rotterdaminn.nl",
  address: "59 Provenierssingel, Noord, 3033 EH Rotterdam, Netherlands",
  rating: 4.8,
  reviewCount: 348,
  checkIn: "15:00 - 23:00",
  checkOut: "07:00 - 11:00",
};

export const ROOMS: Room[] = [
  {
    id: "deluxe-twin",
    name: "Deluxe Twin Room",
    tagline: "Comfort & Elegance for Two",
    price: 135,
    originalPrice: 160,
    capacity: "2 Guests",
    size: "26 m²",
    bed: "Twin / Double Beds",
    image: "/images/rotterdam_inn_suite.jpg",
    gallery: [
      "/images/rotterdam_inn_suite.jpg",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Designed for modern travelers seeking comfort and tranquility overlooking the historic Provenierssingel canal. Features bespoke furnishings, premium bedding, and a sleek rain shower.",
    amenities: ["Free High-Speed Wi-Fi", "Nespresso Coffee Machine", "Rain Shower", "Air Conditioning", "Flat-screen Smart TV", "In-room Safe", "Work Desk", "Daily Housekeeping"]
  },
  {
    id: "executive-king",
    name: "Executive King Suite",
    tagline: "Spacious Luxury with City Views",
    price: 195,
    originalPrice: 230,
    capacity: "2-3 Guests",
    size: "38 m²",
    bed: "Plush King Size Bed",
    image: "/images/rotterdam_inn_hero.jpg",
    gallery: [
      "/images/rotterdam_inn_hero.jpg",
      "/images/rotterdam_inn_suite.jpg"
    ],
    description: "Our signature Executive King Suite offers generous living space, luxury seating area, and expansive windows framing the vibrant North Rotterdam skyline.",
    amenities: ["King Size Bed", "Sitting Area", "Complimentary Mini-Bar", "Rain Shower & Bathtub", "Espresso Bar", "High-Speed Wi-Fi", "Bathrobes & Slippers", "Smart Climate Control"],
    popular: true
  },
  {
    id: "canal-view-superior",
    name: "Superior Canal View Room",
    tagline: "Romantic Waterside Vistas",
    price: 165,
    originalPrice: 195,
    capacity: "2 Guests",
    size: "30 m²",
    bed: "Queen Size Bed",
    image: "/images/rotterdam_inn_suite.jpg",
    gallery: [
      "/images/rotterdam_inn_suite.jpg",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Wake up to picturesque water views right outside your window. This elegantly appointed room combines classic Dutch architectural charm with contemporary minimalism.",
    amenities: ["Canal View", "Queen Size Bed", "Free Wi-Fi", "Rain Shower", "Tea & Coffee Station", "Laptop Safe", "Soundproof Windows", "Organic Toiletries"]
  },
  {
    id: "family-suite",
    name: "Rotterdam Family Suite",
    tagline: "Perfect for Families & Groups",
    price: 260,
    originalPrice: 310,
    capacity: "4 Guests",
    size: "52 m²",
    bed: "2 King Beds or 1 King + 2 Twins",
    image: "/images/rotterdam_inn_hero.jpg",
    gallery: [
      "/images/rotterdam_inn_hero.jpg"
    ],
    description: "Spacious multi-room suite tailored for families visiting Rotterdam. Features connecting spaces, comfortable lounge seating, and extra amenities to make everyone feel at home.",
    amenities: ["Two Connected Rooms", "Family Lounge Area", "2 Smart TVs", "Complimentary Breakfast", "Mini-Refrigerator", "Safe & Security", "High-Speed Wi-Fi", "Extra Towels & Linens"]
  },
  {
    id: "penthouse-suite",
    name: "Rotterdam Grand Penthouse",
    tagline: "Ultimate Luxury at the Top",
    price: 390,
    originalPrice: 450,
    capacity: "2-3 Guests",
    size: "75 m²",
    bed: "Super King Bed",
    image: "/images/rotterdam_inn_suite.jpg",
    gallery: [
      "/images/rotterdam_inn_suite.jpg"
    ],
    description: "The pinnacle of Rotterdam Inn hospitality. Enjoy panoramic rooftop views, private terrace access, premium jacuzzi bathtub, and personalized concierge service throughout your stay.",
    amenities: ["Private Rooftop Terrace", "Jacuzzi Bathtub", "Complimentary Champagne", "Super King Bed", "Dedicated Butler Service", "Express Check-in", "Premium Sound System", "Luxury Bath Amenities"]
  }
];

export const OFFERS: Offer[] = [
  {
    id: "weekend-getaway",
    title: "Weekend Getaway Package",
    subtitle: "Escape to vibrant Rotterdam for an unforgettable weekend",
    discount: "20% OFF",
    price: 299,
    originalPrice: 375,
    duration: "2 Nights (Fri - Sun)",
    image: "/images/rotterdam_inn_hero.jpg",
    description: "Includes 2 nights in our Deluxe or Canal View Room, daily artisanal breakfast buffet, a welcome bottle of wine, and late checkout until 2 PM.",
    features: ["2 Nights Accommodation", "Daily Gourmet Breakfast", "Welcome Bottle of Dutch Wine", "Late Checkout (2 PM)", "Free Canal Map & Guide"],
    badge: "Most Popular"
  },
  {
    id: "romantic-stay",
    title: "Romantic Canal Romance",
    subtitle: "Celebrate your love in the architectural capital of Europe",
    discount: "Special Add-on",
    price: 349,
    originalPrice: 420,
    duration: "2 Nights",
    image: "/images/rotterdam_inn_suite.jpg",
    description: "Ignite romance with rose petals upon arrival, chilled Prosecco, luxury chocolates, and a 3-course dinner voucher at our partner restaurant.",
    features: ["Executive King Room", "Chilled Prosecco & Chocolates", "Rose Petal Turn-down", "Dinner Voucher for Two", "Breakfast in Bed"],
    badge: "Couples Choice"
  },
  {
    id: "extended-stay",
    title: "Extended Stay Explorer",
    subtitle: "Stay longer, save more on your Rotterdam adventure",
    discount: "30% OFF",
    price: 799,
    originalPrice: 1140,
    duration: "7 Nights",
    image: "/images/rotterdam_inn_hero.jpg",
    description: "Ideal for remote workers, relocation guests, or extended holidays. Enjoy discounted weekly rates with full hotel amenities and weekly professional laundry service.",
    features: ["7 Nights in Deluxe Room", "High-Speed Fiber Wi-Fi", "Weekly Housekeeping & Laundry", "Free Nespresso Refills", "24/7 Concierge Support"],
    badge: "Best Value"
  },
  {
    id: "business-traveler",
    title: "Executive Business Stay",
    subtitle: "Productivity meets luxury just minutes from Central Station",
    discount: "Corporate Rate",
    price: 175,
    originalPrice: 210,
    duration: "Per Night",
    image: "/images/rotterdam_inn_suite.jpg",
    description: "Conveniently located near Rotterdam Centraal. Enjoy high-speed dedicated workspaces, express breakfast, and flexible cancellation terms.",
    features: ["Express Breakfast", "Dedicated Work Desk", "High-Speed Fiber Internet", "Express Laundry Service", "Flexible Cancellation"],
    badge: "Business Friendly"
  },
  {
    id: "family-holiday",
    title: "Rotterdam Family Fun Package",
    subtitle: "Create lasting memories with your loved ones",
    discount: "Free Kids Breakfast",
    price: 499,
    originalPrice: 590,
    duration: "3 Nights",
    image: "/images/rotterdam_inn_hero.jpg",
    description: "Stay in our spacious Family Suite with complimentary breakfast for kids, discount vouchers for Erasmus Bridge tours and Rotterdam Zoo (Diergaarde Blijdorp).",
    features: ["Family Suite for 3 Nights", "Free Breakfast for Children", "Zoo & Museum Vouchers", "Board Games & Kids Amenities", "Late Checkout"],
    badge: "Family Pick"
  },
  {
    id: "seasonal-autumn",
    title: "Autumn Canal Lights Special",
    subtitle: "Experience Rotterdam's golden autumn colors and museums",
    discount: "15% OFF",
    price: 245,
    originalPrice: 290,
    duration: "2 Nights",
    image: "/images/rotterdam_inn_suite.jpg",
    description: "Cozy up as the leaves turn gold along Provenierssingel. Enjoy warm Dutch hot chocolate upon arrival, museum passes, and cozy evenings in our lounge.",
    features: ["Cozy Canal View Room", "Warm Hot Chocolate & Stroopwafels", "Museum Rotterdam Passes", "Complimentary Umbrella", "Cozy Lounge Access"],
    badge: "Seasonal"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "wifi",
    name: "High-Speed Fiber Wi-Fi",
    description: "Complimentary, lightning-fast fiber optic internet accessible throughout all rooms and public lounges.",
    iconName: "Wifi",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "dining",
    name: "Gourmet Breakfast & Café",
    description: "Start your morning with fresh Dutch pastries, artisan coffee, organic eggs, and tropical fruit selections.",
    iconName: "Coffee",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "concierge",
    name: "24/7 Concierge & Security",
    description: "Our multilingual front desk team is always ready to assist with reservations, directions, and luggage.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "location",
    name: "Prime Central Location",
    description: "Only a 4-minute walk from Rotterdam Centraal Station, putting you right next to shops, museums, and trams.",
    iconName: "MapPin",
    image: "/images/rotterdam_inn_hero.jpg"
  },
  {
    id: "parking",
    name: "Secure Valet Parking",
    description: "Private secure parking facilities available on-site with EV charging stations for electric vehicles.",
    iconName: "Car",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "lounge",
    name: "Canal-Viem Lounge & Bar",
    description: "Unwind in our elegant lobby lounge with artisanal cocktails, local craft beers, and peaceful canal views.",
    iconName: "Wine",
    image: "/images/rotterdam_inn_lounge.jpg"
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Bram van der Meer",
    location: "Amsterdam, Netherlands",
    rating: 5,
    date: "October 2026",
    source: "Google Reviews",
    comment: "Absolute gem right by Rotterdam Centraal! The location on Provenierssingel is so peaceful yet right in the center. Impeccable cleanliness and the staff went above and beyond.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    verified: true
  },
  {
    id: "rev-2",
    author: "Sarah & David Jenkins",
    location: "London, United Kingdom",
    rating: 5,
    date: "November 2026",
    source: "Trustpilot",
    comment: "We booked the Weekend Getaway package for our anniversary. The room was gorgeous with a canal view, and the breakfast was simply delicious. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    verified: true
  },
  {
    id: "rev-3",
    author: "Marco Rossi",
    location: "Milan, Italy",
    rating: 5,
    date: "September 2026",
    source: "Booking.com",
    comment: "Top notch hospitality! Super clean rooms, comfortable king bed, and very quiet despite being in a central neighborhood. Will definitely stay here again on my next business trip.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    verified: true
  },
  {
    id: "rev-4",
    author: "Elke Weber",
    location: "Berlin, Germany",
    rating: 4,
    date: "August 2026",
    source: "Google Reviews",
    comment: "Lovely hotel with authentic Dutch character. The staff helped us book bikes and recommended great local restaurants. Very pleasant stay!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    verified: true
  }
];
