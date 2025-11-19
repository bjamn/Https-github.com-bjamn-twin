export enum MenuItemCategory {
  SIGNATURE = 'Signature',
  MAIN = 'Main Course',
  SIDE = 'Sides',
  DESSERT = 'Dessert'
}

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  category: MenuItemCategory;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  celebrityName: string;
  role: string; // e.g., "Actor", "Musician"
  quote: string;
  videoThumbnail: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
