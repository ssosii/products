import React from "react";
import SingleElement from "./SingleElement";

const Products = ({ products }: { products: any }) => {
  return (
    <p>
      {products?.map((item: any, index: number) => {
        return (
          <>
            <SingleElement
              key={index}
              title={item.title}
              image={item.thumbnail}
              description={item.description}
              price={item.price}
            />
          </>
        );
      })}
    </p>
  );
};

export default Products;

{
  /* <li key={index}>
<p>{item.title}</p>
<p>{item.description}</p>
<p>{item.price}</p>
<img src={item.thumbnail} alt={item.title} />
<p>Dodaj do koszyka</p>
</li> */
}
