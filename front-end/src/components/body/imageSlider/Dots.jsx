// 미구현: 클릭시 색깔 변경

import React from "react";
import styled from "styled-components";

const DotsBox = styled.div`
  height: 54px;
  display: flex;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  margin: calc(var(--margin-default) / 4);
  border-radius: 50%;
  background-color: ${(props) => props.bgColor || "var(--color-light-green)"};
`;

const Dots = () => {
  return (
    <DotsBox>
      <Dot bgColor="var(--color-green)"></Dot>
      <Dot></Dot>
      <Dot></Dot>
    </DotsBox>
  );
};

export default Dots;
