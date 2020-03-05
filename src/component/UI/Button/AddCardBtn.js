import React, { useState, useContext } from "react";
import { ProductContext } from "../../Context";

const AddCardBtn = props => {
  const MyValue = useContext(ProductContext);
  const id = props.id;
  const inCard = props.inCard;

  return (
    <button
      disabled={inCard ? true : false}
      onClick={() => MyValue.addToCard(id)}
    >
      {!inCard ? (
        <span>افزودن به سبد خرید</span>
      ) : (
        <span>به سبد خرید اضافه شد</span>
      )}
    </button>
  );
};

export default AddCardBtn;
