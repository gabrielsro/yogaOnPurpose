import "./AppInfo.css";
import Modal from "../../../../components/Modal";
import loadingIcon from "../../../../components/Modal/icons/loading.svg";
import doneIcon from "../../../../components/Modal/icons/done.svg";
import successIcon from "../../../../components/Modal/icons/success.svg";
import errorIcon from "../../../../components/Modal/icons/error.svg";

const AppInfo = ({ status, message, errorMessage }) => {
  console.log(status);
  console.log(message);
  return (
    <Modal>
      <div className="appInfo">
        {status == "loading" && (
          <img src={loadingIcon} alt="Loading icon" id="infoLoadingIcon" />
        )}
        {status == "done" && <img src={doneIcon} alt="Done icon" />}
        {status == "success" && <img src={successIcon} alt="Success icon" />}
        {status == "error" && <img src={errorIcon} alt="Error icon" />}
        {message && <p>{message}</p>}
        {errorMessage && <p id="infoErrorMessage">{errorMessage}</p>}
      </div>
    </Modal>
  );
};
export default AppInfo;
