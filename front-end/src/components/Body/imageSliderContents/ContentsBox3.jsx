import React from "react";
import styled from "styled-components";
import ImageBox from "./ImageBox";
import Image3 from "./sliderSources/Image3";
import Text3 from "./sliderSources/Text3";
import TextBox from "./TextBox";

const ContentsBox = () => {
  return (
    <div>
      <ImageBox>
        <Image3 />
      </ImageBox>
      <TextBox>
        <Text3 />
      </TextBox>
    </div>
  );
};

export default ContentsBox;
