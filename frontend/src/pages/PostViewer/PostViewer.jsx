import "./PostViewer.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import Comments from "../../components/Comments";
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
              <p>{`By ${viewerState.result.authorName}`}</p>
            </div>
            <div className="postViewerDate">
              <p>{dateFormatter(viewerState.result.createdAt, "post")}</p>
            </div>
            <div
              className="postViewerContent"
              dangerouslySetInnerHTML={{ __html: viewerState.result.content }}
            />
            <Comments assetType={"post"} assetId={postId} />
          </div>
        </div>
      )}
    </div>
  );
};
export default PostViewer;
