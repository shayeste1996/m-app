import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsList from "../component/Products/ProductsList";
import FavoriteCart from "../component/FavoriteCart/FavoriteCart";
import ShoppingCart from "../component/ShopCart/ShoppingCart";
import GeneralStyle from "../Theme/GeneralStyle";
import MyNavbar from "../component/Header/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <>
      <GeneralStyle />
      <MyNavbar />
      <Switch>
        <Route path="/" exact component={ProductsList} />
        <Route path="/favourits" component={FavoriteCart} />
        <Route path="/ShoppingCart" component={ShoppingCart} />
      </Switch>
    </>
  );
};
export default App;
