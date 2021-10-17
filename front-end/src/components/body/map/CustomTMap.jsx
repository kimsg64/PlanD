import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TMapContainer = styled.div`
  width: 800px;
  height: 400px;
`;

const { Tmapv2 } = window;

const CustomTMap = ({ startPoint = {}, wayPoint = {}, endPoint = {} }) => {
  const [Tmap, setTMap] = useState();
  const [marker_s, setMarker_s] = useState();
  const [marker_e, setMarker_e] = useState();
  const [marker_p, setMarker_p] = useState();
  const [resultData, setResultData] = useState([]);

  const startX = startPoint?.lng;
  const startY = startPoint?.lat;
  const wayX = wayPoint?.lng;
  const wayY = wayPoint?.lat;
  const endX = endPoint?.lng;
  const endY = endPoint?.lat;
  // console.log(
  //   "이곳은 마커가 찍혀야 하는 곳입니다 제발!",
  //   "startPoint: ",
  //   startPoint,
  //   "wayPoint: ",
  //   wayPoint,
  //   "endPoint: ",
  //   endPoint
  // );
  // const [resultDrawArr, setResultDrawArr] = useState([]);
  // const [drawInfoArr, setDrawInfoArr] = useState([]);
  let convertPoint;
  let resultDrawArr = [];
  let drawInfoArr = [];

  // 지도
  useEffect(() => {
    // console.log("마운트!");
    // 지도 띄우기
    setTMap(
      new Tmapv2.Map("t-map", {
        center: new Tmapv2.LatLng(startY, startX),
        width: "800px",
        height: "400px",
        zoom: 15,
      })
    );
  }, []);

  useEffect(() => {
    // 출발지 마커(좌표값 변수화)
    setMarker_s(
      new Tmapv2.Marker({
        // position: new Tmapv2.LatLng(37.5668986, 126.97871544),
        position: new Tmapv2.LatLng(startY, startX),
        icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
        iconSize: new Tmapv2.Size(24, 38),
        map: Tmap,
      })
    );
  }, [resultData]);

  useEffect(() => {
    // 도착지 마커(좌표값 변수화)
    setMarker_e(
      new Tmapv2.Marker({
        position: new Tmapv2.LatLng(endY, endX),
        icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
        iconSize: new Tmapv2.Size(24, 38),
        map: Tmap,
      })
    );
  }, [resultData]);

  useEffect(() => {
    // 경유지 마커(좌표값 변수화)
    setMarker_p(
      new Tmapv2.Marker({
        position: new Tmapv2.LatLng(wayY, wayX),
        icon: "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_p.png",
        iconSize: new Tmapv2.Size(24, 38),
        map: Tmap,
      })
    );
  }, [resultData]);

  useEffect(() => {
    const params = {
      appKey: process.env.REACT_APP_MY_TMAP_KEY,
    };
    // 경로 찍기 요청(좌표값 변수화)
    // passList: "127.00080213,37.5591696189164",
    let data = {
      startX: startX,
      startY: startY,
      endX: endX,
      endY: endY,
      passList: `${wayX},${wayY}`,
      reqCoordType: "WGS84GEO",
      resCoordType: "EPSG3857",
      startName: "출발지",
      endName: "도착지",
    };

    axios
      .post(
        "https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json&callback=result",
        data,
        { params }
      )
      .then((response) => {
        // const resultData = response.data.features;
        setResultData(response.data.features);
        // console.log("result Data:", resultData);

        //기존 그려진 라인 & 마커가 있다면 초기화
        if (resultDrawArr.length > 0) {
          // console.log("너의 잘못이니?", resultDrawArr);
          resultDrawArr.forEach((draw) => draw.setMap(null));
          // for (let i in resultDrawArr) {
          //   resultDrawArr[i].setMap(null);
          // }
          // setResultDrawArr([]);
          resultDrawArr = [];
        }
        // setDrawInfoArr([]);
        drawInfoArr = [];
        // console.log("초기화한거맞지?", resultDrawArr);

        resultData.forEach((path) => {
          //for문 [S]
          // console.log("경로 데이터", path);
          const geometry = path.geometry;
          const properties = path.properties;
          // console.log("geometry", geometry);
          // console.log("properties", properties);

          if (geometry.type === "LineString") {
            // console.log("줄긋기하니?");
            for (let j in geometry.coordinates) {
              // console.log("객체 잘 구하고 있지??");
              // 경로들의 결과값(구간)들을 포인트 객체로 변환
              let latlng = new Tmapv2.Point(
                // geometry.coordinates[0],
                // geometry.coordinates[1]
                geometry.coordinates[j][0],
                geometry.coordinates[j][1]
              );
              // 포인트 객체를 받아 좌표값으로 변환
              convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
                latlng
              );
              // 포인트객체의 정보로 좌표값 변환 객체로 저장
              let convertChange = new Tmapv2.LatLng(
                convertPoint._lat,
                convertPoint._lng
              );
              // 배열에 담기
              // setDrawInfoArr((prevArr) => {
              //   return [...prevArr, convertChange];
              // });
              drawInfoArr.push(convertChange);
            }
          } else {
            // type === Point일 때
            // console.log("포인트니?");
            let markerImg = "";
            let pType = "";
            let size;

            if (properties.pointType === "S") {
              //출발지 마커
              markerImg =
                "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png";
              pType = "S";
              size = new Tmapv2.Size(24, 38);
            } else if (properties.pointType === "E") {
              //도착지 마커
              markerImg =
                "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png";
              pType = "E";
              size = new Tmapv2.Size(24, 38);
            } else {
              // console.log("여기로오나");
              //각 포인트 마커
              markerImg = "http://topopen.tmap.co.kr/imgs/point.png";
              pType = "P";
              size = new Tmapv2.Size(8, 8);
            }

            //////////////////////////////////////////////////////////
            // 이 아래부터 필요없을 것 같은데 ?
            // 경로들의 결과값들을 포인트 객체로 변환
            // const latlon = new Tmapv2.Point(
            //   geometry.coordinates[0],
            //   geometry.coordinates[1]
            // );
            // console.log("latlon 필요해?", latlon);

            // 포인트 객체를 받아 좌표값으로 다시 변환
            // convertPoint = new Tmapv2.Projection.convertEPSG3857ToWGS84GEO(
            //   latlon
            // );
            // console.log("convertPoint 필요해?", convertPoint);

            // const routeInfoObj = {
            //   markerImage: markerImg,
            //   lng: convertPoint._lng,
            //   lat: convertPoint._lat,
            //   pointType: pType,
            // };

            // // Marker 추가
            // marker_p = new Tmapv2.Marker({
            //   position: new Tmapv2.LatLng(routeInfoObj.lat, routeInfoObj.lng),
            //   icon: routeInfoObj.markerImage,
            //   iconSize: size,
            //   map: Tmap,
            // });
            //////////////////////////////////////////////////////////
          }
        }); //for문 [E]
        // console.log("그리기 직전의 배열상태는?", drawInfoArr);
        drawLine(drawInfoArr);
      })
      .catch((error) => {
        console.log("error:" + error);
      });

    function drawLine(arrPoint) {
      let polyline_;

      polyline_ = new Tmapv2.Polyline({
        path: arrPoint,
        strokeColor: "#DD0000",
        strokeWeight: 6,
        map: Tmap,
      });
      // setResultDrawArr((prevArr) => [...prevArr, polyline_]);
      resultDrawArr.push(polyline_);
    }
  }, [resultData]);

  return (
    <>
      <div id="map_wrap" className="map_wrap3">
        <TMapContainer id="t-map"></TMapContainer>
      </div>
      <div className="map_act_btn_wrap clear_box"></div>
    </>
  );
};

export default CustomTMap;
