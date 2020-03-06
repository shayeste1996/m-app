import React, { useState, createContext, useEffect } from "react";
import { MyProducts } from "../component/Data/ProductList";
export const ProductContext = createContext(MyProducts);
const ProductProvider = props => {
  const [Products, setProducts] = useState([]);
  const [inShopCart, setInShopCart] = useState([]);
  const [inFavoriteCart, setInFavoriteCart] = useState([]);

  // const [rate, setRate] = useState([]);
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
    // console.log(id)
  };
  const addToCard = id => {
    let temProduct = [...Products];
    const proIndex = temProduct.indexOf(getProduct(id));
    const product = temProduct[proIndex];
    product.inShopCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setInShopCart(() => {
      return { inShopCart: [product] };
    });
  };
  // const setRate = starValue => {
  //   const newProducts = MyProducts.map((item, index) => {
  //     if (index === productIndex) return { ...item, starValue };
  //     else return item;
  //   });
  //   MyValue.setProducts(newProducts);
  // };

  // const giveStar = id => {
  //    let temProduct = [...Products];
  //    const proIndex = temProduct.indexOf(getProduct(id));
  //    const product = temProduct[proIndex];
  //   // product.starValue = starValue;
  //   console.log(id);
  //   // setRate(() => {
  //   //   return { rate: [product] };
  //   // });
  // };
  const addToFavorite = id => {
    let temProduct = [...Products];
    const proIndex = temProduct.indexOf(getProduct(id));
    const product = temProduct[proIndex];
    product.inFavoriteCart = true;
    setInFavoriteCart(() => {
      return { inFavoriteCart: [product] };
    });
  };
  const MyValue = { Products, addToCard, getProduct,addToFavorite };
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
