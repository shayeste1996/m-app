import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsList from "../component/Products/ProductsList";
import FavoriteList from "../component/FavoriteList/FavoriteList";
import ShoppingCart from "../component/ShoppingCart/ShoppingCart";
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
        <Route path="/favourits" component={FavoriteList} />
        <Route path="/ShoppingCart" component={ShoppingCart} />
      </Switch>
    </>
  );
};
export default App;
