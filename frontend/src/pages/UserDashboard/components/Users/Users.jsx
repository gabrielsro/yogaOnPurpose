import "./Users.css";
import usersIcon from "./icons/users.svg";

const Users = () => {
  return (
    <div className="dashCategory">
      <div>
        <img src={usersIcon} alt="Users icon" className="dashCategoryIcon" />
        <h2>Users</h2>
      </div>
    </div>
  );
};
export default Users;
