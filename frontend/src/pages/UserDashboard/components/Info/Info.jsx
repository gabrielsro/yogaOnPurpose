import "./Info.css";
import guestIcon from "./icons/guest.svg";
import adminIcon from "./icons/crown.svg";
import infoIcon from "./icons/info.svg";

const Info = ({ loggedUser }) => {
  return (
    <div className="dashCategory">
      <div>
        <img src={infoIcon} alt="Account icon" className="dashCategoryIcon" />
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
    </div>
  );
};
export default Info;
