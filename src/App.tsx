// React
import { useState, useEffect, useContext } from "react";
import { ProductsProps } from "./types";
import axios from "axios";

// Components
import Pagination from "./Pagniatios";
import Basket from "./Basket";
import Products from "./Products";

// Context

import { AppContextProvider } from "./AppContext";

// Style
import "./style.css";

function App() {
  const [product, setProduct] = useState<ProductsProps[] | null>();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);

  const getData = () => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err, "mamy error");
      });
  };

  useEffect(getData, []);

  const indexOfLastProduct: number = currentPage * postPerPage;
  const indexOfFirstProdcut: number = indexOfLastProduct - postPerPage;
  const currentPosts = product?.slice(indexOfFirstProdcut, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <AppContextProvider>
      <>
        <Products products={currentPosts} />

        <Pagination
          postsPerPage={postPerPage}
          totalPosts={product?.length}
          paginate={paginate}
        />

        <Basket />
      </>
    </AppContextProvider>
  );
}

export default App;
