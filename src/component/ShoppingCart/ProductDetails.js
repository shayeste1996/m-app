import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
const ProductDetails = () => {
  return (
    <Row className=" pt-4 px-1">
      {/* <Col md={2}>
        <MiniImage src="/Assests/Images/1.jpg" />
      </Col>
      <Col className="pt-4">اسم محصول </Col>
      <Col className="pt-4">1,200,000</Col>
      <Col className="pt-4">1</Col>
      <Col className="pt-4">2,000,000</Col> */}

      <Col>
        <Table>
          <thead>
            <tr>
              <TableHeader>اسم</TableHeader>
              <TableHeader>اسم</TableHeader>
              <TableHeader>اسم</TableHeader>
              <TableHeader>اسم</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>اسم</td>
                <td>1,200,000</td>
                <td>1</td>
                <td>2,000,000</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ProductDetails;

const Table = styled.table`
  width: 100%;
  text-align:right;
  direction:rtl;
  border-collapse: collapse;

`;
const TableHeader = styled.th`
  height: 50%;
`;
