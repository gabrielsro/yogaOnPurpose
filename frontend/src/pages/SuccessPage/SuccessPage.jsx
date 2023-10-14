import "./SuccessPage.css";
import doneIcon from "../../components/Modal/icons/done.svg";

const SuccessPage = ({ message }) => {
  return (
    <div className="success successPage">
      <div>
        <img src={doneIcon} alt="Done icon" />
        <p>{message}</p>
      </div>
    </div>
  );
};
export default SuccessPage;
