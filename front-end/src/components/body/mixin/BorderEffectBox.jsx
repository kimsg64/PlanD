import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) => props.fromLeft};
`;

const BorderEffectBox = ({ children, fromLeft = "0" }) => {
  return <Wrapper fromLeft={fromLeft}>{children}</Wrapper>;
};

export default BorderEffectBox;
