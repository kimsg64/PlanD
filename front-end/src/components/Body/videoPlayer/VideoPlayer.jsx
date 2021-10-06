import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black);
  overflow: hidden;
`;

const Video = styled.video``;

const VideoPlayer = () => {
  return (
    <VideoContainer>
      <Video src={`${process.env.PUBLIC_URL}/videos/1.mp4`} autoPlay muted />
    </VideoContainer>
  );
};

export default VideoPlayer;
