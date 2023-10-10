import "./UserList.css";
import { useEffect, useState } from "react";
import Loading from "../../../Loading";
import Error from "../../../Error";
import getUsers from "./javascripts/getUsers";
import UserPreview from "../UserPreview";

const UserList = () => {
  const [listState, setListState] = useState({ status: "loading" });
  useEffect(() => {
    getUsers(setListState);
  }, []);
  return (
    <div>
      {listState.status == "loading" && <Loading />}
      {listState.status == "error" && (
        <Error message={listState.errorMessage} />
      )}
      {listState.status == "success" && (
        <ul className="userList">
          {listState.result.map((user) => (
            <UserPreview key={user._id} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default UserList;
