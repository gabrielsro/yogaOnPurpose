import "./ChangePic.css";
import { useState } from "react";
import uploadNewProfilePic from "./javascripts/uploadNewProfilePic";
import Loading from "../../../Loading";
import userIcon from "../../../Users/components/UserPreview/icons/user.svg";
import fireIcon from "../../icons/fire.svg";
import doneIcon from "../../icons/done.svg";

const ChangePic = ({ loggedUser, success, setLoggedUser }) => {
  const [settingState, setSettingState] = useState({
    status: "loaded",
    user: loggedUser,
  });

  console.log("render");

  return (
    <div className="setting">
      {settingState.status == "loaded" && (
        <div>
          <div className="settingProfilePicWrapper">
            {!settingState.user?.profilePic && (
              <img
                src={userIcon}
                alt="Default user pic"
                id="defaultUserPicSettings"
                className="profilePic"
              />
            )}
            {settingState.user?.profilePic && (
              <img
                src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,g_face,w_300,h_300,r_max/v1696465311/${settingState.user?.profilePic}`}
                alt="User profile pic"
                id="defaultUserPicSettings"
                className="profilePic"
              />
            )}
          </div>
          {success && (
            <div className="settingMessage">
              <div>
                <img
                  src={doneIcon}
                  alt="Error icon"
                  className="settingsDoneIcon"
                />
                <p className="settingsDoneMessage">
                  Profile picture successfully updated!
                </p>
              </div>
            </div>
          )}
          <form action="" id="profilePicForm">
            <label htmlFor="newProfilePic">
              Choose your new profile picture:
            </label>
            <input type="file" id="newProfilePic" />
            <button
              onClick={(e) =>
                uploadNewProfilePic(e, setSettingState, setLoggedUser)
              }
            >
              Upload
            </button>
          </form>
          {settingState.error && (
            <div className="settingMessage">
              <div>
                <img
                  src={fireIcon}
                  alt="Error icon"
                  className="settingsErrorIcon"
                />
                <p className="settingsErrorMessage">{`We couldn't upload your picture. Please try again later`}</p>
              </div>
            </div>
          )}
        </div>
      )}
      {settingState.status == "loading" && <Loading />}
    </div>
  );
};
export default ChangePic;
