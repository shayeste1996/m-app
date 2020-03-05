import React, { useContext } from "react";
import { ProductContext } from "../component/Context";
import { Modal, Button, Row, Col } from "react-bootstrap";
import ReactStars from "react-stars";
import FavoriteBtn from "../component/UI/Button/FavoriteBtn";
import AddCardBtn from "../component/UI/Button/AddCardBtn";
const MyModal = props => {
  const show = props.open;

  const MyValue = useContext(ProductContext);
  const MyProducts = MyValue.Products;
  // const starValue = props.starValue;
  const productIndex = props.productIndex;
  const product = MyProducts[productIndex];

  const setRate = starValue => {
    const newProducts = MyProducts.map((item, index) => {
      if (index === productIndex) return { ...item, starValue };
      else return item;
    });
    MyValue.setProducts(newProducts);
  };

  return (
    <>
      <Modal
        style={{ height: "100%", padding: "5rem" }}
        show={show}
        onHide={props.toggle}
        toggle={props.toggle}
        animation={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>PRODUCTS</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: "2rem", textAlign: "right" }}>
          <Row>
            <Col>
              <p>قیمت محصول : {props.price}</p>
              <FavoriteBtn />
              <AddCardBtn inCard={props.inCard} id={props.id} />
              <p>امتیاز محصول :{props.starValue} </p>
              <ReactStars
                count={5}
                value={product ? product.starValue : 0}
                size={24}
                color2={"#ffd700"}
                onChange={starValue => setRate(starValue)}
              />
            </Col>
            <Col>
              <img alt="product" src={props.url} style={{ height: "40rem" }} />
              {props.title}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.toggle}>
            Close
          </Button>
          <Button variant="primary" onClick={props.toggle}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
