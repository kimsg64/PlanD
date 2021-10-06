import React, { useState } from "react";
import Header from "../components/header/Header";
import { BodyLayout } from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import IndividualForm from "../components/body/registrationForm/IndividualForm";
import CompanyForm from "../components/body/registrationForm/CompanyForm";

const Classification = styled.div`
  width: 60vw;
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
  transition-duration: 0.2s;
  text-align: center;
  font-size: var(--font-size-title-large);
  border: 2px solid
    ${(props) => {
      return props.color === "focused"
        ? "var(--color-pink)"
        : "var(--color-black)";
    }};
  background-color: ${(props) => {
    return props.color === "focused" ? "var(--color-yellow)" : "var(white)";
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
      <BodyLayout>
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
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Registration;
