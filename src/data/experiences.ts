import { Category, Experience } from '@/types';

const categories: Category[] = ['Adventure', 'Culture', 'Food', 'Wellness', 'Nature'];
const cities = ['Bangkok, Thailand', 'Split, Croatia', 'Kyoto, Japan', 'Cusco, Peru', 'Rome, Italy'];
const titlePrefixes = ['Tour de', 'Expedicion', 'Clase de', 'Ruta de'];
const titleSubjects = ['Vela', 'Cocina', 'Senderismo', 'Yoga'];

const randomPrice = (): number => Math.floor(Math.random() * 200) + 20;
const randomRating = (): number => Number((Math.random() * (5 - 4) + 4).toFixed(1));

export const experiences: Experience[] = Array.from({ length: 100 }, (_, i) => ({
  id: String(i + 1),
  title: `${titlePrefixes[i % titlePrefixes.length]} ${titleSubjects[i % titleSubjects.length]} ${i + 1}`,
  description:
    'Una experiencia unica disenada para exploradores modernos que buscan conectar con la cultura local.',
  category: categories[i % categories.length],
  destination: cities[i % cities.length],
  price: randomPrice(),
  rating: randomRating(),
  imageUrl: `https://picsum.photos/seed/${i + 1}/600/400`,
}));
