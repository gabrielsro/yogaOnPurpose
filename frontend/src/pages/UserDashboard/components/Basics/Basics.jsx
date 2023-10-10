import "./Basics.css";
import logout from "./javascripts/logout";
import defaultUserIcon from "../Users/components/UserPreview/icons/user.svg";

const Basics = ({
  loggedUser,
  setDashboardState,
  setLoggedUser,
  navigate,
  user,
}) => {
  const loadedUser = user ? user : loggedUser;
  console.log(loadedUser);
  return (
    <div className="userBasics">
      <div className="userBasicsHeader">
        <div className="userProfilePicHeader">
          {loadedUser.profilePic && (
            <img
              src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,g_face,w_300,h_300,r_max/v1696465311/${loadedUser.profilePic}`}
              alt={`${loadedUser.username} profile pic`}
              className="profilePic"
            />
          )}
          {!loadedUser.profilePic && (
            <img
              src={defaultUserIcon}
              alt="Default profile pic"
              className="profilePic"
            />
          )}
        </div>
        <div className="userGreeting">
          <p>Welcome,</p>
          <h1>{`${loggedUser.firstName} ${loggedUser.lastName}`}</h1>
        </div>
      </div>
      <div className="userActions">
        <button
          onClick={() => logout(setDashboardState, setLoggedUser, navigate)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
export default Basics;
