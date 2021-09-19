import React from "react";
import styled from "styled-components";

const SignUpForm = styled.form`
  width: 72vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Form = ({ children }) => {
  return <SignUpForm>{children}</SignUpForm>;
};

export default Form;
