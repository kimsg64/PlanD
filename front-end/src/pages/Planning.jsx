import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import KakaoMap from "../components/body/KakaoMap";

const PlannerContainer = styled.div`
  width: 80vw;
  height: 80vh;
  margin-top: var(--margin-header-to-body);
  display: flex;
  justify-content: center;
`;

const Conditioner = styled.div`
  width: 32vw;
  height: 80vh;
  background-color: white;
`;

const Planning = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <PlannerContainer>
          <Conditioner />
          <KakaoMap />
        </PlannerContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Planning;
