import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
const RemoveItemBtn = props => {
  return (
    <Button variant="danger" size="lg">
      <FontAwesomeIcon onClick={props.remove} icon={faTrash} />
    </Button>
  );
};
export default RemoveItemBtn;
