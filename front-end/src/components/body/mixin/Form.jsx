import React from "react";
import styled from "styled-components";

const SignUpForm = styled.form`
  width: 72vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 40px;
  background-color: var(--color-bg);
`;

// Form 컴포넌트가 form 역할을 하지 못하므로 ...props를 통해 submit 함수도 전달해야 함
// 이건 스타일만 Mixin으로 빼도 되지만 이왕 ...props를 썼으니 공부를 위해 남겨놔 보자
const Form = ({ children, ...props }) => {
  return <SignUpForm {...props}>{children}</SignUpForm>;
};

export default Form;
