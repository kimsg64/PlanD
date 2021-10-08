// ★★★ 미구현 기능
// 1. 개인 폼이나 회사 폼을 선택시 작성중인 내용이 있다면 삭제해야 함
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import { BodyLayout } from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Classification = styled.div`
  width: 72vw;
  height: auto;
  margin: var(--margin-header-to-body) 0;
  display: flex;
  justify-content: space-around;
`;

const IconContainer = styled.div`
  width: 400px;
  height: 360px;
  padding: var(--padding-default) 0;
  display: flex;
  flex-direction: column;
  transition-duration: 0.2s;
  text-align: center;
  justify-content: center;
  font-size: var(--font-size-huge);
  border: 2px solid var(--color-font);
  border-radius: 12px;
  /* border: 2px solid
    ${(props) => {
    return props.color === "focused"
      ? "var(--color-font)"
      : "var(--color-font)";
  }};
  background-color: ${(props) => {
    return props.color === "focused" ? "var(--color-blur)" : "white";
  }}; */

  p {
    margin-top: calc(var(--margin-default) / 2);
    font-size: var(--font-size-title-small);
  }
  :hover {
    cursor: pointer;
  }
  :focus {
    background-color: var(--color-blur);
  }
`;

const Registration = () => {
  return (
    <>
      <Header />
      <BodyLayout padding="var(--header-height) 0 0 0">
        <Container>
          <Classification>
            <Link to={"/individualfrom"}>
              <IconContainer>
                <i className="fas fa-user-alt"></i>
                <p>개인회원</p>
              </IconContainer>
            </Link>
            <Link to={"/companyform"}>
              <IconContainer>
                <i className="fas fa-building"></i>
                <p>법인회원</p>
              </IconContainer>
            </Link>
          </Classification>
        </Container>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Registration;
