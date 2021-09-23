import React from "react";
import styled from "styled-components";
import BodyLayout from "../components/body/BodyLayout";
import { Checkbox, CheckboxLabel } from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Modal = styled.form`
  width: 480px;
  height: auto;
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
`;

const InputContainer = styled.div`
  position: relative;
  ::after {
    content: "아이디 또는 비밀번호를 입력해 주세요!";
    margin-left: calc(var(--margin-default) / 4);
    font-size: var(--font-size-normal);
    color: var(--color-pink);
    font-weight: 800;
    position: relative;
    top: 40px;
    left: 36px;
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
    border: 2px solid var(--color-black);
    /* 잘못된 입력 발생시 pink */
  }
`;

const RadioContainer = styled.div`
  width: 64%;
  margin-top: var(--margin-default);
  display: flex;
  justify-content: space-between;
`;

const CheckboxLabelWithoutMargin = styled(CheckboxLabel)`
  justify-content: flex-end;
  margin: calc(var(--margin-line-space) * 2) 0 0 0;
`;
const CheckboxWithoutMargin = styled(Checkbox)`
  margin-left: 0;
`;

const SubmitButton = styled(InputBox)`
  margin-top: calc(var(--margin-default) * 1.5);
  background-color: var(--color-black);
  border: 2px solid var(--color-black);
  border-radius: 4px;
  color: white;
  transition-duration: 0.2s;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
    color: var(--color-pink);
  }
  &:focus {
    outline: none;
    border: 2px solid var(--color-black);
  }
`;

const FindIDPWD = styled(SubmitButton)`
  margin-top: calc(var(--margin-default) / 2);
`;

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // 로그인 실패시 회원가입 버튼에 포인트 주기?
  return (
    <>
      <Header />
      <BodyLayout>
        <Modal onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <InputContainer>
            <RadioContainer>
              <CheckboxLabelWithoutMargin>
                <CheckboxWithoutMargin type="radio" name="classification" />
                개인
              </CheckboxLabelWithoutMargin>
              <CheckboxLabelWithoutMargin>
                <CheckboxWithoutMargin type="radio" name="classification" />
                사업자
              </CheckboxLabelWithoutMargin>
            </RadioContainer>
            <InputBox type="text" placeholder="ID" />
            <InputBox type="password" placeholder="Password" />
            <CheckboxLabelWithoutMargin>
              <CheckboxWithoutMargin type="checkbox" />
              로그인 유지하기
            </CheckboxLabelWithoutMargin>
          </InputContainer>
          <SubmitButton type="submit" value="Sign in" />
          <FindIDPWD type="button" value="ID, 비밀번호 찾기" />
        </Modal>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Login;
