import "./Error.css";
import fireIcon from "../../icons/fire.svg";

const Error = ({ message }) => {
  return (
    <div className="dashElementError">
      <div className="errorMessage">
        <img src={fireIcon} alt="Error icon" />
        <p>{message}</p>
      </div>
    </div>
  );
};
export default Error;
