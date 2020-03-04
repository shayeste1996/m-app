import React, { createContext } from "react";
import { MyProducts } from "../component/Data/ProductList";
export const ProductContext = createContext(MyProducts);
const ProductProvider = props => {
  return (
    <ProductContext.Provider value={{ MyProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
