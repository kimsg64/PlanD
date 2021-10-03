import React, { useState } from "react";
import styled from "styled-components";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Checkbox, CheckboxLabel } from "../components/body/mixin/Mixin";
import { bake_cookie } from "sfcookies";
import axios from "axios";

const LoginForm = styled.form`
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
    content: "로그인 정보가 일치하지 않습니다!";
    font-size: var(--font-size-normal);
    color: var(--color-pink);
    font-weight: 800;
    position: relative;
    top: 40px;
    left: 20%;
    visibility: ${(props) => props.visibility};
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
  width: 68%;
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

const NormalButton = styled(SubmitButton)`
  margin-top: calc(var(--margin-default) / 2);
`;

const Login = () => {
  const [classification, setClassification] = useState("individual");
  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");
  const [keepSession, setKeepSession] = useState(false);
  // 스타일 변경을 위한 props
  const [isSucceeded, setIsSucceeded] = useState(true);

  const onClickKeepSession = () => {
    setKeepSession(!keepSession);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(classification);
    console.log(keepSession);

    // 사업자 유저인 경우 매핑 주소 설정해야 함
    const url =
      classification === "individual" ? "/wherewego/user/userLogin" : "";
    // console.log(url);
    const body = {
      userId: userId,
      pwd: pwd,
    };
    // console.log(body);

    axios
      .post(url, body)
      .then((response) => {
        // console.log("response : ", response.data);
        if (response.data > 0) {
          setIsSucceeded(true);
          // 로그인 성공시 쿠키 설정 후 다시 백으로 보내서 세션에 등록
          bake_cookie("userId", userId);
          axios.get("/wherewego/user/checkSession").then((res) => {
            // console.log(res.data);
            res.data
              ? (window.location.href = "http://localhost:3000/memberhome/")
              : alert("로그인 실패...");
          });
        } else {
          setIsSucceeded(false);
        }
      })
      .catch((error) => {
        // console.log("failed", error);
        setIsSucceeded(false);
      });
  };
  // 로그인 실패시 회원가입 버튼에 포인트 주기?
  return (
    <>
      <Header />
      <BodyLayout>
        <LoginForm onSubmit={onSubmitForm}>
          <h1>Sign in</h1>
          <InputContainer visibility={isSucceeded ? "hidden" : "visible"}>
            <RadioContainer>
              <CheckboxLabelWithoutMargin>
                <CheckboxWithoutMargin
                  type="radio"
                  name="classification"
                  required
                  value="individual"
                  onClick={(e) => setClassification(e.target.value)}
                  checked={classification === "individual" ? true : false}
                />
                개인
              </CheckboxLabelWithoutMargin>
              <CheckboxLabelWithoutMargin>
                <CheckboxWithoutMargin
                  type="radio"
                  name="classification"
                  required
                  value="company"
                  onClick={(e) => setClassification(e.target.value)}
                  checked={classification === "company" ? true : false}
                />
                사업자
              </CheckboxLabelWithoutMargin>
            </RadioContainer>
            <InputBox
              type="text"
              placeholder="ID"
              name="userId"
              id="userId"
              required
              maxLength="20"
              onKeyUp={(e) => setUserId(e.target.value)}
            />
            <InputBox
              type="password"
              placeholder="Password"
              name="pwd"
              id="pwd"
              required
              maxLength="20"
              onKeyUp={(e) => setPwd(e.target.value)}
            />
            <CheckboxLabelWithoutMargin>
              <CheckboxWithoutMargin
                type="checkbox"
                name="keepSession"
                value={keepSession}
                onClick={onClickKeepSession}
              />
              로그인 유지하기
            </CheckboxLabelWithoutMargin>
          </InputContainer>
          <SubmitButton type="submit" value="Sign in" />
          <NormalButton type="button" value="ID, 비밀번호 찾기" />
        </LoginForm>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Login;
