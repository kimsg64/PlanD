import React from "react";
import styled from "styled-components";

const BorderSpan = styled.span`
  width: ${(props) => props.spanWidth};
  height: 2px;
  background-color: ${(props) => props.bgColor};
  position: absolute;
  top: ${(props) => props.fromTop};
  /* left: ${(props) => props.fromLeft || null}; */
  transition-duration: 0.3s;
  transform-origin: center;
`;

const BorderEffect = ({
  spanWidth = "0",
  fromTop = "38px",
  // fromLeft = "0",
  bgColor = "var(--color-focus)",
}) => {
  // console.log(spanWidth);
  return (
    <BorderSpan
      spanWidth={spanWidth}
      fromTop={fromTop}
      // fromLeft={fromLeft}
      bgColor={bgColor}
    />
  );
};

export default BorderEffect;
