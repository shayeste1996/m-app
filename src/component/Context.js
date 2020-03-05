import React, { useState, createContext, useEffect } from "react";
import { MyProducts } from "../component/Data/ProductList";
export const ProductContext = createContext(MyProducts);
const ProductProvider = props => {
  const [Products, setProducts] = useState([]);
  const [card, setCard] = useState([]);
  const [rate, setRate] = useState([]);
  //copying instead of refrencing
  const productsValue = () => {
    let Products = [];
    MyProducts.forEach(item => {
      const singleItem = { ...item };
      Products = [...Products, singleItem];
    });
    setProducts(() => Products);
  };
  const getProduct = id => {
    return Products.find(item => item.id === id);
  };
  const addToCard = id => {
    let temProduct = [...Products];
    const proIndex = temProduct.indexOf(getProduct(id));
    const product = temProduct[proIndex];
    product.inCard = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setCard(() => {
      return { card: [product] };
    });
  };

  // const setRate = starValue => {
  //   const newProducts = MyProducts.map((item, index) => {
  //     if (index === productIndex) return { ...item, starValue };
  //     else return item;
  //   });
  //   MyValue.setProducts(newProducts);
  // };



  const giveStar = (starValue, id) => {
    let temProduct = [...Products];
    const proIndex = temProduct.indexOf(getProduct(id));
    const product = temProduct[proIndex];
    product.starValue = starValue;
    setRate(() => {
      return { rate: [product] };
    });
  };
  const MyValue = { Products, addToCard,giveStar,setProducts };
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
