import React from "react";
import ProductsProvider from "../component/Products/Products";
import Product from "../component/Products/Product/Product";
import GeneralStyle from "../Theme/GeneralStyle";
import MyModal from "../component/MyModal";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <GeneralStyle />
      <ProductsProvider>
        <Product />
      </ProductsProvider>
      <MyModal />
    </>
  );
};

export default App;
