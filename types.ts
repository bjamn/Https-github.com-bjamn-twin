export interface MenuItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  celebrityName: string;
  role: string; // e.g., "Actor", "Musician"
  quote: string;
  videoThumbnail: string;
  videoUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface OwnerBioData {
  title: string;
  name: string;
  quote: string;
  paragraphs: string[];
}
