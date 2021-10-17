import React, { useState, useEffect } from "react";
import CustomGoogleMap from "./CustomGoogleMap";
import Geocode from "react-geocode";

const GoogleMapSettings = ({ address1 = "", address2 = "", address3 = "" }) => {
  // 리버스 Geocode (주소로 좌표 구하기)
  // 좌표를 담을 배열(기본 빈 배열)
  const [places, setPlaces] = useState([]);
  // 기본 설정(key, 언어, 장소)

  // 마운트시에 한 번 실행
  useEffect(() => {
    Geocode.setApiKey(process.env.REACT_APP_MY_KEY);
    Geocode.setLanguage("ko");
    Geocode.setRegion("ko");
    // 주소로 좌표 구하는 함수
    const getLatLng = (address) => {
      Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          // console.log({ lat, lng });
          setPlaces((prevPlaces) => {
            // console.log("이전값", prevPlaces);
            return [...prevPlaces, { lat: lat, lng: lng }];
          });
          console.log("places 업데이트 됐나?", places);
        },
        (error) => {
          console.log("error", error);
        }
      );
    };
    // console.log("주소 array: ", address);
    // console.log(
    //   `address1: ${address1} \naddress2: ${address2} \naddress3: ${address3} \n`
    // );
    getLatLng(address1);
    getLatLng(address2);
    getLatLng(address3);
    // console.log("허허", places);
  }, []);

  return (
    <div>
      <CustomGoogleMap
        startPoint={{ lat: places[0]?.lat, lng: places[0]?.lng }}
        wayPoints={{ lat: places[1]?.lat, lng: places[1]?.lng }}
        endPoint={{ lat: places[2]?.lat, lng: places[2]?.lng }}
      />
    </div>
  );
};

export default GoogleMapSettings;
