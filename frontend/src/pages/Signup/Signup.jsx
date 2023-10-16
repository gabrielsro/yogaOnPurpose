import "./Signup.css";
import submitSignup from "./javascripts/submitSignup";
import passwordRepeater from "./javascripts/passwordRepeater";
import passwordValidator from "./javascripts/passwordValidator";
import handleSuccess from "./javascripts/handleSuccess";
import Modal from "../../components/Modal/Modal";
import loadingIcon from "../../components/Modal/icons/loading.svg";
import successIcon from "../../components/Modal/icons/success.svg";
import errorIcon from "../../components/Modal/icons/error.svg";
import keyIcon from "../../components/Modal/icons/key.svg";
import { useState } from "react";

const Signup = () => {
  const [signupState, setSignupState] = useState({
    status: "loaded",
    messages: null,
  });
  console.log(signupState);
  if (signupState.status !== "loading" && signupState.status !== "success") {
    return (
      <div className="page" id="signupPage">
        <form
          action="http://localhost:3003/users"
          method="POST"
          id="signupForm"
          onSubmit={(e) => submitSignup(e, setSignupState)}
        >
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" name="firstName" />
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" name="lastName" />
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
                {signupState.key && (
                  <img src={keyIcon} alt="Key icon" id="keyIcon" />
                )}
                <ul>
                  {signupState.messages.split(",").map((message, index) => (
                    <li key={index}>{message}</li>
                  ))}
                </ul>
              </div>
            )}
            {signupState.status == "serverError" && (
              <div className="errorDetails" id="serverError">
                <p>Server Error</p>
                <img src={errorIcon} alt="Error icon" className="errorIcon" />
                {signupState.failedToFetch ? (
                  <p>Failed to Fetch</p>
                ) : (
                  <p>{signupState.messages}</p>
                )}
              </div>
            )}
            {signupState.status == "successDone" && (
              <div className="successDetails">
                <p>{signupState.messages}</p>
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
  if (signupState.status == "success") {
    handleSuccess(setSignupState, signupState.messages);
    return (
      <Modal>
        <div className="success" id="successSignup">
          <p>{signupState.messages}</p>
          <img src={successIcon} alt="Success icon" className="successIcon" />
        </div>
      </Modal>
    );
  }
};
export default Signup;
