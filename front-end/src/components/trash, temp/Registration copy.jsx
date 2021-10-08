// ★★★ 미구현 기능
// 1. 개인 폼이나 회사 폼을 선택시 작성중인 내용이 있다면 삭제해야 함
import React, { useState } from "react";
import Header from "../header/Header";
import { BodyLayout } from "../body/mixin/Mixin";
import Footer from "../footer/Footer";
import styled from "styled-components";
import IndividualForm from "../body/registrationForm/IndividualForm";
import CompanyForm from "../body/registrationForm/CompanyForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg);
`;

const Classification = styled.div`
  width: 72vw;
  height: auto;
  margin: var(--margin-header-to-body) 0;
  display: flex;
  justify-content: space-around;
`;

const IconContainer = styled.div`
  width: 12vw;
  padding: var(--padding-default) 0;
  display: flex;
  flex-direction: column;
  transition-duration: 0.5s;
  text-align: center;
  font-size: var(--font-size-title-large);
  border: 2px solid
    ${(props) => {
      return props.color === "focused"
        ? "var(--color-blur)"
        : "var(--color-font)";
    }};
  background-color: ${(props) => {
    return props.color === "focused" ? "var(--color-blur)" : "white";
  }};
  border-radius: 12px;
  p {
    margin-top: calc(var(--margin-default) / 2);
    font-size: var(--font-size-title-small);
  }
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Registration = () => {
  const [isIndividual, setIsIndividual] = useState(true);
  const selectIndividual = () => {
    setIsIndividual(true);
  };
  const selectCompany = () => {
    setIsIndividual(false);
  };

  return (
    <>
      <Header />
      <BodyLayout padding="var(--header-height) 0 0 0">
        <Container>
          <Classification>
            <IconContainer
              onClick={selectIndividual}
              color={isIndividual ? "focused" : "normal"}
            >
              <i className="fas fa-user-alt"></i>
              <p>개인회원</p>
            </IconContainer>
            <IconContainer
              onClick={selectCompany}
              color={isIndividual ? "normal" : "focused"}
            >
              <i className="fas fa-building"></i>
              <p>법인회원</p>
            </IconContainer>
          </Classification>
          <IndividualForm isIndividual={isIndividual} />
          <CompanyForm isIndividual={isIndividual} />
          {/* {isIndividual ? <IndividualForm /> : <CompanyForm />} */}
        </Container>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Registration;
