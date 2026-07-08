export interface Product {
  id: number;
  name: string;
  category: "vegetables" | "nonveg" | "dairy" | "drinks";
  image: string;
  price: number;
  rating: number;
  unit: string;
}