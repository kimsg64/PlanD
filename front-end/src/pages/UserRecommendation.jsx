import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import KakaoMap from "../components/body/KakaoMap";

const UserRecommendation = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <KakaoMap />
      </BodyLayout>
      <Footer />
    </>
  );
};

export default UserRecommendation;
