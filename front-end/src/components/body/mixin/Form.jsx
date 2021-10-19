import React from "react";
import styled from "styled-components";

const FormPage = styled.form`
  width: 72vw;
  height: auto;
  margin-top: 60px;
  margin-bottom: 40px;
  padding: calc(var(--padding-default) * 2) 0;
  display: flex;
  justify-content: center;
`;

const FormStyler = styled.div`
  width: 800px;
  padding: calc(var(--padding-default) * 2) 0 calc(var(--padding-default) * 2)
    calc(var(--padding-default) * 4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-light-bg);
  box-shadow: 0px 2px 4px 2px grey;
`;

// Form 컴포넌트가 form 역할을 하지 못하므로 ...props를 통해 submit 함수도 전달해야 함
// 이건 스타일만 Mixin으로 빼도 되지만 이왕 ...props를 썼으니 공부를 위해 남겨놔 보자
const Form = ({ children, ...props }) => {
  return (
    <FormPage {...props}>
      <FormStyler>{children}</FormStyler>
    </FormPage>
  );
};

export default Form;
