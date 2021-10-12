// 로그인 전 메인 페이지
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import VideoPlayer from "../components/body/videoPlayer/VideoPlayer";
import { StartButton, BodyLayout } from "../components/body/mixin/Mixin";
import { read_cookie } from "sfcookies";

const Home = () => {
  console.log(read_cookie("userId"));
  return (
    <>
      <Header />
      <BodyLayout>
        <VideoPlayer />
        {read_cookie("userId").length < 0 ? (
          <Link to={`/login`}>
            <StartButton>Get Started!</StartButton>
          </Link>
        ) : (
          <Link to={`/memberhome`}>
            <StartButton>Get Started!</StartButton>
          </Link>
        )}
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Home;
