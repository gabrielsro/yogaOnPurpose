import "./ChangeName.css";
import Loading from "../../../Loading";
import { useState } from "react";
import changeName from "./javascripts/changeName";
import doneIcon from "../../../../../../components/Modal/icons/done.svg";
import fireIcon from "../../../../icons/fire.svg";

const ChangeName = ({ setLoggedUser }) => {
  const [changerState, setChangerState] = useState({ status: "loaded" });
  return (
    <div>
      {changerState.status == "loaded" && (
        <div>
          <form action="" id="changeNameForm">
            <label htmlFor="newFirstName">First Name:</label>
            <input
              type="text"
              name="newFirstName"
              id="newFirstName"
              placeholder="Enter new first name"
            />
            <label htmlFor="newLastName">Last Name:</label>
            <input
              type="text"
              name="newLastName"
              id="newLastName"
              placeholder="Enter new last name"
            />
          </form>
          <div className="changeNameButton">
            <button
              onClick={(e) => changeName(e, setChangerState, setLoggedUser)}
            >
              Update
            </button>
          </div>
        </div>
      )}
      {changerState.status == "loading" && (
        <div className="changeNameLoading">
          <Loading />
        </div>
      )}
      {changerState.status == "success" && (
        <div className="changeNameSuccess">
          <div>
            <img src={doneIcon} alt="Success icon" />
            <p>Name successfully updated</p>
          </div>
        </div>
      )}
      {changerState.status == "error" && (
        <div className="changeNameError">
          <div>
            <img src={fireIcon} alt="Error icon" />
            <p>There was an error updating your name. Please try again later</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default ChangeName;
