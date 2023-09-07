import "./Posts.css";
import postsIcon from "./icons/script.svg";

const Posts = () => {
  return (
    <div className="asset">
      <div className="assetTitle">
        <img src={postsIcon} alt="Post icon" />
        <p>Posts</p>
      </div>
    </div>
  );
};
export default Posts;
