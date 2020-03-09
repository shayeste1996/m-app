import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { ProductContext } from "../../Context";
import HeartIcon from "./HeartIcon";
import CheckIcon from "./CheckIcon";
import SpinnerIcon from "./SpinnerIcon";
const FavoriteBtn = props => {
  const MyValue = useContext(ProductContext);
  const checkInFavoriteHandler = MyValue.checkInFavoriteHandler(props.id);
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
      onClick={() => {
        MyValue.addToFavorite(props.id);
        loadingHandler();
      }}
      disabled={checkInFavoriteHandler ? true : false}
    >
      {loading && !show && <SpinnerIcon text="در حال اضافه کردن" />}
      {!checkInFavoriteHandler && show && <HeartIcon text="افزودن به علاقه مندی ها" />}
      {checkInFavoriteHandler  && show && <CheckIcon text="به علاقه مندی ها اضافه شد" />}
    </Button>
  );
};
export default FavoriteBtn;
