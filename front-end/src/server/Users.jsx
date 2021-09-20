import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await axios.get("/wherewego/test");
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return null;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.userid}>
          {user.title} ({user.userid})
        </li>
      ))}
    </ul>
  );
};

export default Users;
