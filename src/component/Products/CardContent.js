import React from "react";
import styled from "styled-components";
const CardContent = props => {
  return (
    <CardContainer>
      <ProductImage src={props.url} alt="productImage" />
      <ImgOverlay>
        <OverlayBtn size="xxl" onClick={props.toggle}>
          اطلاعات بیشتر
        </OverlayBtn>
      </ImgOverlay>
      <CardText>
        {props.title}
        {/* {props.starValue} */}
      </CardText>
    </CardContainer>
  );
};
export default CardContent;
const CardContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;
const ProductImage = styled.img`
  min-height: 100%;
  padding: 5rem;
  opacity: 1;
  backface-visibility: hidden;
  width: 100%;
  border-radius: 1.5rem;
  position: relative;
  ${CardContainer}:hover & {
    opacity: 0.3;
  }
`;
const ImgOverlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: #000;
  opacity: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
  border-radius: 1.5rem 1.5rem 0 0;
  ${CardContainer}:hover & {
    opacity: 0.7;
  }
`;
const OverlayBtn = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem;
  border-radius: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  outline: none;
`;
const CardText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
  margin: 1rem;
`;
