import AppContext from "context/AppContext";
import { useContext } from "react";
import { Product } from "types";

const SingleProduct = ({
  title,
  description,
  price,
  thumbnail,
  id,
}: Product) => {
  const { getItemQuantity, increaseItemQuantity, decreasetItemQuantity } =
    useContext(AppContext);
  const quantity = getItemQuantity(parseInt(id));
  return (
    <div className="product" key={id}>
      <img className="product__image" src={thumbnail} alt="" />
      <div>
        <p className="product__title">{title}</p>
        <p className="product__desc">{description}</p>
        <p className="product__price">{price} zł</p>
        <div>
          {quantity === 0 ? (
            <div
              onClick={() => {
                increaseItemQuantity(parseInt(id), price, title);
              }}
              className="product__add"
            >
              Dodaj do koszyka
            </div>
          ) : (
            <div>
              <div
                onClick={() => {
                  increaseItemQuantity(parseInt(id), price, title);
                }}
                className="product__add"
              >
                +
              </div>
              <div>{quantity}</div>
              <div
                onClick={() => {
                  decreasetItemQuantity(parseInt(id), price);
                }}
                className="product__add"
              >
                -
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
