export type ProductColor = {
  src: string;
  gender: string;
  sizes: { id: string; size: string; inStock: boolean; }[];
  assets: { id: string; src: string; alt: string; }[];
};

export type ProductDetail = {
  name: string;
  price: number;
  description: string;
  colors: ProductColor[];
};