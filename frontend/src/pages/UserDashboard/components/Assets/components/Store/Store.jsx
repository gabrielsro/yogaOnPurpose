import "./Store.css";
import storeIcon from "./icons/shopping.svg";
import { useState } from "react";
import AssetMaker from "../AssetMaker";
import ItemsList from "../ItemsList";

const Store = ({ loggedUser, setDashboardState }) => {
  const [categoryState, setCategoryState] = useState({ view: "collapsed" });
  return (
    <div className="asset">
      <button
        className="assetTitle transparentButton"
        onClick={() =>
          setCategoryState({
            view: categoryState.view == "collapsed" ? "extended" : "collapsed",
          })
        }
      >
        <img src={storeIcon} alt="Store icon" />
        <p>Store</p>
      </button>
      {categoryState.view !== "collapsed" && (
        <div>
          <AssetMaker
            assetType={"item"}
            loggedUser={loggedUser}
            setDashboardState={setDashboardState}
          />
          <ItemsList />
        </div>
      )}
    </div>
  );
};
export default Store;
