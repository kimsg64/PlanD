import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import BodyLayout from "../components/Body/BodyLayout";
import Footer from "../components/Footer/Footer";
import KakaoMap from "../components/Body/KakaoMap";

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
