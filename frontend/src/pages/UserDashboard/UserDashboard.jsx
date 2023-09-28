import "./UserDashboard.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Basics from "./components/Basics/Basics";
import Users from "./components/Users/Users";
import Schedule from "./components/Schedule";
import Settings from "./components/Settings";
import Info from "./components/Info";
import Assets from "./components/Assets";
import AppInfo from "./components/AppInfo";

const UserDashboard = ({ loggedUser, setLoggedUser }) => {
  const navigate = useNavigate();
  const [dashboardState, setDashboardState] = useState({ status: "loaded" });

  if (!loggedUser) {
    return <Navigate to="/login" />;
  }

  if (dashboardState.status == "loaded" && loggedUser) {
    return (
      <div className="page" id="userPage">
        <Basics
          loggedUser={loggedUser}
          setDashboardState={setDashboardState}
          setLoggedUser={setLoggedUser}
          navigate={navigate}
        />
        <Settings />
        <Info loggedUser={loggedUser} />
        <Assets loggedUser={loggedUser} />
        {loggedUser.level == "admin" && <Schedule />}
        {loggedUser.level == "admin" && <Users />}
      </div>
    );
  }
  if (dashboardState.status !== "loaded") {
    console.log(dashboardState);
    return (
      <AppInfo
        status={dashboardState.status}
        message={dashboardState.message}
        errorMessage={dashboardState.errorMessage}
      />
    );
  }
};

export default UserDashboard;
