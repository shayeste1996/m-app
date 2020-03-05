import React, { useState } from "react";
import { Col } from "react-bootstrap";
import MyModal from "../MyModal";
import CardContent from "./CardContent";
const Product = props => {
  const { url, inCard, price, starValue, title, id } = props.product;
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({
    url,
    inCard,
    title,
    price,
    starValue,
    id: null
  });
  const toggleModal = () => setOpen(!open);
  return (
    <>
      <Col className="mb-5" xs={9} sm={6} md={4}>
        <CardContent
          url={url}
          title={title}
          starValue={starValue}
          toggle={() => {
            toggleModal();
            setContent(props.product);
          }}
        />
      </Col>
      <MyModal
        open={open}
        toggle={toggleModal}
       {...content}
      />
    </>
  );
};
export default Product;
