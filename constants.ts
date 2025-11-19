import { MenuItem, MenuItemCategory, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    title: 'Grits and Shrimp',
    description: "The dish that started it all. Creamy, stone-ground grits taking center stage, topped with succulent, seasoned shrimp in a savory southern sauce.",
    category: MenuItemCategory.SIGNATURE,
    imageUrl: 'https://picsum.photos/seed/grits/800/600'
  },
  {
    id: '2',
    title: 'Broiled Catfish',
    description: "Fresh catfish fillets, perfectly seasoned and broiled to tender perfection. A healthier take on a southern classic without sacrificing soul.",
    category: MenuItemCategory.MAIN,
    imageUrl: 'https://picsum.photos/seed/catfish/800/600'
  },
  {
    id: '3',
    title: 'Southern Collard Greens',
    description: "Slow-simmered greens with smoked turkey, offering a rich, smoky flavor that melts in your mouth.",
    category: MenuItemCategory.SIDE,
    imageUrl: 'https://picsum.photos/seed/greens/800/600'
  },
  {
    id: '4',
    title: 'Homemade Cornbread',
    description: "Golden, buttery, and moist with just the right amount of sweetness. The perfect companion to our greens.",
    category: MenuItemCategory.SIDE,
    imageUrl: 'https://picsum.photos/seed/cornbread/800/600'
  },
  {
    id: '5',
    title: 'Banana Pudding',
    description: "Layers of vanilla wafers, fresh bananas, and rich homemade custard, topped with whipped meringue.",
    category: MenuItemCategory.DESSERT,
    imageUrl: 'https://picsum.photos/seed/pudding/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    celebrityName: 'Regina B.',
    role: 'Award Winning Actress',
    quote: "Twin's Grits and Shrimp isn't just food, it's a spiritual experience. Best catering in Hollywood.",
    videoThumbnail: 'https://picsum.photos/seed/regina/600/800'
  },
  {
    id: 't2',
    celebrityName: 'Samuel L.',
    role: 'Legendary Actor',
    quote: "I don't play about my southern food. With Love, Twin delivers the real deal every single time.",
    videoThumbnail: 'https://picsum.photos/seed/samuel/600/800'
  },
  {
    id: 't3',
    celebrityName: 'Viola D.',
    role: 'Icon',
    quote: "Elegant, soulful, and made with love. Cheryl is the only person I trust for my private parties.",
    videoThumbnail: 'https://picsum.photos/seed/viola/600/800'
  }
];
