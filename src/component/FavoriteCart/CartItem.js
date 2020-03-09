import React from "react";
import { Col } from "react-bootstrap";
import AddCardBtn from "../UI/Button/AddCardBtn";
import styled from "styled-components";
const CartItem = props => {
  const { title, url, price,inShopCart,id } = props.item;
  console.log(inShopCart)
  return (
    <Col md={4} className="mb-5">
      <CardContainer>
        <ProductImage src={url} alt="productImage" />
        <CardText>
          {title}
          <p> {price} : قیمت </p>
          <AddCardBtn inShopCart={inShopCart} id={id} />
        </CardText>
      </CardContainer>
    </Col>
  );
};

export default CartItem;
const CardContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;
const ProductImage = styled.img`
  min-height: 100%;
  padding: 5rem;
  opacity: 1;
  backface-visibility: hidden;
  width: 100%;
  border-radius: 1.5rem;
  position: relative;
`;
const CardText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
  margin: 1rem;
`;
