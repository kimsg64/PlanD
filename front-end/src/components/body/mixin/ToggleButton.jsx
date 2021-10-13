import React, { useState } from "react";
import styled from "styled-components";

const ToggleBackground = styled.div`
  width: 54px;
  height: 32px;
  background-color: var(--color-green);
  border-radius: 16px;
  display: flex;
  align-items: center;
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
  }
`;

const ToggleCircle = styled.div`
  width: 28px;
  height: 28px;
  background-color: hsl(0, 0%, 70%);
  /* border: 1px solid var(--color-dark-green); */
  border-radius: 50%;
  /* box-shadow: -4px 0px 2px 2px hsl(0, 0%, 20%); */
  transition-duration: 0.3s;
  transform: translateX(${(props) => props.toggleOn * 26 + "px"});
`;

const ToggleButton = () => {
  const [toggleOn, setToggleOn] = useState(0);
  const onClickButton = () => {
    return toggleOn === 0 ? setToggleOn(1) : setToggleOn(0);
  };
  return (
    <ToggleBackground onClick={onClickButton}>
      <ToggleCircle toggleOn={toggleOn} />
    </ToggleBackground>
  );
};

export default ToggleButton;
