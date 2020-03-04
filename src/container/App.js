import React, { createContext } from "react";
import ProductsProvider from "../component/Products/Products";
import Product from "../component/Products/Product/Product";
import GeneralStyle from "../Theme/GeneralStyle";
import MyModal from "../component/MyModal";
import "bootstrap/dist/css/bootstrap.min.css";
export const MyProducts = [
  {
    category: "Sporting Goods",
    price: "2,350,000",
    stocked: true,
    title: "گوشی موبایل سامسونگ مدل Galaxy Fold ظرفیت 512 گیگابایت",
    id: 0,
    url: "/Assests/Images/1.jpg",
    starValue: 0
  },
  {
    category: "Sporting Goods",
    price: "5,000,000",
    stocked: true,
    title:
      "گوشی سامسونگ مدل Note10 Lite SM-N770F دو سیم کارت ظرفیت 128 گیگابایت",
    id: 1,
    url: "/Assests/Images/2.jpg",
    starValue: 0
  },
  {
    category: "Sporting Goods",
    price: "7,432,000",
    stocked: false,
    title: "گوشی موبایل اپل مدل iPhone X ظرفیت 64 گیگابایت",
    id: 2,
    url: "/Assests/Images/3.jpg",
    starValue: 0
  },
  {
    category: "Electronics",
    price: "2,568,265",
    stocked: true,
    title: "گوشی موبایل اپل مدل iPhone 8 ظرفیت 64 گیگابایت",
    id: 3,
    url: "/Assests/Images/4.jpg",
    starValue: 0
  },
  {
    category: "Electronics",
    price: "4,256,000",
    stocked: false,
    title: "گوشی سامسونگ مدل A10s SM-A107F/DS دو سیم کارت ظرفیت 32 گیگابایت",
   id: 4,
    url: "/Assests/Images/5.jpg",
    starValue: 0
  },
  {
    category: "Electronics",
    price: "4,152,300",
    stocked: true,
    title: "گوشی موبایل آنر مدل 8C دو سیم کارت ظرفیت 32 گیگابایت",
    id: 5,
    url: "/Assests/Images/6.jpg",
    starValue: 0
  }
];
export const MyProductsContext = createContext(MyProducts);

const App = () => {
  return (
    <MyProductsContext.Provider value={{ MyProducts }}>
      <GeneralStyle />
      <ProductsProvider>
        <Product />
      </ProductsProvider>
      <MyModal />
    </MyProductsContext.Provider>
  );
};

export default App;
