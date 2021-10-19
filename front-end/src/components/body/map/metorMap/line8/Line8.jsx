import React from "react";
import styled from "styled-components";
import { Square, Circle } from "../../../mixin/Mixin";

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

const Line8 = ({ setSelectedStation = () => {} }) => {
  const onClickStation = (e) => {
    const stationName = e.target.dataset.name || e.target.dataset.parent;
    // console.log(e.target);
    // console.log(e.target.dataset.name);
    // console.log(stationName);
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
        >
          <Circle data-parent="천호" />
        </Square>
        <Square
          fromTop="32px"
          fromLeft="805px"
          data-name="잠실"
          onClick={onClickStation}
        >
          <Circle data-parent="잠실" />
        </Square>
        <Square
          fromTop="32px"
          fromLeft="965px"
          data-name="석촌"
          onClick={onClickStation}
        >
          <Circle data-parent="석촌" />
        </Square>
        <Square
          fromTop="358px"
          fromLeft="465px"
          data-name="장지"
          onClick={onClickStation}
        >
          <SmallCircle data-parent="장지" />
        </Square>
        <Square
          fromTop="356px"
          fromLeft="785px"
          data-name="가락시장"
          onClick={onClickStation}
        >
          <Circle data-parent="가락시장" />
        </Square>
      </MapContainer>
    </Container>
  );
};

export default Line8;
