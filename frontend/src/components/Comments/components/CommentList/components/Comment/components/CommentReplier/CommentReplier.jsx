import "./CommentReplier.css";
import postCommentReply from "./javascripts/postCommentReply";
import { useState } from "react";
import Loading from "../../../../../../../../pages/UserDashboard/components/Loading";
import fireIcon from "../../../../../../../../pages/UserDashboard/icons/fire.svg";
import doneIcon from "../../../../../../../Modal/icons/done.svg";

const CommentReplier = ({ comment, assetType }) => {
  const [replierState, setReplierState] = useState({ status: "loaded" });
  console.log(replierState);
  return (
    <div className="commentReplier">
      {replierState.status == "loaded" && (
        <div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              postCommentReply(e, comment, setReplierState, assetType);
            }}
          >
            <textarea
              name="content"
              id="commentReply"
              placeholder={`Type your reply to ${comment.authorName}...`}
            ></textarea>
            <div className="replierButton">
              <button>Reply</button>
            </div>
          </form>
          <div className="replierStatus">
            {replierState.error && (
              <div className="replierError">
                <img src={fireIcon} alt="Error icon" />
                <p>{`We couldn't post your reply at the moment. Please try again later`}</p>
              </div>
            )}
            {replierState.success && (
              <div className="replierSuccess">
                <img src={doneIcon} alt="Done icon" />
                <p>Your reply was successfully posted!</p>
              </div>
            )}
          </div>
        </div>
      )}
      {replierState.status == "loading" && (
        <div className="replierLoading">
          <Loading />
        </div>
      )}
    </div>
  );
};
export default CommentReplier;
