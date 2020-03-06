import React, { useContext, useState } from "react";
import { ProductContext } from "../../Context";
import Button from "react-bootstrap/Button";
import SpinnerIcon from "./SpinnerIcon";
import CheckIcon from "./CheckIcon";
import ShoppingIcon from "./ShoppingIcon";

const AddCardBtn = props => {
  const MyValue = useContext(ProductContext);
  const id = props.id;
  const inShopCart = props.inShopCart;

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const loadingHandler = () => {
    setLoading(true);
    setShow(false);
    setTimeout(() => {
      setLoading(false);
      setShow(true);
    }, 2000);
  };
  return (
    <Button
      style={{ fontSize: "2rem" }}
      className="p-2"
      variant="light"
      size="lg"
      disabled={inShopCart ? true : false}
      onClick={() => {
        MyValue.addToCard(id);
        loadingHandler();
      }}
    >
      {loading && !show && <SpinnerIcon text="در حال اضافه کردن" />}
      {!inShopCart && show && <ShoppingIcon text="افزودن به سبد خرید" />}
      {inShopCart && show && <CheckIcon text="به سبد خرید اضافه شد" />}
    </Button>
  );
};
export default AddCardBtn;
