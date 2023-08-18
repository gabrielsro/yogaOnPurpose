import "./Signup.css";

const Signup = () => {
  return (
    <div className="page" id="signupPage">
      <form action="http://localhost:3003/users" method="POST" id="signupForm">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="username">Password:</label>
        <input type="password" id="password" name="password" />
        <div className="buttonContainer">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
