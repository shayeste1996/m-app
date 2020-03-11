import React, { useState, createContext, useEffect } from "react";
import { MyProducts } from "../component/Data/ProductList";
export const ProductContext = createContext(MyProducts);
const ProductProvider = props => {
  const [Products, setProducts] = useState([]);
  const [inShopCart, setInShopCart] = useState([]);
  const [inFavoriteCart, setInFavoriteCart] = useState([]);
  const [total, setTotal] = useState(0);
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
      setInShopCart([...inShopCart, product]);
    }
  };
  useEffect(() => {
    let subTotal = 0;
    inShopCart.map(item => (subTotal += item.total));
    setTotal([subTotal]);
  }, [inShopCart]);
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
    let tempCart = [...inShopCart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;
    setInShopCart(() => {
      return [...tempCart];
    });
  };
  const decrement = id => {
    let tempCart = [...inShopCart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count <= 1 ? 1 : product.count - 1;
    product.total = product.price * product.count;
    setInShopCart(() => {
      return [...tempCart];
    });
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
  const removeItem = id => {
    let tempCart = [...inShopCart];
    setInShopCart(tempCart.filter(item => item.id !== id));
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
    checkInFavoriteHandler,
    removeItem
  };
  return (
    <ProductContext.Provider value={MyValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
