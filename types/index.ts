export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Category {
  id: string;
  title: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: { day: string; time: string }[];
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  googleMapsEmbedUrl: string;
  googleMapsUrl: string;
}
