import React, { useState, createContext, useEffect } from "react";
import { MyProducts } from "../component/Data/ProductList";
export const ProductContext = createContext(MyProducts);
const ProductProvider = props => {
  const [Products, setProducts] = useState([]);
  const [inShopCart, setInShopCart] = useState([]);
  const [inFavoriteCart, setInFavoriteCart] = useState([]);
  const [total] = useState(0);

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
      return [...inShopCart, product];
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
      return [...inFavoriteCart, product];
    });
  };
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
<<<<<<< HEAD
    let temProduct = [...Products];
    const proIndex = temProduct.indexOf(getProduct(id));
    temProduct.splice(proIndex, 1);
    setInShopCart(() => {
      return [...inShopCart];
    });
    console.log(temProduct);
  };
  const clearCart = () => {
    productsValue();
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
    increment,
    decrement,
    removeProduct,
    clearCart,
    total
  };
=======
    // let temProduct = [...Products];
    // const proIndex = temProduct.indexOf(getProduct(id));
    // temProduct.splice(proIndex,1);
    // setInShopCart(() => {
    //   return [...inShopCart];
    // });
    console.log("temProduct");
  };
  const clearCart = () => {
    setInShopCart([]);
  };
  useEffect(() => {
    productsValue();
  }, [inShopCart]);
  const addTotal = () => {
    let subTotal = 0;
    inShopCart.map(item => (item.total += subTotal));
  };
  const MyValue = {
    Products,
    addToCard,
    getProduct,
    addToFavorite,
    inShopCart,
    increment,
    decrement,
    removeProduct,
    clearCart,
    total
  };
  useEffect(() => {
    productsValue();
  }, []);
>>>>>>> 39499a3b921fe1b5043731d4d8cd9d858b62cd81

  return (
    <ProductContext.Provider value={MyValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
