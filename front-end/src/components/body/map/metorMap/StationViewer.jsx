import React, { useState } from "react";
import styled from "styled-components";
import StationsData from "../../../../server/StationsData";
import BorderEffect from "../../mixin/BorderEffect";
import BorderEffectBox from "../../mixin/BorderEffectBox";
import {
  Button,
  Input,
  SearchBar,
  ToolTipBox,
  ToolTip,
  MenuTitle,
  TitleIconWrapper,
} from "../../mixin/Mixin";
import SearchMic from "../../mixin/SearchMic";
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

const PlanningPageMenuTitle = styled(MenuTitle)`
  position: absolute;
  top: 60px;
  left: 264px;
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
  top: -138px;
  left: 44%;
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
  setSelectedStation = () => {},
  lineNum = "",
  setLineNum = () => {},
}) => {
  const [lineColor, setLineColor] = useState("");
  const [searchBarWidth, setSearchBarWidth] = useState("0");
  const [keyword, setKeyword] = useState("");
  const [isListening, setIsListening] = useState(false);
  const stationData = StationsData();
  const stationsList = stationData[2];
  // console.log(lineNum);
  // console.log(lineColor);
  // console.log("???????????? ???????????? ??????????????????: ", selectedStation);
  // console.log(keyword);

  const onClickNext = () => {
    // console.log(idx);
    return idx === 0 ? setIdx(1) : setIdx(0);
  };

  const startSearching = (e) => {
    setSelectedStation("");
    e.preventDefault();
    // console.log(stationsList);
    const found = stationsList.find((station) => station.stname === keyword);
    if (found === undefined) {
      setSelectedStation("???");
      window.alert("?????? ????????? ????????????!");
    } else {
      setSelectedStation(found.stname);
    }
    // return found === undefined
    //   ? window.alert("?????? ????????? ????????????!")
    //   : setSelectedStation(found.stname);
    // stationsList.filter((station) => {
    //   // console.log("?????????", keyword);
    //   // console.log("?????????", station.stname);
    //   return station.stname === keyword ? setSelectedStation(keyword) : null;
    // });
    // setLineNum
  };

  const onBlurInputBox = () => {
    // console.log(inputText.length);
    return keyword.length > 0 ? null : setSearchBarWidth("0");
  };

  return (
    <ViewerContainer>
      <PlanningPageMenuTitle>?????? ????????????</PlanningPageMenuTitle>
      <Liner lineColor={lineColor}>
        <LineSelector setLineColor={setLineColor} setLineNum={setLineNum} />
      </Liner>
      <LineViewer lineColor={lineColor}>
        <Line>{lineNum}??????</Line>
        <Station>{selectedStation}</Station>
      </LineViewer>
      <Liner lineColor={lineColor}>
        <RelativeSearchBar width="300px" as="form" onSubmit={startSearching}>
          {isListening ? (
            <Input
              type="text"
              placeholder="??? ???????????? ???????????????"
              onFocus={() => setSearchBarWidth("216px")}
              onKeyUp={(e) => setKeyword(e.target.value)}
              value={keyword}
            />
          ) : (
            <Input
              type="text"
              placeholder="??? ???????????? ???????????????"
              onFocus={() => setSearchBarWidth("216px")}
              onBlur={onBlurInputBox}
              onKeyUp={(e) => setKeyword(e.target.value)}
            />
          )}

          <BorderEffectBox fromLeft="-124px">
            <BorderEffect
              spanWidth={searchBarWidth}
              fromTop="20px"
              bgColor="var(--color-green)"
            />
          </BorderEffectBox>
          <Button>
            <i className="fas fa-search"></i>
          </Button>
        </RelativeSearchBar>
        <SearchMic setKeyword={setKeyword} setIsListening={setIsListening} />
        <NextButton onClick={onClickNext} idx={idx}>
          {idx === 0 ? "??????" : "??????"}
        </NextButton>
        {stationsList.find((station) => station.stname === selectedStation) ? (
          <ToolTipBox fromTop="-100px" fromLeft="360px">
            {idx === 0
              ? "?????? ?????????????????? ?????? ????????? ???????????????!"
              : "??? ???????????? ?????????????????? ?????? ????????? ???????????????!"}
            <ToolTip />
          </ToolTipBox>
        ) : null}
      </Liner>
    </ViewerContainer>
  );
};

export default StationViewer;
