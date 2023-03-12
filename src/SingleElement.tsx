import AppContext from "./AppContext";
import { useContext } from "react";

const SingleElement = ({
  title,
  description,
  price,
  key,
  image,
}: {
  title: string;
  description: string;
  price: number;
  key: number;
  image: string;
}) => {
  const { basketItem, basketValue, setBasketItem, setBasketValue } =
    useContext(AppContext);
  const handleAddProduct = () => {
    setBasketItem(basketItem + 1);
    setBasketValue(basketValue + price);
  };

  return (
    <>
      <div className="product" key={key}>
        <img className="product__image" src={image} alt="" />
        <div>
          <p className="product__title">{title}</p>
          <p className="product__desc">{description}</p>
          <p className="product__price">{price} zł</p>
          <p onClick={handleAddProduct} className="product__add">
            Dodaj do koszyka
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleElement;

{
  /* <li key={index}>
<p>{item.title}</p>
<p>{item.description}</p>
<p>{item.price}</p>
<img src={item.thumbnail} alt={item.title} />
<p>Dodaj do koszyka</p>
</li> */
}
