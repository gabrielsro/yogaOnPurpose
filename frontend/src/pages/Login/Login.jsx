import "./Login.css";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import loginSubmit from "./javascripts/loginSubmit";
import loadingIcon from "../../components/Modal/icons/loading.svg";

const Login = () => {
  const [loginState, setLoginState] = useState({
    status: "loaded",
    messages: null,
  });
  if (loginState.status !== "loading") {
    return (
      <div className="page" id="loginPage">
        <form
          action=""
          id="loginForm"
          onSubmit={(e) => loginSubmit(e, setLoginState)}
        >
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="username">Password:</label>
          <input type="password" id="password" name="password" />
          <div className="buttonContainer">
            <button type="submit">Login</button>
          </div>
        </form>
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
