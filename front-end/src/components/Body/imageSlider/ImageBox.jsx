import React from "react";
import styled from "styled-components";

const MainImage = styled.div`
  width: 100vw;
`;

const ImageBox = ({ children }) => {
  return <MainImage>{children}</MainImage>;
};

export default ImageBox;
