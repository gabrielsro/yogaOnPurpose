import "./CommentList.css";
import { useEffect } from "react";
import Loading from "../../../../pages/UserDashboard/components/Loading";
import getComments from "./javascripts/getComments";
import Comment from "./components/Comment";
import fireIcon from "../../../../pages/UserDashboard/icons/fire.svg";

const CommentList = ({
  assetType,
  assetId,
  commentsState,
  setCommentsState,
}) => {
  console.log(commentsState);

  useEffect(() => {
    commentsState.status == "loading" &&
      getComments(assetType, assetId, setCommentsState);
  }, [assetType, assetId, setCommentsState, commentsState]);

  return (
    <div>
      {commentsState.status == "loading" && (
        <div className="commentListLoading">
          <Loading />
        </div>
      )}
      {commentsState.error && (
        <div className="commentListError">
          <div>
            <img src={fireIcon} alt="Error icon" />
            <p>{`We couldn't retrieve the comments at this time. Please try again later`}</p>
          </div>
        </div>
      )}
      {commentsState.status == "loaded" &&
        !commentsState.error &&
        commentsState.result.length < 1 && (
          <div className="emptyCommentList">
            <p>{`There are no comments on this ${assetType}`}</p>
          </div>
        )}
      {commentsState.status == "loaded" && commentsState.success && (
        <ul className="commentList">
          {commentsState.result.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              assetType={assetType}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default CommentList;
