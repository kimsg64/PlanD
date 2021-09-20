import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0 calc(var(--margin-default) / 4);
  padding: calc(var(--padding-default) / 4) calc(var(--padding-default) / 2);
  font-weight: 800;
  background-color: var(--color-brown);
  border: none;
  border-radius: 4px;
  color: var(--color-yellow);
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

// 스타일드 컴포넌트의 as 활용해서 submit 버튼으로 바꿔보기

const Button = ({ children }) => {
  const onClickBtn = (e) => {
    e.preventDefault();
  };
  return <StyledButton onClick={onClickBtn}>{children}</StyledButton>;
};

export default Button;
