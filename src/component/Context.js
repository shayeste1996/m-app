import React, { useState, createContext, useEffect } from "react";
import { MyProducts } from "../component/Data/ProductList";
export const ProductContext = createContext(MyProducts);
const ProductProvider = props => {
  const [Products, setProducts] = useState([]);
  const [inShopCart, setInShopCart] = useState([]);
  const [inFavoriteCart, setInFavoriteCart] = useState([]);
  const [total, setTotal] = useState([]);
  console.log(total);
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
  const checkInShopHandler = id => {
    return inShopCart.find(item => item.id === id);
  };

  const addToCard = id => {
    let temProduct = [...Products];
    const proIndex = temProduct.indexOf(getProduct(id));
    const product = temProduct[proIndex];
    if (checkInShopHandler(id)) {
      console.log("it exists");
    } else {
      product.count = 1;
      const price = product.price;
      product.total = price;
      // total.length > 0 ? total.reduce(sum) : console.log("error");
      // if (total.length > 0) {
      //   return setTotal(total.reduce((a, b) => a + b));
      // } else {
      //   setTotal([...total, product.total]);
      // }
      setTotal([...total, product.total]);
      setInShopCart([...inShopCart, product]);
    }
  };
  const checkInFavoriteHandler = id => {
    return inFavoriteCart.find(item => item.id === id);
  };
  const addToFavorite = id => {
    let temProduct = [...Products];
    const proIndex = temProduct.indexOf(getProduct(id));
    const product = temProduct[proIndex];
    checkInFavoriteHandler(id)
      ? console.log("it exists")
      : setInFavoriteCart([...inFavoriteCart, product]);
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
  const increment = id => {
    let temProduct = [...Products];
    const proIndex = temProduct.indexOf(getProduct(id));
    const product = temProduct[proIndex];
    product.count = product.count + 1;
    const price = product.price;
    product.total = price * product.count;
    setInShopCart(() => {
      return [product];
    });
  };
  const decrement = id => {
    console.log("decrement method");
  };
  const removeProduct = id => {
    let temProduct = [...Products];
    const proIndex = temProduct.indexOf(getProduct(id));
    temProduct.splice(proIndex, 1);
    setInShopCart(() => {
      return [...inShopCart];
    });
    console.log(temProduct);
  };
  const clearCart = () => {
    let temProduct = [...Products];
    temProduct.forEach(product => {
      product.count = 0;
      product.total = 0;
    });
    setInShopCart([]);
  };
  useEffect(() => {
    productsValue();
  }, []);
  const MyValue = {
    Products,
    addToCard,
    getProduct,
    addToFavorite,
    inShopCart,
    inFavoriteCart,
    increment,
    decrement,
    removeProduct,
    clearCart,
    total,
    checkInShopHandler,
    checkInFavoriteHandler
  };
  return (
    <ProductContext.Provider value={MyValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
