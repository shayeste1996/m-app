import React from "react";
import { Modal, Button } from "react-bootstrap";
import ModalContent from "./ModalContent";
const MyModal = props => {
  const show = props.open;
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
          <ModalContent
            id={props.id}
            price={props.price}
            inFavoriteCart={props.inFavoriteCart}
            inShopCart={props.inShopCart}
            title={props.title}
            url={props.url}
          />
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
