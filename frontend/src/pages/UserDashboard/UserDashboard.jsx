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
import KeyGenerator from "./components/KeyGenerator";

const UserDashboard = ({ loggedUser, setLoggedUser }) => {
  const navigate = useNavigate();
  const [dashboardState, setDashboardState] = useState({
    status: "loaded",
    previousView: undefined,
    previousShowing: undefined,
  });

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
          user={dashboardState.user}
        />
        <KeyGenerator />
        <Settings
          loggedUser={loggedUser}
          previousView={dashboardState.previousView}
          previousShowing={dashboardState.previousShowing}
          setDashboardState={setDashboardState}
          success={dashboardState.success}
          setLoggedUser={setLoggedUser}
        />
        <Info loggedUser={loggedUser} />
        <Assets loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        {/* {loggedUser.level == "Owner" && <Schedule />}
        {loggedUser.level == "Owner" && <Users />} */}
        <Schedule />
        <Users />
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
