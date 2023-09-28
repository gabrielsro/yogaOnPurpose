import "./Posts.css";
import { useState } from "react";
import postsIcon from "./icons/script.svg";
import AssetMaker from "../AssetMaker";
import PostsList from "../PostsList";
import AppInfo from "../../../AppInfo";

const Posts = ({ loggedUser }) => {
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
            <img src={postsIcon} alt="Post icon" />
            <p>Posts</p>
          </button>
          {categoryState.view !== "collapsed" && (
            <div>
              <AssetMaker
                assetType={"post"}
                loggedUser={loggedUser}
                setAssetState={setAssetState}
              />
              <PostsList />
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
export default Posts;
