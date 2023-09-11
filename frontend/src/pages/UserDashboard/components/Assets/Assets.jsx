import "./Assets.css";
import assetsIcon from "./icons/assets.svg";
import Posts from "./components/Posts";
import Events from "./components/Events";
import Store from "./components/Store";
import { useState } from "react";

const Assets = ({ loggedUser, setDashboardState }) => {
  const [assetsState, setAssetsState] = useState({ view: "collapsed" });
  return (
    <div className="dashCategory">
      <button
        className="transparentButton"
        onClick={() => {
          setAssetsState({
            view: assetsState.view == "collapsed" ? "extended" : "collapsed",
          });
        }}
      >
        <img src={assetsIcon} alt="Assets icon" className="dashCategoryIcon" />
        <h2>Assets</h2>
      </button>
      {assetsState.view !== "collapsed" && (
        <div className="assets">
          <Posts
            loggedUser={loggedUser}
            setDashboardState={setDashboardState}
          />
          <Events
            loggedUser={loggedUser}
            setDashboardState={setDashboardState}
          />
          <Store
            loggedUser={loggedUser}
            setDashboardState={setDashboardState}
          />
        </div>
      )}
    </div>
  );
};
export default Assets;
