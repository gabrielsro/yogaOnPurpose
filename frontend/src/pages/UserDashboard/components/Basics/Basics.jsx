import "./Basics.css";
import logout from "./javascripts/logout";

const Basics = ({ loggedUser, setDashboardState, setLoggedUser, navigate }) => {
  return (
    <div className="userBasics">
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
    </div>
  );
};
export default Basics;
