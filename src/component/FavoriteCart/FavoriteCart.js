import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartList from "./CartList";
import EmptyCart from "../ShopCart/EmptyCart";
import { ProductContext } from "../Context";
const FavoriteCart = () => {
  const MyValue = useContext(ProductContext);
  const inCart = MyValue.inFavoriteCart;
  return (
    <div>
      {inCart.length > 0 ? (
          <Container className="mt-5 p-5">
            <Row className="d-flex flex-row-reverse">
              <Col>
                <CartList value={MyValue} />
              </Col>
            </Row>
          </Container>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
export default FavoriteCart;
