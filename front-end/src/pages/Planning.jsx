import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { BodyLayout, PointLetter } from "../components/body/mixin/Mixin";
import Footer from "../components/footer/Footer";
import Line8 from "../components/body/map/metorMap/line8/Line8";
import StationViewer from "../components/body/map/metorMap/StationViewer";
import PlanningETC from "../components/body/map/metorMap/PlanningETC";
import PageSlider from "../components/body/mixin/PageSlider";

const PlannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slider = styled.div`
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
`;

const NotFound = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    margin-bottom: var(--margin-default);
  }
  & h2 {
    margin-bottom: calc(var(--margin-default) / 2);
  }
`;

const Planning = ({ match }) => {
  const [idx, setIdx] = useState(0);
  const [selectedDate, setSelectedDate] = useState(match.params.date);
  const [selectedStation, setSelectedStation] = useState("역");
  const [lineNum, setLineNum] = useState("8");

  // console.log("부모", idx);
  // console.log(match);
  // console.log(match.params);
  // console.log(match.params.date);
  // console.log(selectedDate);
  // console.log("플래닝에서 선택되었단다: ", selectedStation);
  // console.log(lineNum);
  useEffect(() => {
    setSelectedStation("역");
  }, [lineNum]);

  return (
    <>
      <Header />
      <BodyLayout>
        <PlannerContainer>
          <StationViewer
            idx={idx}
            setIdx={setIdx}
            selectedStation={selectedStation}
            setSelectedStation={setSelectedStation}
            lineNum={lineNum}
            setLineNum={setLineNum}
          />
          <Slider>
            <PageSlider idx={idx} rate={-50}>
              {lineNum === "8" ? (
                <Line8
                  selectedStation={selectedStation}
                  setSelectedStation={setSelectedStation}
                />
              ) : (
                <NotFound>
                  <h1>
                    서비스 <PointLetter>준비중</PointLetter>입니다.
                  </h1>
                  <h2>
                    보다 나은 서비스 제공을 위하여 페이지
                    <PointLetter>준비중</PointLetter>입니다.
                  </h2>
                  <h2>빠른 시일 내에 준비하여 찾아뵙겠습니다.</h2>
                </NotFound>
              )}
              <PlanningETC
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedStation={selectedStation}
                lineNum={lineNum}
              />
            </PageSlider>
          </Slider>
        </PlannerContainer>
      </BodyLayout>
      <Footer />
    </>
  );
};

export default Planning;
