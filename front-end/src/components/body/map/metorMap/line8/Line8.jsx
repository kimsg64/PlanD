import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Square, Circle } from "../../../mixin/Mixin";
import StationsData from "../../../../../server/StationsData";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const MapContainer = styled.div`
  position: relative;
  img {
    object-fit: none;
  }
`;

const SmallCircle = styled(Circle)`
  width: 21px;
  height: 21px;
`;

const Line8 = ({ selectedStation = "", setSelectedStation = () => {} }) => {
  const [bgColor1, setBgColor1] = useState("");
  const [bgColor2, setBgColor2] = useState("");
  const [bgColor3, setBgColor3] = useState("");
  const [bgColor4, setBgColor4] = useState("");
  const [bgColor5, setBgColor5] = useState("");
  const stationData = StationsData();
  const stationsList = stationData[2];

  useEffect(() => {
    stationsList.filter((station) => {
      if (station.stname === selectedStation) {
        setBgColor1("");
        setBgColor2("");
        setBgColor3("");
        setBgColor4("");
        setBgColor5("");
        switch (selectedStation) {
          case "천호":
            bgColor1 === ""
              ? setBgColor1("var(--color-focus)")
              : setBgColor1("");
            break;
          case "잠실":
            bgColor2 === ""
              ? setBgColor2("var(--color-focus)")
              : setBgColor2("");
            break;
          case "석촌":
            bgColor3 === ""
              ? setBgColor3("var(--color-focus)")
              : setBgColor3("");
            break;
          case "장지":
            bgColor4 === ""
              ? setBgColor4("var(--color-focus)")
              : setBgColor4("");
            break;
          case "가락시장":
            bgColor5 === ""
              ? setBgColor5("var(--color-focus)")
              : setBgColor5("");
            break;
        }
      }
    });
  }, [selectedStation]);

  const onClickStation = (e) => {
    const stationName = e.target.dataset.name || e.target.dataset.parent;

    // console.log(e.target);
    // console.log(e.target.dataset.name);
    // dataset.name이랑 선택된 값이 같다면!
    setSelectedStation(stationName);
  };

  return (
    <Container>
      <MapContainer>
        <img src={`${process.env.PUBLIC_URL}/images/line8.jpg`} alt="line8" />
        <Square
          fromTop="32px"
          fromLeft="324px"
          data-name="천호"
          onClick={onClickStation}
          bgColor={bgColor1}
        >
          <Circle data-parent="천호" />
        </Square>
        <Square
          fromTop="32px"
          fromLeft="805px"
          data-name="잠실"
          onClick={onClickStation}
          bgColor={bgColor2}
        >
          <Circle data-parent="잠실" />
        </Square>
        <Square
          fromTop="32px"
          fromLeft="965px"
          data-name="석촌"
          onClick={onClickStation}
          bgColor={bgColor3}
        >
          <Circle data-parent="석촌" />
        </Square>
        <Square
          fromTop="358px"
          fromLeft="465px"
          data-name="장지"
          onClick={onClickStation}
          bgColor={bgColor4}
        >
          <SmallCircle data-parent="장지" />
        </Square>
        <Square
          fromTop="356px"
          fromLeft="785px"
          data-name="가락시장"
          onClick={onClickStation}
          bgColor={bgColor5}
        >
          <Circle data-parent="가락시장" />
        </Square>
      </MapContainer>
    </Container>
  );
};

export default Line8;
