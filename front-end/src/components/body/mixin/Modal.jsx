import React from "react";
import styled from "styled-components";

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: white;
`;

const Modal = ({ children }) => {
  return <ModalBox>{children}</ModalBox>;
};

export default Modal;
