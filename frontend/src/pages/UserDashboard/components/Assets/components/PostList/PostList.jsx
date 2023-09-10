import "./PostList.css";
import { Link } from "react-router-dom";
import dateFormatter from "../../../../../../javascripts/dateFormatter";
import deleteIcon from "../../../../icons/delete.svg";
import editIcon from "../../../../icons/edit2.svg";
import draftIcon from "../../../../icons/pause2.svg";
import publishIcon from "../../../../icons/play.svg";

const PostList = ({ posts }) => {
  return (
    <ul className="postList">
      {posts.map((post) => (
        <li key={post._id} className="postListPost">
          <div className="postBasics">
            <div className="postBasicsTitle">
              <p>{post.title}</p>
            </div>
            <div className="postBasicsAuthor">
              <p>{post.authorName}</p>
            </div>
            <div className="postBasicsDate">
              <p>{dateFormatter(post.createdAt)}</p>
            </div>
          </div>
          <div className="postMore">
            <div className="postInfo">
              <p>{post.status}</p>
            </div>
            <div className="postActions">
              <button className="transparentButton postActionDelete">
                <img src={deleteIcon} alt="Delete icon" />
              </button>
              <button className="transparentButton postActionEdit">
                <img src={editIcon} alt="Edit icon" />
              </button>
              {post.status == "published" && (
                <button className="transparentButton postActionDraft">
                  <img src={draftIcon} alt="Draft icon" />
                </button>
              )}
              {post.status == "draft" && (
                <button className="transparentButton postActionPublish">
                  <img src={publishIcon} alt="Publish icon" />
                </button>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default PostList;
