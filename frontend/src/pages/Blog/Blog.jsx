import "./Blog.css";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage";
import getPosts from "./javascripts/getPosts";
import ErrorPage from "../ErrorPage";
import PostPreview from "../../components/PostPreview";

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
    </div>
  );
};
export default Blog;
