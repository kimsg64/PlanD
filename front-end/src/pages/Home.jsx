// 로그인 전 메인 페이지
import React from "react";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import ImageSlider from "../components/body/imageSlider/ImageSlider";
import Steps from "../components/body/Steps";

const Home = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <ImageSlider />
        <Steps />
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Home;
