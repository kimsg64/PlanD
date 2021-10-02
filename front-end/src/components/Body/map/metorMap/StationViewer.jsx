import React from "react";
import styled from "styled-components";

const ViewerContainer = styled.div`
  width: 100vw;
  height: 400px;
  margin-bottom: calc(var(--margin-default) * 2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Liner = styled.span`
  background-color: var(--color-line8);
  width: calc((100vw - 300px) / 2);
  height: 20px;
`;

const LineViewer = styled.div`
  width: 300px;
  height: 300px;
  border: 20px solid var(--color-line8);
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  margin-top: var(--margin-default);
  font-size: var(--font-size-title-large);
`;

const Station = styled.div`
  font-size: var(--font-size-title-normal);
  visibility: hidden;
`;

const StationViewer = () => {
  return (
    <ViewerContainer>
      <Liner></Liner>
      <LineViewer>
        <Line>8호선</Line>
        <Station>천호</Station>
      </LineViewer>
      <Liner></Liner>
    </ViewerContainer>
  );
};

export default StationViewer;
