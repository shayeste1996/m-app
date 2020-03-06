import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const CheckIcon = props => {
  return (
    <>
      <FontAwesomeIcon color="green" icon={faCheck} />
      <span>{props.text}</span>
    </>
  );
};

export default CheckIcon;
