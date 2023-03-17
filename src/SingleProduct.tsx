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
  const {
    basketItem,
    basketValue,
    setBasketItem,
    setBasketValue,
    basketContent,
    setBasketContent,
  } = useContext(AppContext);

  const handleAddProduct = () => {
    setBasketItem((prev) => prev + 1);
    setBasketValue((prev) => prev + price);
    setBasketContent([...basketContent, { title, id }]);
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
