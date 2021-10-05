import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import Line8 from "../components/body/map/metorMap/line8/Line8";
import StationViewer from "../components/body/map/metorMap/StationViewer";

const PlannerContainer = styled.div`
  margin-top: calc(var(--margin-header-to-body) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Planning = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <PlannerContainer>
          <StationViewer />
          <Line8 />
        </PlannerContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Planning;
