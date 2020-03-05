import React, { useState } from "react";
import { Col } from "react-bootstrap";
import MyModal from "../MyModal";
import "./Product.css";
import styled from "styled-components";
const Product = props => {
  const { url, inCard, price, starValue, title } = props.product;
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({
    url,
    inCard,
    title,
    price,
    starValue: null
  });
  const toggleModal = () => setOpen(!open);
  const [starHandler, setStarHandler] = useState("");
  return (
    <>
      <Col md={4}>
        <ImgContainer>
          <ProductImage src={url} alt="productImage" />
          <ImgOverlay>
            <OverlayBtn
              size="xxl"
              onClick={() => {
                toggleModal();
                setContent(props.product);
              }}
            >
              اطلاعات بیشتر
            </OverlayBtn>
          </ImgOverlay>
          <p className="gallery-content">
            {title}
            {starValue}
          </p>
        </ImgContainer>
      </Col>
      <MyModal
        open={open}
        toggle={toggleModal}
        url={content.url}
        title={content.title}
        price={content.price}
        starValue={content.starValue}
        inCard={content.inCard}
        starHandler={starHandler}
      />
    </>
  );
};
export default Product;
const ImgContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 4rem;
  margin: 4rem;
`;
const ProductImage = styled.img`
  min-height: 100%;
  opacity: 1;
  backface-visibility: hidden;
  width: 100%;
  border-radius: 1.5rem;
  position: relative;
  ${ImgContainer}:hover & {
    opacity: 0.3;
  }
`;
const ImgOverlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: #000;
  opacity: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  border-radius: 1.5rem 1.5rem 0 0;
  ${ImgContainer}:hover & {
    opacity: 0.7;
  }
`;
const OverlayBtn = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  border-radius: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  outline: none;
`;
