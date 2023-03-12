// React
import { useState, useEffect } from "react";
import { Product } from "./types";
import axios from "axios";
import axiosAPI from "utils/axios";

import "_mocks";

// Components
import Pagination from "./Pagniatios";
import Basket from "./Basket";
import Products from "./Products";

// Context

import { AppContextProvider } from "./AppContext";

// Style
import "./style.css";

function App() {
  const [product, setProduct] = useState<Product[]>([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axiosAPI.get("/api/posts");
        // const {data} = await axiosAPI.post("/api/paginacja",{page: 3});
        console.log("response", data);
      } catch (e) {
        console.log();
      }
    };
    fetchData();
  }, []);

  const indexOfLastProduct: number = currentPage * postPerPage;
  const indexOfFirstProdcut: number = indexOfLastProduct - postPerPage;
  const currentPosts = product.slice(indexOfFirstProdcut, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <AppContextProvider>
      <>
        <Products products={currentPosts} />

        <Pagination
          postsPerPage={postPerPage}
          totalPosts={product.length}
          paginate={paginate}
        />

        <Basket />
      </>
    </AppContextProvider>
  );
}

export default App;
