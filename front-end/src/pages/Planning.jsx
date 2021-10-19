import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import { BodyLayout } from "../components/body/mixin/Mixin";
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
  // console.log(selectedStation);
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
              <Line8 setSelectedStation={setSelectedStation} />
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
