import React, { Children } from "react";
import styled from "styled-components";

const ModalBackGround = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBG = ({ children, setShowModal = () => {} }) => {
  const onClickSearchButton = (e) => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopPropagation();
    setShowModal(false);
  };
  return (
    <ModalBackGround onClick={onClickSearchButton}>{children}</ModalBackGround>
  );
};

export default ModalBG;
