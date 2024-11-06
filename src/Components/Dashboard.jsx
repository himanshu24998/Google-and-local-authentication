import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setEmail(userEmail);
    }
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user-info"));
    setUserInfo(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/login");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <h5>Welcome {userInfo?.name}</h5>
      <h5>Email: {userInfo?.email || email}</h5>

      {/* <button className="logout">
        <a href="/login" style={{ textDecoration: "none" }}>
          Logout
        </a>
      </button> */}
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
