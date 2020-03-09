import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import CartTitle from "./CartTitle";
const CartList = props => {
  const value = props.value;
  const cart = value.inShopCart;
  return (
          <ShoppingContainer>
            <CartTitle />
            {cart.map(item => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  value={value}
                />
              );
            })}
          </ShoppingContainer>
  );
};

export default CartList;

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
