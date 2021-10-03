// 로그인 전 메인 페이지
import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import BodyLayout from "../components/body/BodyLayout";
import Footer from "../components/footer/Footer";
import ImageSlider from "../components/body/imageSlider/ImageSlider";
import { StartButton } from "../components/body/mixin/Mixin";
import { Link } from "react-router-dom";
import { read_cookie } from "sfcookies";
import Dots from "../components/body/imageSlider/Dots";

const Home = () => {
  return (
    <>
      <Header />
      <BodyLayout>
        <ImageSlider />
        <Dots />
        <StartButton>
          <Link
            to={read_cookie("userId").length > 0 ? `/memberhome` : `/login`}
          >
            Get Started!
          </Link>
        </StartButton>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Home;
