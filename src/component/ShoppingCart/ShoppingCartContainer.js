import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import CartContent from "./CartContent";
const ShoppingCartContainer = () => {
  return (
    <Container className="mt-5 p-5">
      <Row className="d-flex flex-row-reverse">
        <Col md={8}>
          <ShoppingContainer>
            <CartContent />
          </ShoppingContainer>
        </Col>
        <Col md={4}>
          <ShoppingContainer></ShoppingContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingCartContainer;

const ShoppingContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 2rem;
  text-align: right;
`;
