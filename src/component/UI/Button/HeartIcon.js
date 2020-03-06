import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const HeartIcon = props => {
  return (
    <>
      <FontAwesomeIcon color="red" icon={faHeart} />
      <span>{props.text}</span>
    </>
  );
};

export default HeartIcon;
