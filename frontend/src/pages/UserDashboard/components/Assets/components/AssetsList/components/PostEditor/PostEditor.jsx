import "./PostEditor.css";
import { useRef, useState } from "react";
import editorConfig from "./javascripts/editorConfig";
import BundledEditor from "../../../../../../../../components/BundledEditor";
import saveIcon from "../../../../icons/save.svg";
import postIcon from "../../../../icons/publish.svg";
import restoreIcon from "../../../../icons/rewind.svg";
import updatePost from "./javascripts/updatePost";
import Loading from "../../../../../Loading";
import fireIcon from "../../../../../../icons/fire.svg";
import successIcon from "../../../../../../../../components/Modal/icons/done.svg";

const PostEditor = ({ post, setPostListState }) => {
  const editorRef = useRef(null);
  const [editorView, setEditorView] = useState({
    status: "loaded",
    error: false,
  });
  const [editorState, setEditorState] = useState({ status: "original" });
  const [recoveryData, setRecoveryData] = useState({ title: "", content: "" });
  const [title, setTitle] = useState(
    editorView.error
      ? recoveryData.title
        ? recoveryData.title
        : ""
      : post.title
      ? post.title
      : "",
  );

  console.log(editorState);

  return (
    <div className="postEditorWrapper">
      {editorView.status == "loading" && (
        <div className="postEditorLoadingWrapper">
          <Loading />
        </div>
      )}
      {editorView.status == "error" && (
        <div className="postEditorErrorWrapper">
          <div>
            <img src={fireIcon} alt="Error icon" />
            <p>
              There was an error uploading your changes. Please try again later
            </p>
          </div>
        </div>
      )}
      {editorView.status == "success" && (
        <div className="postEditorSuccessWrapper">
          <div>
            <img src={successIcon} alt="Success icon" />
            <p>Changes applied successfully!</p>
          </div>
        </div>
      )}
      {editorView.status == "loaded" && (
        <div>
          <form action="" className="postEditorForm">
            <label htmlFor="newTitle">Title</label>
            <input
              type="text"
              id="newTitle"
              name="newTitle"
              value={title}
              onChange={(e) => {
                setEditorState({ status: "written" });
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="newContent">Content</label>
            {!editorView.error && (
              <BundledEditor
                init={editorConfig}
                initialValue={post.content ? post.content : ""}
                onInit={(e, editor) => (editorRef.current = editor)}
                onEditorChange={() => {
                  editorState.status !== "written" &&
                    setEditorState({ status: "written" });
                }}
              />
            )}
            {editorView.error && (
              <BundledEditor
                init={editorConfig}
                initialValue={recoveryData.content ? recoveryData.content : ""}
                onInit={(e, editor) => (editorRef.current = editor)}
                onEditorChange={() => {
                  editorState.status !== "written" &&
                    setEditorState({ status: "written" });
                }}
              />
            )}
          </form>
          <div className="postEditorMessages">
            {editorView.error && (
              <div className="postEditorErrorContainer">
                Changes not applied. Please try again later
              </div>
            )}
          </div>
          <div className="postEditorButtonsWrapper">
            {editorState.status == "written" && (
              <div className="postEditorButtons">
                <div>
                  <button
                    className="transparentButton"
                    onClick={(e) => {
                      e.preventDefault();
                      setTitle(post.title ? post.title : "");
                      editorRef.current &&
                        editorRef.current.setContent(
                          post.content ? post.content : "",
                        );
                      setEditorState({ status: "original" });
                    }}
                  >
                    <img src={restoreIcon} alt="Revert icon" />
                    <p>Restore Original</p>
                  </button>
                </div>
                <div>
                  <button
                    className="transparentButton"
                    onClick={(e) => {
                      e.preventDefault();
                      updatePost(
                        "draft",
                        post._id,
                        title,
                        editorRef.current.getContent(),
                        setEditorView,
                        setRecoveryData,
                        setPostListState,
                        setEditorState,
                      );
                    }}
                  >
                    <img src={saveIcon} alt="Save as draft icon" />
                    <p>Save As Draft</p>
                  </button>
                  <button
                    className="transparentButton"
                    onClick={(e) => {
                      e.preventDefault();
                      updatePost(
                        "published",
                        post._id,
                        title,
                        editorRef.current.getContent(),
                        setEditorView,
                        setRecoveryData,
                        setPostListState,
                        setEditorState,
                      );
                    }}
                  >
                    <img src={postIcon} alt="Post icon" />
                    <p>Post</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default PostEditor;
