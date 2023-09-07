import "./UserDashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import Basics from "./components/Basics/Basics";
import Users from "./components/Users/Users";
import Schedule from "./components/Schedule";
import Settings from "./components/Settings";
import Info from "./components/Info";
import Assets from "./components/Assets";
import loadingIcon from "../../components/Modal/icons/loading.svg";
import doneIcon from "../../components/Modal/icons/done.svg";

const UserDashboard = ({ loggedUser, setLoggedUser }) => {
  const [dashboardState, setDashboardState] = useState("loaded");
  const navigate = useNavigate();

  if (dashboardState == "loaded") {
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
  if (dashboardState == "loading") {
    return (
      <Modal>
        <div className="loading">
          <p>Logging you out</p>
          <img src={loadingIcon} alt="Loading icon" className="loadingIcon" />
        </div>
      </Modal>
    );
  }
  if (dashboardState == "success") {
    return (
      <Modal>
        <div className="success">
          <p>Successfully logged out</p>
          <img src={doneIcon} alt="Done icon" id="doneIcon" />
        </div>
      </Modal>
    );
  }
};
export default UserDashboard;
