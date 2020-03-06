import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { ProductContext } from "../../component/Context";
import ReactStars from "react-stars";
import FavoriteBtn from "../../component/UI/Button/FavoriteBtn";
import AddCardBtn from "../../component/UI/Button/AddCardBtn";
const ModalContent = props => {
  const starValue = props.starValue;
  const MyValue = useContext(ProductContext);
  const productIndex = props.index;
  // const product = MyValue.Products[productIndex];
  const setRate = starValue => {
    const newProducts = MyValue.Products.map((item, index) => {
      if (index === productIndex) return { ...item, starValue };
      else return item;
    });
    MyValue.setProducts(newProducts);
    console.log(productIndex);
  };
  return (
    <Row>
      <Col md={7} className="pr-0 pl-5">
        <h1>ویژگی های محصول </h1>
        {props.title}
        <p>قیمت محصول : {props.price}</p>
        <Row>
          <Col md={7}>
            <FavoriteBtn inFavoriteCart={props.inFavoriteCart} id={props.id} />
          </Col>
          <Col md={5} className="pl-1">
            <AddCardBtn inShopCart={props.inShopCart} id={props.id} />
          </Col>
        </Row>
        <p>امتیاز محصول :{props.starValue} </p>
        <ReactStars
          count={5}
          // value={product ? product.starValue : 0}
          size={24}
          color2={"#ffd700"}
          onChange={() => MyValue.getProduct(props.id)}
        />
      </Col>
      <Col md={5} className="pl-0">
        <img alt="product" width="100%" src={props.url} />
      </Col>
    </Row>
  );
};

export default ModalContent;
