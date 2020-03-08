import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartList from "./CartList";
import CardTotal from "./CardTotal";
import EmptyCart from "./EmptyCart";
import { ProductContext } from "../Context";
const ShoppingCart = () => {
  const [show, setShow] = useState(false);
  const MyValue = useContext(ProductContext);
  const inCart = MyValue.inShopCart;
  useEffect(() => {
    if (inCart.length > 0) {
      return setShow(true);
    }
  });
  return (
    <div>
      {show ? (
        <>
          <Container className="mt-5 p-5">
            <Row className="d-flex flex-row-reverse">
              <Col md={9}>
                <CartList value={MyValue} />
              </Col>
              <Col md={3}>
                <CardTotal value={MyValue} />
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default ShoppingCart;
