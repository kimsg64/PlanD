import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import BodyLayout from "../components/Body/BodyLayout";
import Footer from "../components/Footer/Footer";
import KakaoMap from "../components/Body/KakaoMap";

const PlannerContainer = styled.div`
  width: 80vw;
  height: 80vh;
  margin-top: calc(var(--margin-default) + var(--header-height));
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
