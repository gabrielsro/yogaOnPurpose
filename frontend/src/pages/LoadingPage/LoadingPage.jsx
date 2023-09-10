import "./LoadingPage.css";
import loadingIcon from "../../components/Modal/icons/loading.svg";

const LoadingPage = () => {
  return (
    <div className="loadingPage">
      <img src={loadingIcon} alt="Loading icon" className="loadingIcon" />
    </div>
  );
};
export default LoadingPage;
