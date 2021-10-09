import React from "react";
import styled from "styled-components";

const BorderSpan = styled.span`
  width: ${(props) => props.spanWidth || "0"};
  height: 2px;
  background-color: var(--color-focus);
  position: absolute;
  top: 58px;
  transition-duration: 0.3s;
  transform-origin: center;
`;

const BorderEffect = ({ spanWidth = "0" }) => {
  // console.log(spanWidth);
  return <BorderSpan spanWidth={spanWidth} />;
};

export default BorderEffect;
