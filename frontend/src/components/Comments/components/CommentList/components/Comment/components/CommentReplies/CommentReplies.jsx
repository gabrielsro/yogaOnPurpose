import "./CommentReplies.css";
import { useState, useEffect } from "react";
import Loading from "../../../../../../../../pages/UserDashboard/components/Loading";
import getReplies from "./javascripts/getReplies";
import Comment from "../../Comment";
import fireIcon from "../../../../../../../../pages/UserDashboard/icons/fire.svg";

const CommentReplies = ({ parentComment }) => {
  const [repliesState, setRepliesState] = useState({ status: "loading" });
  useEffect(() => {
    getReplies(parentComment, setRepliesState);
  }, [parentComment]);
  return (
    <div>
      {repliesState.status == "loading" && (
        <div className="repliesLoading">
          <Loading />
        </div>
      )}
      {repliesState.status == "error" && (
        <div className="repliesError">
          <div>
            <img src={fireIcon} alt="Error icon" />
            <p>{`We couldn't retrieve the replies. Please try again later`}</p>
          </div>
        </div>
      )}
      {repliesState.status == "loaded" && (
        <ul className="replyList">
          {repliesState.result.map((reply) => (
            <Comment key={reply._id} comment={reply} assetType={"comment"} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default CommentReplies;
