import "./Settings.css";
import settingsIcon from "./icons/settings.svg";
import nameIcon from "./icons/name.svg";
import usernameIcon from "./icons/username.svg";
import emailIcon from "./icons/email.svg";
import passwordIcon from "./icons/password.svg";
import picIcon from "./icons/pic.svg";
import trashIcon from "./icons/trash.svg";
import levelIcon from "./icons/level2.svg";
import aboutIcon from "./icons/about.svg";
import { useState } from "react";
import ChangePic from "./components/ChangePic";
import ChangeName from "./components/ChangeName";

const Settings = ({
  loggedUser,
  previousView,
  previousShowing,
  success,
  setLoggedUser,
}) => {
  const [settingsState, setSettingsState] = useState({
    view: previousView ? previousView : "collapsed",
    showing: previousShowing ? previousShowing : [],
  });

  return (
    <div className="dashCategory">
      <button
        className="transparentButton"
        onClick={() =>
          setSettingsState({
            view: settingsState.view == "collapsed" ? "extended" : "collapsed",
            showing: [],
          })
        }
      >
        <img
          src={settingsIcon}
          alt="Settings icon"
          className="dashCategoryIcon"
        />
        <h2>User settings</h2>
      </button>
      {settingsState.view !== "collapsed" && (
        <ul className="userSettingsOptions">
          <li>
            <button
              className="option"
              onClick={() => {
                setSettingsState({
                  view: "extended",
                  showing: settingsState.showing.some((s) => s == "ChangeName")
                    ? settingsState.showing.filter((s) => s !== "ChangeName")
                    : settingsState.showing.concat(["ChangeName"]),
                });
              }}
            >
              <img src={nameIcon} alt="Name icon" />
              <p>Change name</p>
            </button>
            {settingsState.showing.some((s) => s == "ChangeName") && (
              <ChangeName setLoggedUser={setLoggedUser} />
            )}
          </li>
          <li>
            <button className="option">
              <img src={usernameIcon} alt="Name icon" />
              <p>Change username</p>
            </button>
          </li>
          <li>
            <button
              className="option"
              onClick={() => {
                setSettingsState({
                  view: "extended",
                  showing: settingsState.showing.some((s) => s == "ChangePic")
                    ? settingsState.showing.filter((s) => s !== "ChangePic")
                    : settingsState.showing.concat(["ChangePic"]),
                });
              }}
            >
              <img src={picIcon} alt="Profile pic icon" />
              <p>Change profile picture</p>
            </button>
            {settingsState.showing.some((s) => s == "ChangePic") && (
              <ChangePic
                loggedUser={loggedUser}
                success={success}
                setLoggedUser={setLoggedUser}
              />
            )}
          </li>
          <li>
            <button className="option">
              <img src={aboutIcon} alt="Level icon" />
              <p>Change bio</p>
            </button>
          </li>
          <li>
            <button className="option">
              <img src={emailIcon} alt="Email icon" />
              <p>Change email</p>
            </button>
          </li>
          <li>
            <button className="option">
              <img src={passwordIcon} alt="Password icon" />
              <p>Change password</p>
            </button>
          </li>
          <li>
            <button className="option">
              <img src={levelIcon} alt="Level icon" />
              <p>Change account level</p>
            </button>
          </li>
          <li>
            <button className="option" id="deleteAccountOption">
              <img src={trashIcon} alt="Profile pic icon" />
              <p>Delete your account</p>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Settings;
