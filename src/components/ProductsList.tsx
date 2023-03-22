import React from "react";
import SingleProduct from "./SingleProduct";
import { Product } from "../types";

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products.map((product: Product) => (
        <SingleProduct key={product.id} {...product} />
      ))}
    </>
  );
};

export default ProductsList;
