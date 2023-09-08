import "./Posts.css";
import { useState } from "react";
import postsIcon from "./icons/script.svg";
import addIcon from "../../icons/add.svg";
import discardIcon from "../../icons/discard.svg";
import publishIcon from "../../icons/publish.svg";
import saveIcon from "../../icons/save.svg";
import postMakerCheker from "./javascripts/postMakerCheker";

const Posts = () => {
  const [managerState, setManagerState] = useState("idle");
  return (
    <div className="asset">
      <div className="assetTitle">
        <img src={postsIcon} alt="Post icon" />
        <p>Posts</p>
      </div>
      <div className="postManager">
        <div className="postManagerContents">
          {managerState == "idle" && (
            <button
              className="transparentButton addAsset"
              onClick={() => setManagerState("addPost")}
            >
              <img src={addIcon} alt="Add icon" />
              <p>Add New Post</p>
            </button>
          )}
          {managerState !== "idle" && (
            <button
              className="transparentButton addAsset"
              onClick={() => setManagerState("idle")}
            >
              <img src={discardIcon} alt="Discard icon" />
              <p>Discard</p>
            </button>
          )}
          {managerState !== "idle" && (
            <textarea
              name=""
              id=""
              className="postMaker"
              onInput={() => postMakerCheker(setManagerState)}
            />
          )}
          {managerState == "written" && (
            <div className="postMakerActions">
              <button className="transparentButton">
                <img src={saveIcon} alt="Save icon" />
                <p>Save as draft</p>
              </button>
              <button className="transparentButton">
                <img src={publishIcon} alt="Publish icon" />
                <p>Post</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Posts;
