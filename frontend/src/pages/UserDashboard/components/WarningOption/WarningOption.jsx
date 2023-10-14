import "./WarningOption.css";
import warningIcon from "./icons/warning2.svg";

const WarningOption = ({ message, stateSetter, type, assetId }) => {
  return (
    <div>
      <div className="warningHeader">
        <img src={warningIcon} alt="Warning icon" />
        <p>{message}</p>
      </div>
      <div className="warningControlsWrapper">
        <div className="warningControls">
          <button
            onClick={(e) => {
              e.preventDefault();
              stateSetter({ status: "accepted", type: type, assetId: assetId });
            }}
          >
            Yes
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              stateSetter({ status: "off" });
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export default WarningOption;
