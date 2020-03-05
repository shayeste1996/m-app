import React, { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "../Context";
import { Container, Row } from "react-bootstrap";
const ProductsList = () => {
  const MyValue = useContext(ProductContext);
  return (
    <Container>
      <Row className="justify-content-center pt-5">
        {MyValue.Products.map(product => (
          <Product key={product.id} product={product}/>
        ))}
      </Row>
    </Container>
  );
};
export default ProductsList;
