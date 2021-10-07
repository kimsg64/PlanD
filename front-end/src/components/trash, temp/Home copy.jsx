// 로그인 전 메인 페이지(였던 것)
import React from "react";
import Header from "../header/Header";
import BodyLayout from "../body/BodyLayout";
import Footer from "../footer/Footer";
import ImageSlider from "../body/imageSlider/ImageSlider";
import { StartButton } from "../body/mixin/Mixin";
import { Link } from "react-router-dom";
import Dots from "../body/imageSlider/Dots";

const Home = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <ImageSlider />
        <Dots />
        <StartButton>
          <Link to={`/login`}>Get Started!</Link>
        </StartButton>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Home;
