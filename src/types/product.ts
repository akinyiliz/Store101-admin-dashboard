export interface Product {
  _id: string;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rate?: number;
  review?: number;
}
