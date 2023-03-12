import React, { useContext } from "react";
import AppContext from "./AppContext";

const Basket = () => {
  const { basketValue, basketItem } = useContext(AppContext);

  return (
    <>
      <p className="product__title">Twój koszyk ma {basketItem} produktów</p>
      <p>Wartość zamówienia to: {basketValue}</p>

      <div className="product__add">Biere</div>
    </>
  );
};

export default Basket;
