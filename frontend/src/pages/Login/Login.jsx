import "./Login.css";

const Login = () => {
  return (
    <div className="page" id="loginPage">
      <form action="" id="loginForm">
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
};
export default Login;
