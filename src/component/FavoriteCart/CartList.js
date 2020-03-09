import React from "react";
import { Row, Container } from "react-bootstrap";
import CartItem from "./CartItem";
const CartList = props => {
  const value = props.value;
  const inCart = value.inFavoriteCart;
  return (
    <Container>
      <Row className="justify-content-md-center">
          {inCart.map(item => {
            return <CartItem item={item} value={value} key={item.id} />;
          })}
      </Row>
    </Container>
  );
};
export default CartList;
