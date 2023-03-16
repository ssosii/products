import Basket from "Basket";
import { useContext } from "react";
import AppContext from "./AppContext";
import { BakstetContentType } from "types";
import { Link } from "react-router-dom";

const BasketLayout = () => {
  const { basketContent } = useContext(AppContext);
  return (
    <>
      {console.log(basketContent)}
      <h2>Podsumowanie koszyka:</h2>

      {basketContent.map((product: BakstetContentType) => (
        <div>
          <p>Nazwa {product.id} </p>
          {product.title}
        </div>
      ))}

      <Link className="product__add" to="/">
        powrót
      </Link>
    </>
  );
};

export default BasketLayout;
