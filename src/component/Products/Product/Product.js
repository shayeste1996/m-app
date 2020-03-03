import ReactStars from "react-stars";
import React, { useState, useEffect } from "react";
// import { ProductContext } from "../Products";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import MyModal from "../../MyModal";
import "./Product.css";
import styled from "styled-components";

const ImgContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
`;
const ImgOverlay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #4bc9ffbb;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
  border-radius: 1.5rem 1.5rem 0 0;
  z-index: 1;
  ${ImgContainer}:hover & {
    height: 100%;
    bottom: 0;
  }
`;
const ProductTitle = styled.div`
  position: relative;
  background-color: rgb(73, 73, 73);
  height: 4rem;
  width: 100%;
  color: white;
  margin-top: -1rem;
  border-radius: 0 0 1.5rem 1.5rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  padding-top: 0.7rem;
  padding-right: 0.5rem;
  color: #4bcaff;
  z-index: 5;
`;

const Product = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({
    url: null,
    title: null
  });
  const toggleModal = () => setOpen(!open);
  const [MyProducts, setMyProducts] = useState([
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
      id: 0,
      url: "/Assests/Images/gallery/1.png",
      starValue: 0
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
      id: 1,
      url: "/Assests/Images/gallery/1.png",
      starValue: 0
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
      id: 2,
      url: "/Assests/Images/gallery/1.png",
      starValue: 0
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
      id: 3,
      url: "/Assests/Images/gallery/1.png",
      starValue: 0
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
      id: 4,
      url: "/Assests/Images/gallery/1.png",
      starValue: 0
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
      id: 5,
      url: "/Assests/Images/gallery/1.png",
      starValue: 0
    }
  ]);
  useEffect(() => {
    console.log("clicked");
  }, []);

  // const { products } = useContext(ProductContext);
  return (
    <>
      <Container>
        <Row>
          {MyProducts.map((product, index) => {
            const productId = product.id;
            return (
              <Col md={4} key={product.id}>
                <ImgContainer>
                  <img className="gallery-img" src={product.url} alt="galery" />
                  <ImgOverlay>
                    <Button
                      className="overlay-text"
                      variant="secondary"
                      onClick={() => {
                        toggleModal();
                        setContent({
                          url: product.url,
                          title: product.name
                        });
                      }}
                    >
                      view more
                    </Button>
                    <ReactStars
                      count={5}
                      value={product.starValue}
                      onChange={starValue =>
                        setMyProducts(
                          MyProducts.map(item =>
                            item.id === index ? { ...item, starValue } : item
                          )
                        )
                      }
                      size={24}
                      color2={"#ffd700"}
                    />
                  </ImgOverlay>
                </ImgContainer>
                <ProductTitle>product {productId}</ProductTitle>
                <p className="gallery-content">
                  {product.title}
                  product's score: {product.starValue}
                </p>
              </Col>
            );
          })}
          <MyModal
            open={open}
            toggle={toggleModal}
            url={content.url}
            title={content.title}
          />
        </Row>
      </Container>
    </>
  );
};

export default Product;
