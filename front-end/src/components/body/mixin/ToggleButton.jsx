import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ToggleBackground = styled.div`
  width: 80px;
  height: 32px;
  background-color: var(--color-focus);
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
  background-color: white;
  /* border: 1px solid var(--color-dark-green); */
  border-radius: 50%;
  box-shadow: 2px 1px 6px var(--color-dark-focus);
  transition-duration: 0.3s;
  transform: translateX(${(props) => props.toggleOn * 52 + "px"});
  position: relative;
`;

const Text = styled.div`
  color: white;
  font-size: var(--font-size-tiny);
  position: relative;
  top: 6px;
  right: ${(props) => (props.toggleOn === 0 ? "-40px" : "32px")};
`;

const ToggleButton = ({ setClassification = () => {} }) => {
  const [toggleOn, setToggleOn] = useState(0);

  useEffect(() => {
    toggleOn === 0
      ? setClassification("individual")
      : setClassification("company");
  }, [toggleOn]);

  const onClickButton = () => {
    // 0일때 개인, 1일때 사업자
    toggleOn === 0 ? setToggleOn(1) : setToggleOn(0);
  };

  return (
    <ToggleBackground onClick={onClickButton}>
      <ToggleCircle toggleOn={toggleOn}>
        <Text toggleOn={toggleOn}>{toggleOn === 0 ? "개인" : "법인"}</Text>
      </ToggleCircle>
    </ToggleBackground>
  );
};

export default ToggleButton;
