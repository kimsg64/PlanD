import React, { useEffect } from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const KakaoMap = () => {
  useEffect(() => {
    const { kakao } = window;
    const container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);
  }, []);

  return <MapContainer id="map"></MapContainer>;
};

export default KakaoMap;
