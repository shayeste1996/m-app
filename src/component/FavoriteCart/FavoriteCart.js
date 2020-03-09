import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartList from "./CartList";
import EmptyCart from "../ShopCart/EmptyCart";
import { ProductContext } from "../Context";
const FavoriteCart = () => {
  const [show, setShow] = useState(false);
  const MyValue = useContext(ProductContext);
  const inCart = MyValue.inFavoriteCart;
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
              <Col>
                <CartList value={MyValue} />
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

export default FavoriteCart;
