import { createContext, Dispatch, SetStateAction } from "react";

export interface ProductsProps {
  id: number;
  title: number;
  description: string;
  price: number;
  thumbnail: URL;
}

export interface Basket {
  basketValue: number;
  basketItem: number;
  setBasketValue: (value: number) => void;
  setBasketItem: (value: number) => void;
}
