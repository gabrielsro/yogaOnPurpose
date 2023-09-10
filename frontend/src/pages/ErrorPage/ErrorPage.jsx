import "./ErrorPage.css";
import errorIcon from "../../components/Modal/icons/error.svg";

const ErrorPage = ({ message }) => {
  return (
    <div className="errorPage">
      <img src={errorIcon} alt="Error icon" />
      <p>{message}</p>
    </div>
  );
};
export default ErrorPage;
