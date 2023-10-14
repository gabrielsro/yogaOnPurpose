import "./Events.css";
import eventIcon from "./icons/event.svg";
import { useState } from "react";
import AssetMaker from "../AssetMaker";
import EventsList from "../EventsList";
import AppInfo from "../../../AppInfo";

const Events = ({ setLoggedUser }) => {
  const [categoryState, setCategoryState] = useState({ view: "collapsed" });
  const [assetState, setAssetState] = useState({ status: "loaded" });
  return (
    <div className="asset">
      {assetState.status == "loaded" && (
        <div>
          <button
            className="assetTitle transparentButton"
            onClick={() =>
              setCategoryState({
                view:
                  categoryState.view == "collapsed" ? "expanded" : "collapsed",
              })
            }
          >
            <img src={eventIcon} alt="Events icon" />
            <p>Events</p>
          </button>
          {categoryState.view !== "collapsed" && (
            <div>
              <AssetMaker assetType={"event"} setAssetState={setAssetState} />
              <EventsList setLoggedUser={setLoggedUser} />
            </div>
          )}
        </div>
      )}
      {assetState.status !== "loaded" && (
        <AppInfo
          status={assetState.status}
          message={assetState.message}
          errorMessage={assetState.errorMessage}
        />
      )}
    </div>
  );
};
export default Events;
