import "./Assets.css";
import assetsIcon from "./icons/assets.svg";
import Posts from "./components/Posts";
import Events from "./components/Events";
import Store from "./components/Store";

const Assets = ({ loggedUser, setDashboardState }) => {
  return (
    <div className="dashCategory">
      <div>
        <img src={assetsIcon} alt="Assets icon" className="dashCategoryIcon" />
        <h2>Assets</h2>
      </div>
      <div className="assets">
        <Posts loggedUser={loggedUser} setDashboardState={setDashboardState} />
        <Events loggedUser={loggedUser} />
        <Store />
      </div>
    </div>
  );
};
export default Assets;
