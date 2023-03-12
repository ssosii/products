import AppContext from "./AppContext";
import { useContext } from "react";
import { Product } from "./types";

const SingleProduct = ({
  title,
  description,
  price,
  thumbnail,
  id,
}: Product) => {
  const { basketItem, basketValue, setBasketItem, setBasketValue } =
    useContext(AppContext);
  const handleAddProduct = () => {
    setBasketItem(basketItem + 1);
    setBasketValue(basketValue + price);
  };


  return (
    <div className="product" key={id}>
      <img className="product__image" src={thumbnail} alt="" />
      <div>
        <p className="product__title">{title}</p>
        <p className="product__desc">{description}</p>
        <p className="product__price">{price} zł</p>
        <p onClick={handleAddProduct} className="product__add">
          Dodaj do koszyka
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
