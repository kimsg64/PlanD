import React from "react";
import styled from "styled-components";

const BorderSpan = styled.span`
  width: ${(props) => props.spanWidth};
  height: 2px;
  background-color: var(--color-focus);
  position: absolute;
  top: ${(props) => props.fromTop};
  left: ${(props) => props.fromLeft};
  transition-duration: 0.3s;
  transform-origin: center;
`;

const BorderEffect = ({
  spanWidth = "0",
  fromTop = "58px",
  fromLeft = "0",
}) => {
  // console.log(spanWidth);
  return (
    <BorderSpan spanWidth={spanWidth} fromTop={fromTop} fromLeft={fromLeft} />
  );
};

export default BorderEffect;
