import "./Signup.css";
import submitSignup from "./javascripts/submitSignup";
import passwordRepeater from "./javascripts/passwordRepeater";
import passwordValidator from "./javascripts/passwordValidator";
import Modal from "../../components/Modal/Modal";
import loadingIcon from "../../components/Modal/icons/loading.svg";
import { useState } from "react";

const Signup = () => {
  const [signupState, setSignupState] = useState({
    status: "loaded",
    messages: null,
  });
  if (signupState.status !== "loading") {
    return (
      <div className="page" id="signupPage">
        <form
          action="http://localhost:3003/users"
          method="POST"
          id="signupForm"
          onSubmit={(e) => submitSignup(e, setSignupState)}
        >
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onInput={() => passwordRepeater()}
            placeholder="At least 10 characters long"
          />
          <label
            htmlFor="passwordAgain"
            className="invisible"
            id="passwordAgainLabel"
          >
            Re-type password:
          </label>
          <input
            type="password"
            id="passwordAgain"
            name="passwordAgain"
            className="invisible"
            onInput={() => passwordValidator()}
          />
          <label htmlFor="key">Key:</label>
          <input type="password" id="key" name="key" />
          <div className="buttonContainer">
            <button type="submit">Signup</button>
          </div>
          <div className="errorContainer">
            {signupState.status == "error" && (
              <div className="errorDetails">
                <ul>
                  {signupState.messages.map((message, index) => (
                    <li key={index}>{message.msg}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
  if (signupState.status == "loading") {
    return (
      <Modal>
        <div className="loading" id="loadingSignup">
          <p>Signing you in</p>
          <img src={loadingIcon} alt="Loading icon" className="loadingIcon" />
        </div>
      </Modal>
    );
  }
};
export default Signup;
