// 로그인 전 메인 페이지
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import VideoPlayer from "../components/body/videoPlayer/VideoPlayer";
import { StartButton, BodyLayout } from "../components/body/mixin/Mixin";

const Home = () => {
  return (
    <>
      <Header />
      <BodyLayout padding="0">
        <VideoPlayer />
        <StartButton>
          <Link to={`/login`}>Get Started!</Link>
        </StartButton>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Home;
