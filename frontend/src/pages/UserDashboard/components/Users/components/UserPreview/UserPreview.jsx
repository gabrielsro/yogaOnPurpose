import "./UserPreview.css";
import userIcon from "./icons/user.svg";
import playIcon from "../../../../icons/play.svg";
import pauseIcon from "../../../../icons/pause2.svg";
import editIcon from "../../../../icons/edit2.svg";
import deleteIcon from "../../../../icons/delete.svg";
import adminIcon from "../../../Info/icons/crown.svg";
import guestIcon from "../../../Info/icons/guest.svg";
import deleteUser from "./javascripts/deleteUser";
import { useState } from "react";
import Modal from "../../../../../../components/Modal";
import WarningOption from "../../../WarningOption";
import LoadingPage from "../../../../../LoadingPage";

const UserPreview = ({ user }) => {
  const [previewWarning, setPreviewWarning] = useState({ status: "off" });
  const [previewState, setPreviewState] = useState({ status: "loaded" });

  if (previewWarning.status == "accepted") {
    deleteUser(user._id, setPreviewState);
  }

  console.log(previewState);

  return (
    <li className="userPreviewCard">
      {previewState.status == "loaded" && (
        <div>
          {previewWarning.status == "question" && (
            <Modal>
              <WarningOption
                message={`Do you want to permanently delete user ${user.firstName} ${user.lastName}?`}
                stateSetter={setPreviewWarning}
                type={undefined}
                assetId={user._id}
              />
            </Modal>
          )}
          <div className="userInfo">
            <div className="userPic">
              {!user.profilePic && (
                <img src={userIcon} alt="User icon" className="profilePic" />
              )}
              {user.profilePic && (
                <img
                  src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,g_face,w_100,h_100,r_max/v1696465311/${user.profilePic}`}
                  alt="User profile pic"
                  className="profilePic"
                />
              )}
            </div>
            <div className="userNames">
              <div>
                <p>{`${user.firstName} ${user.lastName}`}</p>
                <p>{user.username}</p>
              </div>
            </div>
            <div className="userLevel">
              {user.level == "admin" && (
                <img
                  src={adminIcon}
                  alt={`${user.level} icon`}
                  id="adminIcon"
                />
              )}
              {user.level == "guest" && (
                <img
                  src={guestIcon}
                  alt={`${user.level} icon`}
                  id="guestIcon"
                />
              )}
              <p>{user.level}</p>
            </div>
          </div>
          <div className="userStats"></div>
          <div className="userActions">
            <button
              className="transparentButton"
              onClick={(e) => {
                e.preventDefault();
                setPreviewWarning({ status: "question" });
              }}
            >
              <img src={deleteIcon} alt="Delete button" />
            </button>
            <button className="transparentButton">
              <img src={editIcon} alt="Edit button" />
            </button>
            {user.status == "suspended" && (
              <button className="transparentButton">
                <img src={playIcon} alt="Activate user button" />
              </button>
            )}
            {user.status == "active" && (
              <button className="transparentButton">
                <img src={pauseIcon} alt="Suspend user button" />
              </button>
            )}
          </div>
        </div>
      )}
      {previewState.status == "loading" && (
        <Modal>
          <LoadingPage />
        </Modal>
      )}
    </li>
  );
};
export default UserPreview;
