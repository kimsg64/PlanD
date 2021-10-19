import React from "react";
import styled from "styled-components";
import LinkedContents from "./LinkedContents";

const ImageSliderContainer = styled.section`
  height: 80vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const ImageSlider = ({ idx = "first", setIdx = () => {} }) => {
  return (
    <ImageSliderContainer>
      <LinkedContents idx={idx} setIdx={setIdx} />
    </ImageSliderContainer>
  );
};

export default ImageSlider;
