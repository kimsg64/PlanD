import React from "react";
import styled from "styled-components";

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
`;

const VideoPlayer = () => {
  return (
    <VideoContainer>
      <video
        src={`${process.env.PUBLIC_URL}/videos/2.mp4`}
        autoPlay
        muted
        // loop="true"
      />
      <TextContainer>
        <TextInVideo>데이트의 A to Z</TextInVideo>
        <TextInVideo>Plan.D와 함께</TextInVideo>
      </TextContainer>
    </VideoContainer>
  );
};

export default VideoPlayer;
