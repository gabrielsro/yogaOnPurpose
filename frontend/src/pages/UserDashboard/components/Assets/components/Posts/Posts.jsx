import "./Posts.css";
import { useState, useEffect } from "react";
import postsIcon from "./icons/script.svg";
import addIcon from "../../icons/add.svg";
import discardIcon from "../../icons/discard.svg";
import publishIcon from "../../icons/publish.svg";
import saveIcon from "../../icons/save.svg";
import postMakerCheker from "./javascripts/postMakerCheker";
import submitPost from "./javascripts/submitPost";
import getPosts from "./javascripts/getPosts";
import Loading from "../../../Loading";
import Error from "../../../Error";
import PostList from "../PostList";

const Posts = ({ loggedUser, setDashboardState }) => {
  const [managerState, setManagerState] = useState("idle");
  const [postListState, setPostListState] = useState({
    status: "loading",
    result: null,
  });
  useEffect(() => {
    getPosts(setPostListState);
  }, []);
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
            <form action="" id="postMakerForm">
              <label htmlFor="postTitle">Title</label>
              <input
                type="text"
                id="postTitle"
                name="title"
                onInput={() => postMakerCheker(setManagerState)}
              />
              <label htmlFor="postContent">Content</label>
              <textarea
                name="content"
                id="postContent"
                className="postMaker"
                onInput={() => postMakerCheker(setManagerState)}
              />
              <div className="postMakerActions">
                {managerState !== "idle" && (
                  <button
                    className="transparentButton"
                    onClick={(e) => {
                      e.preventDefault();
                      setManagerState("idle");
                    }}
                  >
                    <img src={discardIcon} alt="Discard icon" />
                    <p>Discard</p>
                  </button>
                )}
                {managerState == "written" && (
                  <div className="writtenButtons">
                    <button
                      className="transparentButton"
                      onClick={(e) =>
                        submitPost(e, "draft", loggedUser, setDashboardState)
                      }
                    >
                      <img src={saveIcon} alt="Save icon" />
                      <p>Save as draft</p>
                    </button>
                    <button
                      className="transparentButton"
                      onClick={(e) =>
                        submitPost(
                          e,
                          "published",
                          loggedUser,
                          setDashboardState,
                        )
                      }
                    >
                      <img src={publishIcon} alt="Publish icon" />
                      <p>Post</p>
                    </button>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
        <div className="postManagerList">
          {postListState.status == "loading" && <Loading />}
          {postListState.status == "error" && (
            <Error message={`We couldn't retrieve your posts at this time`} />
          )}
          {postListState.status == "success" && (
            <PostList posts={postListState.result.posts} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Posts;
