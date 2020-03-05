import React, { useState, createContext, useEffect } from "react";
import { MyProducts } from "../component/Data/ProductList";
export const ProductContext = createContext(MyProducts);
const ProductProvider = props => {
  const [Products, setProducts] = useState([]);
  const [card, setCard] = useState([]);

  const productsValue = () => {
    let Products = [];
    MyProducts.forEach(item => {
      const singleItem = { ...item };
      Products = [...Products, singleItem];
    });
    setProducts(Products);
  };
  const getProduct = id => {
    return Products.find(item => item.id === id);
  };
  const addToCard = id => {
    let temProduct = [...Products];
    const index = temProduct.indexOf(getProduct(id));
    const product = temProduct[index];
    product.inCard = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setCard(
      () => {
        return {
          Products: temProduct,
          card: [...card, product]
        };
      },
      () => console.log(card, Products)
    );
  };
  const MyValue = { Products, addToCard, setProducts };
  useEffect(() => {
    productsValue();
  }, []);
  return (
    <ProductContext.Provider value={MyValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
