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

const LineSelector = ({ setLineColor = () => {}, setLineNum = () => {} }) => {
  const onClickNum = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.innerText);
    setLineNum(e.target.innerText);
    setLineColor(`var(--color-line${e.target.innerText})`);
  };
  return (
    <LineContainer>
      <LineCircle bgColor="var(--color-line1)" onClick={onClickNum}>
        1
      </LineCircle>
      <LineCircle bgColor="var(--color-line2)" onClick={onClickNum}>
        2
      </LineCircle>
      <LineCircle bgColor="var(--color-line3)" onClick={onClickNum}>
        3
      </LineCircle>
      <LineCircle bgColor="var(--color-line4)" onClick={onClickNum}>
        4
      </LineCircle>
      <LineCircle bgColor="var(--color-line5)" onClick={onClickNum}>
        5
      </LineCircle>
      <LineCircle bgColor="var(--color-line6)" onClick={onClickNum}>
        6
      </LineCircle>
      <LineCircle bgColor="var(--color-line7)" onClick={onClickNum}>
        7
      </LineCircle>
      <LineCircle bgColor="var(--color-line8)" onClick={onClickNum}>
        8
      </LineCircle>
      <LineCircle bgColor="var(--color-line9)" onClick={onClickNum}>
        9
      </LineCircle>
    </LineContainer>
  );
};

export default LineSelector;
