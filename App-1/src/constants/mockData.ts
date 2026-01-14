import { IMAGES } from "./images";

export interface Place {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  description: string;
  amenities: string[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface Conversation {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
}

export interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp: any;
  isSent: boolean;
}

export const PLACES: Place[] = [
  {
    id: "1",
    name: "Ocean View Resort",
    location: "Maldives",
    image: IMAGES.PLACE_1,
    rating: 4.8,
    reviews: 124,
    price: 350,
    description:
      "Experience luxury at its finest with stunning ocean views, private beach access, and world-class amenities.",
    amenities: ["wifi", "pool", "spa", "gym"],
  },
  {
    id: "2",
    name: "Mountain Retreat",
    location: "Swiss Alps",
    image: IMAGES.PLACE_2,
    rating: 4.9,
    reviews: 89,
    price: 450,
    description:
      "Cozy cabin nestled in the mountains, perfect for skiing and hiking enthusiasts.",
    amenities: ["wifi", "fireplace", "hiking", "breakfast"],
  },
  {
    id: "3",
    name: "City Boutique Hotel",
    location: "New York, USA",
    image: IMAGES.PLACE_3,
    rating: 4.7,
    reviews: 215,
    price: 280,
    description:
      "Modern hotel in the heart of the city, walking distance to major attractions.",
    amenities: ["wifi", "bar", "restaurant", "gym"],
  },
  {
    id: "4",
    name: "Tropical Paradise",
    location: "Bali, Indonesia",
    image: IMAGES.PLACE_4,
    rating: 4.6,
    reviews: 156,
    price: 150,
    description:
      "Relax in a tropical paradise with lush gardens and traditional Balinese architecture.",
    amenities: ["wifi", "pool", "yoga", "breakfast"],
  },
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    userId: "u1",
    userName: "John Doe",
    userAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    text: "Absolutely amazing experience! The views were breathtaking.",
    date: "2023-10-15",
  },
  {
    id: "2",
    userId: "u2",
    userName: "Jane Smith",
    userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
    text: "Great place, but the service could be a bit faster.",
    date: "2023-10-12",
  },
  {
    id: "3",
    userId: "u3",
    userName: "Mike Ross",
    userAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
    text: "Best vacation ever! Highly recommended.",
    date: "2023-09-28",
  },
];

export const CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    userId: "u2",
    userName: "Jane Smith",
    userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
    lastMessage: "Hey, are you still interested in the trip?",
    timestamp: "10:30 AM",
    unread: 1,
    online: true,
  },
  {
    id: "2",
    userId: "u3",
    userName: "Mike Ross",
    userAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
    lastMessage: "I sent you the itinerary.",
    timestamp: "Yesterday",
    unread: 0,
    online: false,
  },
];

export const MESSAGES: Message[] = [
  {
    id: "1",
    text: "Hi there!",
    senderId: "me",
    timestamp: new Date(),
    isSent: true,
  },
  {
    id: "2",
    text: "Hello! How are you?",
    senderId: "other",
    timestamp: new Date(),
    isSent: false,
  },
  {
    id: "3",
    text: "I am good, thanks!",
    senderId: "me",
    timestamp: new Date(),
    isSent: true,
  },
];
