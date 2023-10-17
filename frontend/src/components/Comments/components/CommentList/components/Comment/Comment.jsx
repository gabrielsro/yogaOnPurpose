import "./Comment.css";
import dateFormatter from "../../../../../../javascripts/dateFormatter";
import commentsIcon from "./icons/comments.svg";
import replyIcon from "./icons/reply.svg";
import CommentReplier from "./components/CommentReplier";
import CommentReplies from "./components/CommentReplies";
import { useState } from "react";

const Comment = ({ comment, assetType }) => {
  const [commentState, setCommentsState] = useState({
    showingReplier: false,
    showingReplies: false,
  });
  return (
    <li className="comment">
      <div className="commentHeader">
        <div className="commentAuthor">
          <img
            src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,g_face,w_30,h_30,r_max/v1696465311/${comment.authorProfilePic}`}
            alt="Author avatar"
          />
          <p>{comment.authorName}</p>
        </div>
        <div className="commentDate">
          <p>{dateFormatter(comment.createdAt)}</p>
        </div>
      </div>
      <div className="commentContent">
        <p>{comment.content}</p>
      </div>
      <div className="commentInteraction">
        <div className="commentInfo">
          {comment.comments.length > 0 && (
            <button
              className="transparentButton"
              onClick={(e) => {
                e.preventDefault();
                setCommentsState({
                  showingReplier: commentState.showingReplier,
                  showingReplies: commentState.showingReplies ? false : true,
                });
              }}
            >
              <p>{comment.comments.length}</p>
              <img src={commentsIcon} alt="Comments icon" />
            </button>
          )}
        </div>
        <div className="commentActions">
          <button
            className="transparentButton"
            onClick={(e) => {
              e.preventDefault();
              setCommentsState({
                showingReplier: commentState.showingReplier ? false : true,
                showingReplies: commentState.showingReplies,
              });
            }}
          >
            <img src={replyIcon} alt="Reply icon" />
          </button>
        </div>
      </div>
      {commentState.showingReplier && (
        <CommentReplier comment={comment} assetType={assetType} />
      )}
      {commentState.showingReplies && (
        <CommentReplies parentComment={comment} />
      )}
    </li>
  );
};
export default Comment;
