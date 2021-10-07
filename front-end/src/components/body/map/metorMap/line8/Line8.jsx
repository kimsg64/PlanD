import React from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;

const Circle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  background-color: inherit;
  top: ${(props) => props.fromTop};
  left: ${(props) => props.fromLeft};
  &:hover {
    cursor: pointer;
    background-color: var(--color-yellow);
  }
`;

const SmallCircle = styled(Circle)`
  width: 21px;
  height: 21px;
`;

const Line8 = () => {
  return (
    <MapContainer>
      <img src={`${process.env.PUBLIC_URL}/images/line8.jpg`} alt="line8" />
      <Circle fromTop="-707px" fromLeft="358px" />
      <Circle fromTop="-732px" fromLeft="839px" />
      <Circle fromTop="-757px" fromLeft="999px" />
      <SmallCircle fromTop="-457px" fromLeft="499px" />
      <Circle fromTop="-480px" fromLeft="819px" />
    </MapContainer>
  );
};

export default Line8;
