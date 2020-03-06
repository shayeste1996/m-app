import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import ProductDetails from './ProductDetails';
const CartContent = () => {
  return (
    <>
      <Row>
        <Col>
          <ListTitle>
            <ListItem> محصول </ListItem>
            <ListItem> قیمت </ListItem>
            <ListItem> تعداد </ListItem>
            <ListItem> قیمت کل </ListItem>
          </ListTitle>
        </Col>
      </Row>
      <Row>
        <Col className="px-0">
          <ProductDetails />
        </Col>
      </Row>
    </>
  );
};

export default CartContent;
const ListTitle = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
const ListItem = styled.li`
  display: inline;
  margin: 5rem;
  font-size: 2rem;
  font-weight: 500;
`;
