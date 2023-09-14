import "./UserDashboard.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import Basics from "./components/Basics/Basics";
import Users from "./components/Users/Users";
import Schedule from "./components/Schedule";
import Settings from "./components/Settings";
import Info from "./components/Info";
import Assets from "./components/Assets";
import loadingIcon from "../../components/Modal/icons/loading.svg";
import doneIcon from "../../components/Modal/icons/done.svg";
import successIcon from "../../components/Modal/icons/success.svg";
import errorIcon from "../../components/Modal/icons/error.svg";

const UserDashboard = ({ loggedUser, setLoggedUser }) => {
  const navigate = useNavigate();

  const [dashboardState, setDashboardState] = useState({
    status: "loaded",
    petition: null,
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
        />
        <Settings />
        <Info loggedUser={loggedUser} />
        <Assets loggedUser={loggedUser} setDashboardState={setDashboardState} />
        {loggedUser.level == "admin" && <Schedule />}
        {loggedUser.level == "admin" && <Users />}
      </div>
    );
  }

  if (dashboardState.status !== "loaded") {
    return (
      <Modal>
        <div className={dashboardState.status}>
          {/* Messages */}
          {dashboardState.status == "loading" &&
            dashboardState.petition == "logout" && <p>Logging you out</p>}
          {dashboardState.status == "success" &&
            dashboardState.petition == "logout" && (
              <p>Successfully logged you out</p>
            )}
          {dashboardState.status == "loading" &&
            dashboardState.petition == "post_published" && (
              <p>Publishing your post</p>
            )}
          {dashboardState.status == "success" &&
            dashboardState.petition == "post_published" && (
              <p>Post successfully published!</p>
            )}
          {dashboardState.status == "loading" &&
            dashboardState.petition == "post_draft" && <p>Saving your draft</p>}
          {dashboardState.status == "success" &&
            dashboardState.petition == "post_draft" && <p>Draft saved</p>}
          {dashboardState.status == "error" &&
            dashboardState.petition == "post_published" && (
              <p>{`We couldn't publish your post`}</p>
            )}
          {dashboardState.status == "error" &&
            /draft/.test(dashboardState.petition) && (
              <p>{`We couldn't save your draft`}</p>
            )}
          {dashboardState.status == "error" &&
            dashboardState.petition == "event_published" && (
              <p>{`We couldn't publish your event`}</p>
            )}
          {dashboardState.status == "error" &&
            dashboardState.petition == "item_published" && (
              <p>{`We couldn't add your item to the store`}</p>
            )}
          {/* Icons */}
          {dashboardState.status == "loading" && (
            <img src={loadingIcon} alt="Loading icon" className="loadingIcon" />
          )}
          {dashboardState.status == "success" &&
            dashboardState.petition == "logout" && (
              <img src={doneIcon} alt="Done icon" id="doneIcon" />
            )}
          {dashboardState.status == "success" &&
            dashboardState.petition == "post_draft" && (
              <img src={doneIcon} alt="Done icon" id="doneIcon" />
            )}
          {dashboardState.status == "success" &&
            dashboardState.petition == "post_published" && (
              <img
                src={successIcon}
                alt="Success icon"
                className="successIcon"
              />
            )}
          {dashboardState.status == "error" && (
            <img src={errorIcon} alt="Success icon" className="errorIcon" />
          )}
          {/* Additional message */}
          {dashboardState.status == "error" && (
            <p>{`Please contact your web provider or try again later`}</p>
          )}
        </div>
      </Modal>
    );
  }
};
export default UserDashboard;
