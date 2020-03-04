import React, { useState, useContext } from "react";
import { MyProductsContext } from "../container/App";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactStars from "react-stars";
import FavoriteBtn from "../component/UI/Button/FavoriteBtn";
const MyModal = props => {
  const { MyProducts } = useContext(MyProductsContext);
  const [products, setProducts] = useState(MyProducts);
  const show = props.open;
  const starValue = props.starValue;
  const productIndex = props.productIndex;
  console.log(productIndex);
  return (
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
            <p>امتیاز محصول :{starValue} </p>
            <ReactStars
              count={5}
              value={starValue}
              size={24}
              color2={"#ffd700"}
              onChange={starValue =>
                setProducts(
                  products.map((value, id) =>
                    id === props.productIndex ? { ...value, starValue } : value
                  )
                )
              }
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
  );
};

export default MyModal;
