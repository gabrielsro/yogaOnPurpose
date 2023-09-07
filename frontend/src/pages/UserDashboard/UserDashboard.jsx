import "./UserDashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import logout from "./javascripts/logout";
import loadingIcon from "../../components/Modal/icons/loading.svg";
import doneIcon from "../../components/Modal/icons/done.svg";
import settingsIcon from "./icons/settings.svg";
import infoIcon from "./icons/info.svg";
import assetsIcon from "./icons/assets.svg";
import usersIcon from "./icons/users.svg";
import scheduleIcon from "./icons/calendar.svg";
import postIcon from "./icons/script.svg";
import eventIcon from "./icons/event.svg";
import storeIcon from "./icons/shopping.svg";
import adminIcon from "./icons/crown.svg";
import guestIcon from "./icons/guest.svg";

const UserDashboard = ({ loggedUser, setLoggedUser }) => {
  const [dashboardState, setDashboardState] = useState("loaded");
  const navigate = useNavigate();

  if (dashboardState == "loaded") {
    return (
      <div className="page" id="userPage">
        <section className="userBasics">
          <div className="userGreeting">
            <p>Welcome,</p>
            <h1>{`${loggedUser.firstName} ${loggedUser.lastName}`}</h1>
          </div>
          <div className="userActions">
            <button
              onClick={() => logout(setDashboardState, setLoggedUser, navigate)}
            >
              Logout
            </button>
          </div>
        </section>
        <section className="userSettings dashCategory">
          <div>
            <img
              src={settingsIcon}
              alt="Settings icon"
              className="dashCategoryIcon"
            />
            <h2>User settings</h2>
          </div>
        </section>
        <section className="userInfo dashCategory">
          <div>
            <img
              src={infoIcon}
              alt="Account icon"
              className="dashCategoryIcon"
            />
            <h2>Account Info</h2>
          </div>
          <ul className="userInfoDetails">
            <li>
              <p>Name:</p>
              <p>{`${loggedUser.firstName} ${loggedUser.lastName}`}</p>
            </li>
            <li>
              <p>Username:</p>
              <p>{loggedUser.username}</p>
            </li>
            <li>
              <p>Email:</p>
              <p>{loggedUser.email ? loggedUser.email : "N/A"}</p>
            </li>
            <li>
              <p>Member Since:</p>
              <p>{loggedUser.memberSince ? loggedUser.memberSince : "N/A"}</p>
            </li>
            <li>
              <p>Account Level:</p>
              <p>{loggedUser.level}</p>
              {loggedUser.level == "admin" && (
                <img src={adminIcon} alt="Admin icon" />
              )}
              {loggedUser.level == "guest" && (
                <img src={guestIcon} alt="Admin icon" />
              )}
            </li>
          </ul>
        </section>
        <section className="userActivity dashCategory">
          <div>
            <img
              src={assetsIcon}
              alt="Assets icon"
              className="dashCategoryIcon"
            />
            <h2>Assets</h2>
          </div>
          <ul>
            <li className="assets">
              <div className="assetsTitle">
                <img src={postIcon} alt="Post icon" />
                <h3>Posts</h3>
              </div>
            </li>
            <li className="assets">
              <div className="assetsTitle">
                <img src={eventIcon} alt="Event icon" />
                <h3>Events</h3>
              </div>
            </li>
            <li className="assets">
              <div className="assetsTitle">
                <img src={storeIcon} alt="Store icon" />
                <h3>Store</h3>
              </div>
            </li>
          </ul>
        </section>
        {loggedUser.level == "admin" && (
          <section className="usersSection dashCategory">
            <div>
              <img
                src={scheduleIcon}
                alt="Schedule icon"
                className="dashCategoryIcon"
              />
              <h2>Schedule</h2>
            </div>
          </section>
        )}
        {loggedUser.level == "admin" && (
          <section className="usersSection dashCategory">
            <div>
              <img
                src={usersIcon}
                alt="Users icon"
                className="dashCategoryIcon"
              />
              <h2>Users</h2>
            </div>
          </section>
        )}
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
