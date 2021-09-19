import React from "react";
import styled from "styled-components";
import LinkedContents from "./imageSliderContents/LinkedContents";

const ImageSliderContainer = styled.section`
  height: 60vh;
  width: 100vw;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const ImageSlider = () => {
  return (
    <>
      <ImageSliderContainer>
        <LinkedContents />
      </ImageSliderContainer>
    </>
  );
};

export default ImageSlider;
