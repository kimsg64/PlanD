import React, { useState } from "react";
import styled from "styled-components";
import ImageSliderContents from "./ImageSliderContents";

const ImageSliderContainer = styled.section`
  height: 60vh;
  width: 100vw;
  position: relative;
  /* overflow: hidden; */
  display: flex;

  /* 임시 */
  overflow: scroll;

  img {
    width: 100%;
  }
`;

const ImageSlider = () => {
  const [isShown, setIsShown] = useState("1st");
  const handleImage = () => {
    setIsShown("2nd");
  };
  return (
    <ImageSliderContainer>
      <ImageSliderContents isShown={isShown} onClick={handleImage} />
    </ImageSliderContainer>
  );
};

export default ImageSlider;
