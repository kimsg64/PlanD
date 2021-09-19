import React from "react";
import styled from "styled-components";
import ImageBox from "./ImageBox";
import Image2 from "./sliderSources/Image2";
import Text2 from "./sliderSources/Text2";
import TextBox from "./TextBox";

const ContentsBox = () => {
  return (
    <div>
      <ImageBox>
        <Image2 />
      </ImageBox>
      <TextBox>
        <Text2 />
      </TextBox>
    </div>
  );
};

export default ContentsBox;
