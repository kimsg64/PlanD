import React from "react";
import styled from "styled-components";

const TextInImage = styled.div`
  width: auto;
  position: relative;
  z-index: 3;
  white-space: nowrap;
  left: 8vw;
  top: -112vh;
  h1 {
    margin-bottom: calc(var(--margin-default) / 2);
    color: white;
    font-size: var(--font-size-big-title);
    font-weight: 800;
  }
  p {
    font-size: var(--font-size-default);
    color: white;
    line-height: 2;
  }
`;

const TextBox = ({ children }) => {
  return <TextInImage>{children}</TextInImage>;
};

export default TextBox;
