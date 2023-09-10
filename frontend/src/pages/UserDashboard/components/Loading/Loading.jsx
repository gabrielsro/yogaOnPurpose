import "./Loading.css";
import loadingIcon from "../../../../components/Modal/icons/loading.svg";

const Loading = () => {
  return (
    <div className="loadingDashElement">
      <img src={loadingIcon} alt="Loading icon" className="loadingIcon" />
    </div>
  );
};
export default Loading;
