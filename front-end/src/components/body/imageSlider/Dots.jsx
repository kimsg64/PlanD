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
  &:hover {
    cursor: pointer;
  }
`;

const Dots = ({ idx = "first", setIdx = () => {} }) => {
  // console.log("idx in Dots", idx);
  return (
    <DotsBox>
      <Dot
        bgColor={
          idx === "first" ? "var(--color-green)" : "var(--color-light-green)"
        }
        onClick={() => setIdx("first")}
      />
      <Dot
        bgColor={
          idx === "second" ? "var(--color-green)" : "var(--color-light-green)"
        }
        onClick={() => setIdx("second")}
      />
      <Dot
        bgColor={
          idx === "third" ? "var(--color-green)" : "var(--color-light-green)"
        }
        onClick={() => setIdx("third")}
      />
    </DotsBox>
  );
};

export default Dots;
