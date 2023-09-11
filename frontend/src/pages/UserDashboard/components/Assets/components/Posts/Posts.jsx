import "./Posts.css";
import { useState } from "react";
import postsIcon from "./icons/script.svg";
import AssetMaker from "../AssetMaker";
import PostsList from "../PostsList";

const Posts = ({ loggedUser, setDashboardState }) => {
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
        <img src={postsIcon} alt="Post icon" />
        <p>Posts</p>
      </button>
      {categoryState.view !== "collapsed" && (
        <div>
          <AssetMaker
            assetType={"post"}
            loggedUser={loggedUser}
            setDashboardState={setDashboardState}
          />
          <PostsList />
        </div>
      )}
    </div>
  );
};
export default Posts;
