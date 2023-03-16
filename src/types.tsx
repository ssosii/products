import React from "react";

export interface Product {
  id: string;
  title: string;
  image: string[];
  description: string;
  price: number;
  thumbnail: string;
}

export interface BakstetContentType {
  id: string;
  title: string;
}

export interface Basket {
  basketValue: number;
  basketItem: number;
  basketContent: BakstetContentType[];
  setBasketContent: React.Dispatch<React.SetStateAction<BakstetContentType[]>>;
  setBasketValue: React.Dispatch<React.SetStateAction<number>>;
  setBasketItem: React.Dispatch<React.SetStateAction<number>>;
}
