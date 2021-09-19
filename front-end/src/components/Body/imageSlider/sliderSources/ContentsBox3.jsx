import React from "react";
import ImageBox from "../ImageBox";
import Image3 from "./Image3";
import Text3 from "./Text3";
import TextBox from "../TextBox";

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
