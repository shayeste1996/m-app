import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";
const CardTotal = props => {
  const { clearCart, total } = props.value;
  return (
    <ShoppingContainer>
      <span> {total} : مبلغ قابل پرداخت</span>
      <Link to="/">
        <Button variant="danger" size="lg" onClick={() => clearCart()}>
          clear cart
        </Button>
      </Link>
    </ShoppingContainer>
  );
};
export default CardTotal;
const ShoppingContainer = styled.div`
  width: 100%;
  font-size: 2rem;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 2rem;
  text-align: right;
`;
