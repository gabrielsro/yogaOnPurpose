import "./Store.css";
import storeIcon from "./icons/shopping.svg";
import { useState } from "react";
import AssetMaker from "../AssetMaker";
import ItemsList from "../ItemsList";
import AppInfo from "../../../AppInfo";

const Store = () => {
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
                  categoryState.view == "collapsed" ? "extended" : "collapsed",
              })
            }
          >
            <img src={storeIcon} alt="Store icon" />
            <p>Store</p>
          </button>
          {categoryState.view !== "collapsed" && (
            <div>
              <AssetMaker assetType={"item"} setAssetState={setAssetState} />
              <ItemsList />
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
export default Store;
