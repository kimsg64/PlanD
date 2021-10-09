import React from "react";
import styled from "styled-components";

const LineContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-evenly;
  font-size: var(--font-size-normal);
  position: relative;
  top: -52px;
  left: 220px;
`;

const LineCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  color: white;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 0.2s;
  }
`;

const LineSelector = () => {
  return (
    <LineContainer>
      <LineCircle bgColor="var(--color-line1)">1</LineCircle>
      <LineCircle bgColor="var(--color-line2)">2</LineCircle>
      <LineCircle bgColor="var(--color-line3)">3</LineCircle>
      <LineCircle bgColor="var(--color-line4)">4</LineCircle>
      <LineCircle bgColor="var(--color-line5)">5</LineCircle>
      <LineCircle bgColor="var(--color-line6)">6</LineCircle>
      <LineCircle bgColor="var(--color-line7)">7</LineCircle>
      <LineCircle bgColor="var(--color-line8)">8</LineCircle>
      <LineCircle bgColor="var(--color-line9)">9</LineCircle>
    </LineContainer>
  );
};

export default LineSelector;
