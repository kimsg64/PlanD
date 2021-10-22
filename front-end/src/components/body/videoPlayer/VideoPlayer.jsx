import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { read_cookie } from "sfcookies";
import styled from "styled-components";
import { StartButton, PointLetter } from "../mixin/Mixin";

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black);
  overflow: hidden;
  position: relative;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -880px;
`;

const TextInVideo = styled.h1`
  font-size: var(--font-size-title-large);
  animation: fadein 12s;
  animation-iteration-count: infinite;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    60% {
      opacity: 0.7;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

const VideoPlayer = () => {
  const interval = useRef();
  const videoRef = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      videoRef.current.play();
    }, 12000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <VideoContainer>
      <video
        src={`${process.env.PUBLIC_URL}/videos/2.mp4`}
        autoPlay
        muted
        ref={videoRef}
      />
      <TextContainer>
        <TextInVideo>
          데이트의 <PointLetter>A to Z</PointLetter>
        </TextInVideo>
        <TextInVideo>
          Plan.<PointLetter>D</PointLetter>와 함께
        </TextInVideo>
      </TextContainer>
      {read_cookie("userId").length <= 0 ? (
        // userid 쿠키가 존재하지 않을 때
        <Link to={`/login`}>
          <StartButton>Get Started!</StartButton>
        </Link>
      ) : (
        <Link to={`/memberhome`}>
          <StartButton>Get Started!</StartButton>
        </Link>
      )}
    </VideoContainer>
  );
};

export default VideoPlayer;
