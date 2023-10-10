import "./CommentMaker.css";
import postEventComment from "./javascripts/postEventComment";
import postPostComment from "./javascripts/postPostComment";
import { useState } from "react";
import Loading from "../../../../pages/UserDashboard/components/Loading";
import errorIcon from "../../../../pages/UserDashboard/icons/fire.svg";
import doneIcon from "../../../Modal/icons/done.svg";

const CommentMaker = ({ assetType, assetId, setCommentsState }) => {
  const [makerState, setMakerState] = useState({ status: "loaded" });
  return (
    <div>
      {makerState.status == "loaded" && (
        <div className="commentMaker">
          <form action="">
            <textarea
              name="postComment"
              id="postComment"
              placeholder="Leave your comment here"
            ></textarea>
            <button
              onClick={(e) => {
                e.preventDefault();
                assetType == "post" &&
                  postPostComment(assetId, setMakerState, setCommentsState);
                assetType == "event" &&
                  postEventComment(assetId, setMakerState, setCommentsState);
              }}
            >
              Post comment
            </button>
          </form>
          {makerState.error && (
            <div className="commentMakerErrorMessage">
              <div>
                <img src={errorIcon} alt="Error icon" />
                <p>{`We coldn't post your comment. Please try again later`}</p>
              </div>
            </div>
          )}
          {makerState.success && (
            <div className="commentMakeSuccessMessage">
              <div>
                <img src={doneIcon} alt="Done icon" />
                <p>Comment posted successfully!</p>
              </div>
            </div>
          )}
        </div>
      )}
      {makerState.status == "loading" && (
        <div className="commentLoadingContainer">
          <Loading />
        </div>
      )}
    </div>
  );
};
export default CommentMaker;
