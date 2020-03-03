import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MyModal = props => {
  return (
    <>
      <Modal show={props.open} toggle={props.toggle} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>PRODUCTS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img alt="product" src= {props.url}/>
          {props.title}
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
