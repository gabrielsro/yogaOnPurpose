import "./Users.css";
import usersIcon from "./icons/users.svg";

const Users = () => {
  return (
    <div className="dashCategory">
      <button className="transparentButton">
        <img src={usersIcon} alt="Users icon" className="dashCategoryIcon" />
        <h2>Users</h2>
      </button>
    </div>
  );
};
export default Users;
