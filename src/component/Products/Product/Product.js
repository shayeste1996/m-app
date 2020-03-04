import React, { useContext, useState, useEffect } from "react";
import { MyProductsContext } from "../../../container/App";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyModal from "../../MyModal";
import "./Product.css";
import styled from "styled-components";
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
const Product = () => {
  const { MyProducts } = useContext(MyProductsContext);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({
    url: null,
    title: null,
    price: null,
    starValue: null,
    index:null
  });
  const toggleModal = () => setOpen(!open);
  const [Products, setProducts] = useState(MyProducts);
  const [starHandler, setStarHandler] = useState("");
  useEffect(() => {
    console.log("clicked");
  }, []);
  return (
    <Container>
      <Row>
        {Products.map((product, index) => {
          return (
            <Col md={4} key={product.id}>
              <ImgContainer>
                <ProductImage src={product.url} alt="galery" />
                <ImgOverlay>
                  <OverlayBtn
                    size="xxl"
                    onClick={() => {
                      toggleModal();
                      setContent({
                        url: product.url,
                        title: product.name,
                        price: product.price,
                        starValue: product.starValue,
                        index:index
                      });
                    }}
                  >
                    اطلاعات بیشتر
                  </OverlayBtn>
                </ImgOverlay>
                <p className="gallery-content">
                  {product.title}
                  {product.starValue}
                </p>
              </ImgContainer>
            </Col>
          );
        })}
        <MyModal
          open={open}
          toggle={toggleModal}
          url={content.url}
          title={content.title}
          price={content.price}
          starValue={content.starValue}
          starHandler={starHandler}
          productIndex={content.index}
        />
      </Row>
    </Container>
  );
};

export default Product;
