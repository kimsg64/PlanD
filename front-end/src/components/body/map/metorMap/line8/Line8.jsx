import React, { useState } from "react";
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

const Line8 = () => {
  const [bgColor, setBgColor] = useState("inherit");

  const makeCircleFocused = () => {
    // setBgColor("var(--color-focus)");
    setBgColor("inherit");
  };

  const makeCircleUnFocused = () => {
    setBgColor("inherit");
  };

  return (
    <Container>
      <MapContainer>
        <img src={`${process.env.PUBLIC_URL}/images/line8.jpg`} alt="line8" />
        <Square fromTop="32px" fromLeft="324px">
          <Circle bgColor={bgColor} />
        </Square>
        <Square fromTop="32px" fromLeft="805px">
          <Circle bgColor={bgColor} />
        </Square>
        <Square fromTop="32px" fromLeft="965px">
          <Circle bgColor={bgColor} />
        </Square>
        <Square fromTop="358px" fromLeft="465px">
          <SmallCircle bgColor={bgColor} />
        </Square>
        <Square fromTop="356px" fromLeft="785px">
          <Circle bgColor={bgColor} />
        </Square>
      </MapContainer>
    </Container>
  );
};

export default Line8;
