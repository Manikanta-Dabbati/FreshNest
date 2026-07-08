import type { Category } from "../types/category";

export const categories: Category[] = [
  {
    id: 1,
    title: "Farm Fresh",
    subtitle: "Vegetables",
    totalItems: 24,
    route: "/vegetables",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900",
  },
  {
    id: 2,
    title: "Premium Cuts",
    subtitle: "Non-Veg",
    totalItems: 18,
    route: "/nonveg",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900",
  },
  {
    id: 3,
    title: "Dairy Essentials",
    subtitle: "Milk & Cheese",
    totalItems: 15,
    route: "/dairy",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=900",
  },
  {
    id: 4,
    title: "Refreshing Drinks",
    subtitle: "Juices & Beverages",
    totalItems: 20,
    route: "/drinks",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=900",
  },
];