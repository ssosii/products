
export interface Product {
  id: string;
  title: string;
  image: string[];
  description: string;
  price: number;
  thumbnail: string;
}

export interface Basket {
  basketValue: number;
  basketItem: number;
  setBasketValue: (value: number) => void;
  setBasketItem: (value: number) => void;
}
