import { useEffect, useState } from "react";
import axios from "axios";

const StationsData = () => {
  const [station, setStation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchStation = async () => {
      try {
        setError([]);
        setStation([]);
        setLoading(true);
        const response = await axios.get("/wherewego/stationList");
        setStation(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchStation();
    // console.log(station);
  }, []);

  return [loading, error, station];
};

export default StationsData;
