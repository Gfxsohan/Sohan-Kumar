import { Poster, Service, Testimonial } from './types';
import designerAvatar from './assets/images/real_sohan_profile_1780041536923.png';

// Let's import the custom-generated assets or path strings
export const DESIGNER_AVATAR = designerAvatar;

export const INITIAL_POSTERS: Poster[] = [
  {
    id: 'cyberpunk-future',
    title: 'GFX SOHAN FUTURE - Cyberpunk Editorial',
    category: 'Posters',
    imageUrl: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop',
    psdSize: '124.5 MB',
    views: 1420,
    downloads: 412,
    software: ['Photoshop', 'Illustrator'],
    description: 'A premium futuristic, cyberpunk-inspired editorial poster showcasing technical line vector details, neon deep crimson accents, and bold typographic arrangements.',
    dimensions: '3000 x 4000 px',
    creationDate: '2026-04-12',
    isPremium: true
  },
  {
    id: 'swiss-minimal',
    title: 'Minimalist Swiss Brutalism',
    category: 'Posters',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    psdSize: '89.2 MB',
    views: 980,
    downloads: 245,
    software: ['Photoshop', 'Illustrator'],
    description: 'An exploration of traditional Swiss design principles fused with bold brutalist motifs. Features flat-red geometry and high-precision typographic layout rules.',
    dimensions: '2400 x 3200 px',
    creationDate: '2026-05-01'
  },
  {
    id: 'street-collage',
    title: 'ENERGY - Brutalist Street Collage',
    category: 'Social Media',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop',
    psdSize: '148.1 MB',
    views: 1850,
    downloads: 582,
    software: ['Photoshop', 'Lightroom'],
    description: 'A high-contrast streetwear collage featuring rough paper tears, analog halftone effects, and brilliant hand-painted vibrant red highlight overlays.',
    dimensions: '3000 x 3000 px',
    creationDate: '2026-05-18',
    isPremium: true
  },
  {
    id: 'festive-fusion',
    title: 'Royal Heritage Festival Creative',
    category: 'Festival',
    imageUrl: 'https://images.unsplash.com/photo-1507504038482-76210f5c24e4?q=80&w=800&auto=format&fit=crop',
    psdSize: '95.6 MB',
    views: 890,
    downloads: 189,
    software: ['Photoshop', 'Illustrator'],
    description: 'An elegant vector-based spiritual festival poster blended with majestic patterns and sharp gold-red lighting accents to capture grand corporate festival greetings.',
    dimensions: '3000 x 4000 px',
    creationDate: '2026-03-24'
  },
  {
    id: 'corporate-identity',
    title: 'Vanguard Tech Branding Creative',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop',
    psdSize: '112.0 MB',
    views: 1150,
    downloads: 305,
    software: ['Illustrator', 'InDesign'],
    description: 'Full-spectrum visual identity and layout framework optimized for corporate advertisements, featuring dynamic grids and structured geometric red lines.',
    dimensions: '4000 x 2500 px',
    creationDate: '2026-02-15'
  },
  {
    id: 'social-ad',
    title: 'Urban Sound Social Media Banner',
    category: 'Advertisement',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    psdSize: '76.4 MB',
    views: 1350,
    downloads: 412,
    software: ['Photoshop'],
    description: 'A striking high-tempo social media promotional template designed to promote live events, optimizing high visual contrast for fast scrolling layouts.',
    dimensions: '1080 x 1350 px',
    creationDate: '2026-05-10'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'social-poster',
    title: 'Social Media Poster Design',
    description: 'High-converting creatives, banners, and thumb-stopping flyers customized for Instagram, Facebook, and Twitter to boost engagement.',
    iconName: 'Sparkles',
    basePrice: '₹1499',
    deliveryTime: '24 Hours',
    features: ['High-Res JPEG/PNG', 'PSD Source File Included', '3 Revision Rounds', 'Perfect Social Aspect Ratios']
  },
  {
    id: 'branding',
    title: 'Business Branding',
    description: 'Establish a memorable corporate presence with custom logos, stationery templates, digital style-guides, and typography books.',
    iconName: 'Cpu',
    basePrice: '₹9999',
    deliveryTime: '3-4 Days',
    features: ['Vector SVG/AI/EPS/PDF', 'Full Brand Guidelines', 'Commercial Rights', 'Social Media Stationery Appliques']
  },
  {
    id: 'banner-flex',
    title: 'Banner and Flex Large Format Design',
    description: 'High-fidelity large prints designed specifically for physical banner stands, storefronts, billboards, and trade-show backdrops.',
    iconName: 'Maximize',
    basePrice: '₹999',
    deliveryTime: '48 Hours',
    features: ['Print-Ready PDF (CMYK)', 'Exact Vector Dimensions', 'Unlimited Revisions', 'PSD/AI Source File']
  },
  {
    id: 'festival-posters',
    title: 'Corporate Festival Design',
    description: 'Stunning cultural greetings crafted to help your business connect directly with customers during vital cultural holidays and festivals.',
    iconName: 'Gift',
    basePrice: '₹999',
    deliveryTime: '12 Hours',
    features: ['Instant Delivery Option', 'Custom Text & Logo Placement', 'JPEG/PNG Format', 'Vibrant Festive Palette Matching']
  },
  {
    id: 'ad-creatives',
    title: 'Advertisement Creative Design',
    description: 'Commercial ad creative assets built meticulously around psychological triggers to maximize clicks, signups, and landing page conversions.',
    iconName: 'TrendingUp',
    basePrice: '₹4999',
    deliveryTime: '24 Hours',
    features: ['A/B Design Variants', 'Conversion-Optimized Copy Layout', 'Vibrant Red CTA Highlight Styles', 'PSD/PNG Formats']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Marketing Director, Vanguard Tech',
    rating: 5,
    comment: 'Working with GFX SOHAN completely transformed our product launch. The cyberpunk and minimalist designs they made are breathtaking, and our conversion rate increased by 24%!',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100'
  },
  {
    id: 't2',
    name: 'Rajeev Kumar',
    role: 'Founder, SpiceFest Foods',
    rating: 5,
    comment: 'Supreme festival posters! Delivery was incredibly fast—just 12 hours from initial concept to print-ready Files. Truly helpful and responsive graphics partner.',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Editor-in-Chief, Brut Digital',
    rating: 5,
    comment: 'The street collage PSD templates are the best quality I’ve ever bought. Highly organized layout layers, non-destructive smart objects, and exceptionally bold color schemes!',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100'
  }
];

export const SKILLS = [
  { name: 'Creative Conceptual Design', percentage: 98, level: 'Master' },
  { name: 'Adobe Photoshop (PSD Architecture)', percentage: 96, level: 'Expert' },
  { name: 'Adobe Illustrator (Vector Engineering)', percentage: 92, level: 'Expert' },
  { name: 'Adobe InDesign & Layout Layouts', percentage: 90, level: 'Expert' },
  { name: 'Social Media Engagement Psychology', percentage: 95, level: 'Master' },
  { name: 'Ad Campaign Creative Direction', percentage: 94, level: 'Master' }
];

export const BRAND_STATS = [
  { id: 'stat-posters', value: '450+', label: 'Completed Projects' },
  { id: 'stat-downloads', value: '5K+', label: 'PSD Downloads' },
  { id: 'stat-whatsapp', value: '1K+', label: 'Happy Clients' },
  { id: 'stat-experience', value: '4+', label: 'Years Experience' }
];
