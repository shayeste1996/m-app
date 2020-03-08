import React from "react";
import  {Row, Col } from "react-bootstrap";

const CartTitle = () => {
  return (
    <Row
      className="d-flex flex-row-reverse p-4 text-center"
      style={{ borderBottom: "1px solid #ddd" }}
    >
      <Col>محصول</Col>
      <Col>اسم محصول</Col>
      <Col>قیمت</Col>
      <Col>تعداد</Col>
      <Col>حذف محصول</Col>
      <Col>جمع</Col>
    </Row>
  );
};

export default CartTitle;
