import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const ShoppingIcon = props => {
  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>{props.text}</span>
    </>
  );
};

export default ShoppingIcon;
