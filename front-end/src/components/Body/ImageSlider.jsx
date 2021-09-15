import React from "react";
import styled from "styled-components";

const ImageSliderContainer = styled.section`
  height: 72vh;
  width: 80vw;
  position: relative;
  overflow: hidden;
  .temp-image {
    width: 100%;
  }
`;

const TextInImage = styled.div`
  width: 20vw;
  position: relative;
  z-index: 2;
  top: -80vh;
  left: 8vw;
  h1 {
    color: white;
    font-size: var(--font-size-big-title);
    font-weight: 800;
    margin-bottom: calc(var(--margin-default) / 2);
  }
  p {
    font-size: var(--font-size-default);
    color: white;
    line-height: 2;
  }
`;

const ImageSlider = () => {
  return (
    <ImageSliderContainer>
      <img className="temp-image" src="images/temp_main.jpg" />
      <TextInImage>
        <h1>이것은 광고란다.</h1>
        <p>
          데이트를 잘하려면 뭘 해야 할까요? <br /> 일단 애인이 있어야 합니다.
          <br /> 그 다음에 필요한 것이 바로 우리 사이트임 <br />
          제발 가입해
        </p>
      </TextInImage>
    </ImageSliderContainer>
  );
};

export default ImageSlider;
