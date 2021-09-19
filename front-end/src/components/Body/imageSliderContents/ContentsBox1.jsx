import React from "react";
import ImageBox from "./ImageBox";
import Image1 from "./sliderSources/Image1";
import Text1 from "./sliderSources/Text1";
import TextBox from "./TextBox";

const ContentsBox = () => {
  return (
    <div>
      <ImageBox>
        <Image1 />
      </ImageBox>
      <TextBox>
        <Text1 />
      </TextBox>
    </div>
  );
};

export default ContentsBox;
