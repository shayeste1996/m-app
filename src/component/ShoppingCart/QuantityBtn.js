import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
const QuantityBtn = props => {
  return (
    <ButtonGroup style={{ direction: "ltr" }} aria-label="Basic example" size="lg">
      <Button variant="secondary" onClick={props.minus}>
        -
      </Button>
      <Button variant="secondary"> {props.count} </Button>
      <Button variant="secondary" onClick={props.add}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default QuantityBtn;
