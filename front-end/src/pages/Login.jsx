import React from "react";
import styled from "styled-components";
import BodyLayout from "../components/body/BodyLayout";
import {
  Checkbox,
  CheckboxLabel,
  Button,
} from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Modal = styled.form`
  width: 480px;
  height: 480px;
  padding: calc(var(--padding-default) * 2);
  margin-top: var(--margin-header-to-body);
  background-color: var(--color-yellow);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h1 {
    margin-top: var(--margin-default);
    font-weight: 800;
  }
  & > div {
    /* input에 의사 요소 안들어가니까 어딘가로 옮기자... */
    ::after {
      content: "아이디 또는 비밀번호를 입력해 주세요"
      margin-left: calc(var(--margin-default) / 4);
      font-size: var(--font-size-tiny);
      color: var(--color-pink);
    }
  }
`;

const InputBox = styled.input`
  width: 100%;
  font-size: var(--font-size-large);
  margin-top: calc(var(--margin-default) / 2);
  padding: calc(var(--padding-default) / 2);
  border: 2px solid white;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 2px solid var(--color-brown);
  }
`;

const CheckboxWithoutMargin = styled(Checkbox)`
  margin-left: 0;
`;
const CheckboxLabelWithoutMargin = styled(CheckboxLabel)`
  margin: calc(var(--margin-line-space) * 2) 0 0 0;
`;

const SubmitButton = styled(InputBox)`
  margin-top: calc(var(--margin-default) * 2);
  background-color: var(--color-black);
  border: 2px solid var(--color-black);
  border-radius: 4px;
  color: white;
  transition-duration: 0.2s;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    color: var(--color-pink);
  }
  &:focus {
    outline: none;
    border: 2px solid var(--color-black);
  }
`;

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <BodyLayout>
        <Modal onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <div>
            <InputBox type="text" placeholder="ID" />
            <InputBox type="password" placeholder="Password" />
            <CheckboxLabelWithoutMargin>
              <CheckboxWithoutMargin type="checkbox" />
              로그인 유지하기
            </CheckboxLabelWithoutMargin>
          </div>
          <SubmitButton type="submit" value="Sign in" />
        </Modal>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Login;
