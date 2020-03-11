import React from "react";
import styled from "styled-components";
import RemoveItemBtn from "../UI/Button/RemoveItemBtn";
import QuantityBtn from "./QuantityBtn";
const CartItem = props => {
  const { id, url, price, total, count } = props.item;
  const { increment, decrement, removeItem } = props.value;
  return (
    <Table>
      <tbody>
        <tr>
          <TableData>
            <ProductImg src={url} />
          </TableData>
          <TableData>
            <span>سامسونگ</span>
          </TableData>
          <TableData>{price}</TableData>
          <TableData>
            <QuantityBtn
              add={() => increment(id)}
              minus={() => decrement(id)}
              count={count}
            />
          </TableData>
          <TableData>
            <RemoveItemBtn remove={() => removeItem(id)} />
          </TableData>
          <TableData>{total}</TableData>
        </tr>
      </tbody>
    </Table>
  );
};
export default CartItem;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  direction: rtl;
`;
const TableData = styled.td`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
  width: 10%;
  text-align: center;
`;
const ProductImg = styled.img`
  width: 40%;
`;
