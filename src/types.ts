export interface Poster {
  id: string;
  title: string;
  category: 'Posters' | 'Social Media' | 'Branding' | 'Festival' | 'Advertisement' | 'Motion/3D';
  imageUrl: string;
  psdSize: string;
  views: number;
  downloads: number;
  software: string[];
  description: string;
  dimensions: string;
  creationDate: string;
  isPremium?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  basePrice: string;
  deliveryTime: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  message: string;
  date: string;
  status: 'new' | 'responded' | 'archived';
}
