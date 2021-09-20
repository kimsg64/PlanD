import React from "react";
import ImageBox from "../ImageBox";
import Image2 from "./Image2";
import Text2 from "./Text2";
import TextBox from "../TextBox";

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
