import "./PostPreview.css";
import { Link } from "react-router-dom";
import dateFormatter from "../../javascripts/dateFormatter";

const PostPreview = ({ post }) => {
  return (
    <li className="postContainerPost">
      <Link to={`/viewPost/${post._id}`}>
        <div className="postPreviewCreationDate">
          <p>{dateFormatter(post.createdAt, "preview")}</p>
        </div>
        <div className="postPreviewTitle">{post.title}</div>
        <div className="postPreviewAuthor">
          <p>By</p>
          <p>{post.authorName}</p>
        </div>
        <div className="postPreviewContent">{post.content}</div>
      </Link>
    </li>
  );
};
export default PostPreview;
