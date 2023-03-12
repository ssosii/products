import React from "react";
import SingleProduct from "./SingleProduct";
import { Product } from "./types";

const Products = ({ products }: { products: Product[] }) => {
    console.log("products",products);
  return (
    <>
      {products.map((product: Product) => (
        <SingleProduct key={product.id} {...product} />
      ))}
    </>
  );
};

export default Products;
