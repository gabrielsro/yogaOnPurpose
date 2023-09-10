import "./PostViewer.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import getPost from "./javascripts/getPost";
import dateFormatter from "../../javascripts/dateFormatter";

const PostViewer = () => {
  const { postId } = useParams();
  const [viewerState, setViewerState] = useState({ status: "loading" });
  useEffect(() => {
    getPost(postId, setViewerState);
  }, [postId]);

  return (
    <div className="page">
      {viewerState.status == "loading" && <LoadingPage />}
      {viewerState.status == "error" && (
        <ErrorPage message={viewerState.message} />
      )}
      {viewerState.status == "loaded" && (
        <div>
          <div className="pageControls">
            <Link to="/Blog" className="returnLink">
              Return
            </Link>
          </div>
          <div className="postViewer">
            <div className="postViewerTitle">
              <h1>{viewerState.result.title}</h1>
            </div>
            <div className="postViewerAuthor">
              <h2>{`By ${viewerState.result.authorName}`}</h2>
            </div>
            <div className="postViewerDate">
              <p>{dateFormatter(viewerState.result.createdAt, "post")}</p>
            </div>
            <div className="postViewerContent">
              {viewerState.result.content}
            </div>
            <div className="postViewerComments">
              <p>Comments:</p>
              <div className="postViewerCommentMaker">
                <form action="">
                  <textarea
                    name="postComment"
                    id="postComment"
                    placeholder="Leave your comment here"
                  ></textarea>
                  <button>Post comment</button>
                </form>
              </div>
              {viewerState.result.comments.length < 1 && (
                <div className="emptyCommentSection">
                  <p>Nobody has commented on this post</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PostViewer;
