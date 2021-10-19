import React from "react";
import styled from "styled-components";

const ModalBox = styled.div`
  width: 880px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  background-color: white;
`;

const Modal = ({ children }) => {
  return <ModalBox onClick={(e) => e.stopPropagation()}>{children}</ModalBox>;
};

export default Modal;
