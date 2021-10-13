import React, { useState } from "react";
import styled from "styled-components";
import BorderEffect from "../../mixin/BorderEffect";
import { Button, Input, SearchBar } from "../../mixin/Mixin";
import LineSelector from "./LineSelector";

const ViewerContainer = styled.div`
  width: 100vw;
  height: 400px;
  margin-bottom: calc(var(--margin-default) * 2);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg);
`;

const Liner = styled.span`
  background-color: ${(props) => props.lineColor || "var(--color-line8)"};
  width: calc((100vw - 240px) / 2);
  height: 20px;
  position: relative;
`;

const RelativeSearchBar = styled(SearchBar)`
  margin: 0;
  position: relative;
  top: -60px;
  left: 40px;
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
  border: 20px solid ${(props) => props.lineColor || "var(--color-line8)"};
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  margin-top: calc(var(--margin-default) / 2);
  font-size: var(--font-size-title-normal);
`;

const Station = styled.div`
  font-size: var(--font-size-large);
  /* visibility: hidden; */
`;

const StationViewer = ({
  idx = 0,
  setIdx = () => {},
  selectedStation = "",
}) => {
  const [lineNum, setLineNum] = useState("8");
  const [lineColor, setLineColor] = useState("");
  const [searchBarWidth, setSearchBarWidth] = useState("0");
  // console.log(lineNum);
  // console.log(lineColor);
  // console.log(selectedStation);

  const onClickNext = () => {
    // console.log(idx);
    return idx === 0 ? setIdx(1) : setIdx(0);
  };

  return (
    <ViewerContainer>
      <Liner lineColor={lineColor}>
        <LineSelector setLineColor={setLineColor} setLineNum={setLineNum} />
      </Liner>
      <LineViewer lineColor={lineColor}>
        <Line>{lineNum}호선</Line>
        <Station>{selectedStation}</Station>
      </LineViewer>
      <Liner lineColor={lineColor}>
        <RelativeSearchBar width="300px">
          <Input
            type="text"
            placeholder="역 이름으로 검색하세요"
            onFocus={() => setSearchBarWidth("240px")}
            onBlur={() => setSearchBarWidth("0")}
          />
          <BorderEffect
            spanWidth={searchBarWidth}
            fromTop="48px"
            fromLeft="0"
          />
          <Button>
            <i className="fas fa-search"></i>
          </Button>
        </RelativeSearchBar>
        <NextButton onClick={onClickNext} idx={idx}>
          {idx === 0 ? "다음" : "이전"}
        </NextButton>
      </Liner>
    </ViewerContainer>
  );
};

export default StationViewer;
