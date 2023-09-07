import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import loginSubmit from "./javascripts/loginSubmit";
import loadingIcon from "../../components/Modal/icons/loading.svg";
import refusedConnectionIcon from "../../components/Modal/icons/refusedConnection.svg";
import serverErrorIcon from "../../components/Modal/icons/error.svg";
import warningIcon from "./icons/warning.svg";

const Login = ({ setLoggedUser }) => {
  const [loginState, setLoginState] = useState({
    status: "loaded",
    messages: null,
  });
  const navigate = useNavigate();
  if (loginState.status !== "loading") {
    return (
      <div className="page" id="loginPage">
        <div className="loginFormContainer">
          <form
            action=""
            id="loginForm"
            onSubmit={(e) =>
              loginSubmit(e, setLoginState, setLoggedUser, navigate)
            }
          >
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="username">Password:</label>
            <input type="password" id="password" name="password" />
            <div className="buttonContainer">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="messageContainer">
            {loginState.status == "connectionError" && (
              <div className="messageContents errors">
                <p>Connection error</p>
                <img
                  src={refusedConnectionIcon}
                  alt="Refused connection icon"
                />
                <p>{loginState.error}</p>
              </div>
            )}
            {loginState.status == "serverError" && (
              <div className="messageContents errors">
                <p>Server Error</p>
                <img
                  src={serverErrorIcon}
                  alt="Server error icon"
                  id="serverErrorImg"
                />
                <p>{loginState.error}</p>
              </div>
            )}
            {loginState.status == "wrongCredentials" && (
              <div className="messageContents errors">
                <img src={warningIcon} alt="Warning icon" id="warningIcon" />
                <p>{loginState.error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (loginState.status == "loading") {
    return (
      <Modal>
        <div className="loading" id="loadingLogin">
          <p>Loging you in</p>
          <img src={loadingIcon} alt="Loading icon" className="loadingIcon" />
        </div>
      </Modal>
    );
  }
};
export default Login;
