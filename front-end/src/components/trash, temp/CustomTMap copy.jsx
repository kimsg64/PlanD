import React, { useEffect } from "react";
import styled from "styled-components";

const TMapContainer = styled.div`
  width: 800px;
  height: 400px;
`;

const CustomTMap = () => {
  useEffect(() => {
    // 지도 생성
    let script = document.createElement("script");
    script.innerHTML = `

    let map;
    let marker_s;
    let marker_p;
    let marker_e;
    let totalMarkerArr = [];
    let drawInfoArr = [];
    let resultdrawArr = [];
    function initTmap() {
        map = new Tmapv2.Map("TMapApp", {
            center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
            width: "800px",
            height: "400px",
            zoom:15
        });

        // 시작 심볼
        marker_s = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(37.5668986, 126.97871544),
          icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
          iconSize: new Tmapv2.Size(24, 38),
          map: map,
        });

        // 도착
        marker_e = new Tmapv2.Marker({
          position: new Tmapv2.LatLng(37.57081522, 127.00160213),
          icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
          iconSize: new Tmapv2.Size(24, 38),
          map: map,
        });


    }
    initTmap();
    `;

    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <div id="map_wrap" className="map_wrap3">
        <TMapContainer id="TMapApp"></TMapContainer>
      </div>
      <div class="map_act_btn_wrap clear_box"></div>
      <p id="result"></p>
    </>
  );
};

export default CustomTMap;
