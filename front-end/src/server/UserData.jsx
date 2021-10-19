import { useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
import axios from "axios";

const UserData = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setError([]);
        setUser([]);
        setLoading(true);
        const userId = read_cookie("userId");
        const body = {
          userId: userId,
        };
        const response = await axios.post("/wherewego/getUserData", body);
        setUser(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  return [loading, error, user];
};

export default UserData;
