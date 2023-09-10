import "./Blog.css";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage";
import getPosts from "./javascripts/getPosts";
import ErrorPage from "../ErrorPage";
import PostPreview from "../../components/PostPreview";
import dateFormatter from "../../javascripts/dateFormatter";

const Blog = () => {
  const [blogState, setBlogState] = useState({
    status: "loading",
    view: "list",
  });
  useEffect(() => {
    getPosts(setBlogState);
  }, []);
  return (
    <div className="page">
      {blogState.status == "loading" && <LoadingPage />}
      {blogState.status == "error" && <ErrorPage message={blogState.message} />}
      {blogState.status == "loaded" && blogState.view == "list" && (
        <div className="postsContainer">
          <ul className="postsContainerList">
            {blogState.result.map((post) => (
              <PostPreview post={post} key={post._id} />
            ))}
          </ul>
        </div>
      )}
      {blogState.status == "loaded" && blogState.view == "post" && (
        <div className="postView">
          <div className="postViewControls">
            <button className="transparentButton">
              <p>Return</p>
            </button>
          </div>
          <div className="postViewPost">
            <div className="postViewTitle">
              <h1>{blogState.result.title}</h1>
            </div>
            <div className="postViewAuthor">
              <h2>{blogState.result.authorName}</h2>
            </div>
            <div className="postViewDate">
              <h3>{dateFormatter(blogState.result.createdAt, "post")}</h3>
            </div>
            <div className="postViewContent">{blogState.result.content}</div>
            <section className="postViewComments">
              <p>Comments:</p>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
export default Blog;
