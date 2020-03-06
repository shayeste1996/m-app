import React from "react";
import Spinner from "react-bootstrap/Spinner";
const SpinnerIcon = props => {
  return (
    <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span> {props.text}</span>
    </>
  );
};
export default SpinnerIcon;
