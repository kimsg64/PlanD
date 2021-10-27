import React from "react";
import styled from "styled-components";

const ModalBox = styled.div`
  width: 880px;
  height: ${(props) => props.height};
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  background-color: white;
`;

const Modal = ({ children, isLoaded = false }) => {
  return (
    <ModalBox
      onClick={(e) => e.stopPropagation()}
      height={isLoaded ? "600px" : ""}
    >
      {children}
    </ModalBox>
  );
};

export default Modal;
