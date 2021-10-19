import React, { useEffect, useRef, useState } from "react";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";

// props는 상위 컴포넌트에서 전달받은 내용이 될 것
const CustomGoogleDirections = (props) => {
  const [directions, setDirections] = useState();
  const { origin, destination } = props;
  const count = useRef(0);

  const options = {
    polyLineOptions: {
      strokeColor: "#fd7d73",
      strokeWeight: 6,
      strokeOpacity: 0.8,
    },
  };

  // useEffect(() => {
  //   count.current = 0;
  //   console.log(origin, destination);
  // }, [origin.lat, origin.lng, destination.lat, destination.lng]);

  const directionsCallback = (result, status) => {
    console.log(result, status);
    if (status === "OK" && count.current === 0) {
      count.current += 1;
      setDirections(result);
    }
  };

  return (
    <>
      <DirectionsService
        options={{ origin, destination, travelMode: "TRANSIT" }}
        callback={directionsCallback}
      />
      {/* travelMode: 'TRANSIT' or 'WALKING' */}
      <DirectionsRenderer directions={directions} options={options} />
    </>
  );
};

export default CustomGoogleDirections;
