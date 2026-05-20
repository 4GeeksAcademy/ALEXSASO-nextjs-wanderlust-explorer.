export type PropertyCategory =
  | 'Beach'
  | 'Cabins'
  | 'City'
  | 'Countryside'
  | 'Luxury'
  | 'Mansions'
  | 'Trending';

export interface LocationInfo {
  city: string;
  country: string;
  address?: string;
  latitude: number;
  longitude: number;
}

export interface Host {
  id: string;
  name: string;
  avatarUrl: string;
  isSuperhost: boolean;
  joinedYear: number;
  responseRate: number;
}

export interface Amenity {
  id: string;
  label: string;
  icon: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: PropertyCategory;
  location: LocationInfo;
  thumbnailUrl: string;
  gallery: string[];
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  isFavorite?: boolean;
}

export interface Room {
  id: string;
  propertyId: string;
  title: string;
  description: string;
  location: LocationInfo;
  host: Host;
  images: string[];
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  cleaningFee: number;
  serviceFee: number;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  amenities: Amenity[];
}

export interface ReservationDraft {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}
