import "./Info.css";
import guestIcon from "./icons/guest.svg";
import adminIcon from "./icons/crown.svg";
import infoIcon from "./icons/info.svg";
import { useState } from "react";

const Info = ({ loggedUser }) => {
  const [infoState, setInfoState] = useState({ view: "collapsed" });
  return (
    <div className="dashCategory">
      <button
        className="transparentButton"
        onClick={() =>
          setInfoState({
            view: infoState.view == "collapsed" ? "extended" : "collapsed",
          })
        }
      >
        <img src={infoIcon} alt="Account icon" className="dashCategoryIcon" />
        <h2>Account Info</h2>
      </button>
      {infoState.view !== "collapsed" && (
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
      )}
    </div>
  );
};
export default Info;
