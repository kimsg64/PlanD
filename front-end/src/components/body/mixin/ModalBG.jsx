import React from "react";
import styled from "styled-components";

const ModalBackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ExitIcon = styled.span`
  position: relative;
  top: 160px;
  left: ${(props) => props.coordLeft};
  /* left: 1360px; */
  z-index: 5;
  font-size: var(--font-size-title-normal);
  &:hover {
    cursor: pointer;
    color: var(--color-focus);
  }
  &:active {
    color: var(--color-dark-focus);
  }
`;

const ModalBG = ({
  children,
  setShowModalResult = () => {},
  setShowModal = () => {},
  coordLeft = "1360px",
}) => {
  const onClickSearchButton = (e) => {
    setShowModalResult(false);
    setShowModal(false);
  };
  return (
    <ModalBackGround onClick={onClickSearchButton}>
      <ExitIcon coordLeft={coordLeft}>
        <i className="fas fa-times"></i>
      </ExitIcon>
      {children}
    </ModalBackGround>
  );
};

export default ModalBG;
