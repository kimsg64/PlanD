import React, { useState } from "react";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import IndividualForm from "../components/body/RegistrationForm/IndividualForm";
import CompanyForm from "../components/body/RegistrationForm/CompanyForm";

const Classification = styled.div`
  width: 60vw;
  height: auto;
  margin: calc(var(--margin-default) * 2) 0;
  display: flex;
  justify-content: space-around;
`;

const IconContainer = styled.div`
  width: 12vw;
  padding: var(--padding-default) 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: var(--font-size-title-large);
  border: 2px solid var(--font-color-default);
  border-radius: 12px;
  p {
    margin-top: calc(var(--margin-default) / 2);
    font-size: var(--font-size-title-small);
  }
  :hover {
    cursor: pointer;
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
          <IconContainer onClick={selectIndividual}>
            <i className="fas fa-user-alt"></i>
            <p>개인회원</p>
          </IconContainer>
          <IconContainer onClick={selectCompany}>
            <i className="fas fa-building"></i>
            <p>법인회원</p>
          </IconContainer>
        </Classification>
        {isIndividual ? <IndividualForm /> : <CompanyForm />}
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Registration;
