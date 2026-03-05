export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[]; // Минимум 3 картинки по заданию
  link: string;     // Ссылка на Kaspi
}