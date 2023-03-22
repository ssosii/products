import React from "react";

export interface Product {
  id: string;
  title: string;
  image: string[];
  description: string;
  price: number;
  thumbnail: string;
}

export interface BasketItem {
  id: number;
  quantity: number;
}

export interface BasketList {
  title: string;
}

export interface Basket {
  basketValue: number;
  basketItemNumber: number;
  setBasketValue: React.Dispatch<React.SetStateAction<number>>;
  setBasketItemNumber: React.Dispatch<React.SetStateAction<number>>;
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number, price: number, title: string) => void;
  decreasetItemQuantity: (id: number, price: number) => void;
  basketList: BasketList[];
}
