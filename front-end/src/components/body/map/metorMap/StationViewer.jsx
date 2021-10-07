import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Input, SearchBar } from "../../mixin/Mixin";
import LineSelector from "./LineSelector";

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
  width: calc((100vw - 240px) / 2);
  height: 20px;
  position: relative;
`;

const RelativeSearchBar = styled(SearchBar)`
  margin: 0;
  position: relative;
  top: -60px;
  left: 4%;
`;

const NextButton = styled(Button)`
  position: relative;
  top: -110px;
  left: 40%;
  font-size: var(--font-size-normal);
`;

const LineViewer = styled.div`
  width: 240px;
  height: 240px;
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
  /* visibility: hidden; */
`;

const StationViewer = () => {
  return (
    <ViewerContainer>
      <Liner>
        <LineSelector />
      </Liner>
      <LineViewer>
        <Line>8호선</Line>
        <Station>천호</Station>
      </LineViewer>
      <Liner>
        <RelativeSearchBar width="300px">
          <Input type="text" placeholder="역 이름으로 검색하세요" />
          <Button>
            <i className="fas fa-search"></i>
          </Button>
        </RelativeSearchBar>
        <Link to={"/planningDetail"}>
          <NextButton>선택 완료</NextButton>
        </Link>
      </Liner>
    </ViewerContainer>
  );
};

export default StationViewer;
