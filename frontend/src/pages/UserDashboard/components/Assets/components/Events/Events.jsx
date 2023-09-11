import "./Events.css";
import eventIcon from "./icons/event.svg";
import { useState } from "react";
import AssetMaker from "../AssetMaker";
import EventsList from "../EventsList";

const Events = ({ loggedUser, setDashboardState }) => {
  const [categoryState, setCategoryState] = useState({ view: "collapsed" });

  return (
    <div className="asset">
      <button
        className="assetTitle transparentButton"
        onClick={() =>
          setCategoryState({
            view: categoryState.view == "collapsed" ? "expanded" : "collapsed",
          })
        }
      >
        <img src={eventIcon} alt="Events icon" />
        <p>Events</p>
      </button>
      {categoryState.view !== "collapsed" && (
        <div>
          <AssetMaker
            assetType={"event"}
            loggedUser={loggedUser}
            setDashboardState={setDashboardState}
          />
          <EventsList />
        </div>
      )}
    </div>
  );
};
export default Events;
