import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const FavoriteBtn = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const loadingHandler = () => {
    setLoading(true);
    setShow(false);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <Button
      variant="light"
      size="lg"
      onClick={loadingHandler}
      disabled={loading}
    >
      {loading && (
        <div>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </div>
      )}
      {!loading &&
        (show ? (
          <FontAwesomeIcon color="red" icon={faHeart} />
        ) : (
          <FontAwesomeIcon color="green" icon={faCheck} />
        ))}
    </Button>
  );
};

export default FavoriteBtn;
