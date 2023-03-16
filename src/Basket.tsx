import React, { useContext } from "react";
import AppContext from "./AppContext";
import { Link } from "react-router-dom";
import { BakstetContentType } from "types";
import Products from "Products";

const Basket = () => {
  const { basketValue, basketItem, basketContent } = useContext(AppContext);

  return (
    <>
      {console.log(basketContent)}
      <p className="product__title">Twój koszyk ma {basketItem} produktów</p>
      <p>Wartość zamówienia to: {basketValue}</p>

      {basketContent.map((product: BakstetContentType) => (
        <div>
          <p>Nazwa {product.title} </p>
        </div>
      ))}

      <Link className="product__add" to="/koszyk">
        Kupuje
      </Link>
    </>
  );
};

export default Basket;
