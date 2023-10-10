import "./Comments.css";
import CommentMaker from "./components/CommentMaker";
import CommentList from "./components/CommentList";
import { useState } from "react";

const Comments = ({ assetType, assetId }) => {
  const [commentsState, setCommentsState] = useState({ status: "loading" });
  console.log(commentsState);
  return (
    <div className="comments">
      <p>Comments:</p>
      <CommentMaker
        assetType={assetType}
        assetId={assetId}
        setCommentsState={setCommentsState}
      />
      <CommentList
        assetType={assetType}
        assetId={assetId}
        commentsState={commentsState}
        setCommentsState={setCommentsState}
      />
    </div>
  );
};
export default Comments;
