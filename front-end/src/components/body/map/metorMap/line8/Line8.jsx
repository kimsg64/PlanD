import React from "react";
import styled from "styled-components";
import { Square, Circle } from "../../../mixin/Mixin";

const MapContainer = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;

const SmallCircle = styled(Circle)`
  width: 21px;
  height: 21px;
`;

const Line8 = () => {
  return (
    <MapContainer>
      <img src={`${process.env.PUBLIC_URL}/images/line8.jpg`} alt="line8" />
      <Circle fromTop="-385px" fromLeft="358px" />
      <Circle fromTop="-410px" fromLeft="839px" />
      <Circle fromTop="-435px" fromLeft="999px" />
      <SmallCircle fromTop="-134px" fromLeft="499px" />
      <Circle fromTop="-157px" fromLeft="819px" />
    </MapContainer>
  );
};

export default Line8;
