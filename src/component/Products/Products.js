import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();
const ProductsProvider = props => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/photos")
    //   .then(res => {
    //     const result = res.data.slice(0, 9);
    //     setProducts(result);
    //   })
    //   .catch(err => console.log(err));
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
