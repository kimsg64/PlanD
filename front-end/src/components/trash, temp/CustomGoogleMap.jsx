import React, { memo, useEffect, useRef, useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";

// props는 상위 컴포넌트에서 전달받은 내용이 될 것
const CustomGoogleDirections = (props) => {
  const [directions, setDirections] = useState();
  const { origin, waypoints, destination } = props;
  const count = useRef(0);
  console.log("디렉션", origin, waypoints, destination);
  const options = {
    polyLineOptions: {
      strokeColor: "black",
      strokeWeight: 6,
      strokeOpacity: 0.8,
    },
  };

  useEffect(() => {
    count.current = 0;
    console.log(origin, waypoints, destination);
  }, [
    origin?.lat,
    origin?.lng,
    destination?.lat,
    destination?.lng,
    waypoints?.lat,
    waypoints?.lng,
  ]);

  const directionsCallback = (result, status) => {
    console.log("디렉션콜백", result, status);
    if (status === "OK" && count.current === 0) {
      count.current += 1;
      setDirections(result);
    }
  };

  return (
    <>
      <DirectionsService
        // travelMode: 'TRANSIT' or 'WALKING' => 웨이포인트 쓰려면 Transit은 못 쓴다
        options={{
          origin: origin,
          destination: destination,
          waypoints: [{ location: waypoints }],
          travelMode: "WALKING",
        }}
        callback={directionsCallback}
      />
      <DirectionsRenderer directions={directions} options={options} />
    </>
  );
};

const CustomGoogleMap = (props) => {
  const { startPoint, wayPoints, endPoint } = props;
  console.log("구글맵", props);
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MY_KEY}>
      <GoogleMap
        mapContainerStyle={{
          height: "400px",
          width: "800px",
        }}
        zoom={15}
        center={startPoint}
      >
        <CustomGoogleDirections
          origin={startPoint}
          waypoints={wayPoints}
          destination={endPoint}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(CustomGoogleMap);
