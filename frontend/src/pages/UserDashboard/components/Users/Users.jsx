import "./Users.css";
import usersIcon from "./icons/users.svg";
import { useState } from "react";
import UserList from "./components/UserList";

const Users = () => {
  const [usersState, setUsersState] = useState({ view: "collapsed" });
  return (
    <div className="dashCategory">
      <button
        className="transparentButton"
        onClick={() =>
          setUsersState({
            view: usersState.view == "collapsed" ? "list" : "collapsed",
          })
        }
      >
        <img src={usersIcon} alt="Users icon" className="dashCategoryIcon" />
        <h2>Users</h2>
      </button>
      {usersState.view == "list" && <UserList />}
    </div>
  );
};
export default Users;
