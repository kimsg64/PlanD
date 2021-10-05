import React, { useEffect } from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 800px;
  height: 400px;
`;

const KakaoMapResult = () => {
  useEffect(() => {
    const { kakao } = window;
    const container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);
    console.log(map);
  }, []);

  return <MapContainer id="map"></MapContainer>;
};

export default KakaoMapResult;
