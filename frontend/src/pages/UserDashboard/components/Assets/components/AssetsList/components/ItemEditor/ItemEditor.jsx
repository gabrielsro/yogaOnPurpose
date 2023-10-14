import "./ItemEditor.css";
import { useState, useRef } from "react";
import BundledEditor from "../../../../../../../../components/BundledEditor";
import saveIcon from "../../../../icons/save.svg";
import postIcon from "../../../../icons/publish.svg";
import restoreIcon from "../../../../icons/rewind.svg";
import editorConfig from "./javascripts/editorConfig";
import noImageIcon from "../../../../../../../ItemViewer/icons/ufo.svg";
import updateItem from "./javascripts/updateItem";
import Modal from "../../../../../../../../components/Modal";
import LoadingPage from "../../../../../../../LoadingPage";
import SuccessPage from "../../../../../../../SuccessPage";
import Error from "../../../../../Error";

const ItemEditor = ({ item, setItemsListState }) => {
  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState({ status: "loaded" });
  const [editorStatus, setEditorStatus] = useState("original");
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [recoveryContent, setRecoveryContent] = useState(undefined);
  const [image1, setImage1] = useState(undefined);
  const [image2, setImage2] = useState(undefined);
  const [image3, setImage3] = useState(undefined);
  const [image4, setImage4] = useState(undefined);
  const [image5, setImage5] = useState(undefined);

  return (
    <div>
      {editorState.status == "loading" && (
        <Modal>
          <LoadingPage />
        </Modal>
      )}
      {editorState.status == "success" && (
        <Modal>
          <SuccessPage message={"Changes applied successfully"} />
        </Modal>
      )}
      {editorState.status == "error" && (
        <Modal>
          <Error
            message={"We couldn't apply your changes. Please try again later"}
          />
        </Modal>
      )}
      {editorState.status == "loaded" && (
        <div>
          <form action="" className="itemEditorForm">
            <label htmlFor="itemEditorName">Name</label>
            <input
              type="text"
              id="itemEditorName"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                editorStatus == "original" && setEditorStatus("written");
              }}
            />
            <label htmlFor="itemEditorPrice">Price</label>
            <input
              type="text"
              id="itemEditorPrice"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                editorStatus == "original" && setEditorStatus("written");
              }}
            />
            <label htmlFor="itemEditorDescription">Description</label>
            <BundledEditor
              init={editorConfig}
              initialValue={
                recoveryContent
                  ? recoveryContent
                  : item.description
                  ? item.description
                  : ""
              }
              onInit={(e, editor) => (editorRef.current = editor)}
              onEditorChange={() => {
                editorStatus == "original" && setEditorStatus("written");
              }}
            />
            <fieldset>
              <legend>Image 1</legend>
              <div className="itemEditorCurrentImage">
                <div className="itemEditorCurrentImageContainer">
                  {item.pictures.filter((p) => p.position == 0)[0] ? (
                    <div className="currentImage">Current image</div>
                  ) : (
                    <div className="currentImage">No Image</div>
                  )}
                  {item.pictures.filter((p) => p.position == 0)[0] ? (
                    <img
                      src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,w_300/v1696457085/${
                        item.pictures.filter((p) => p.position == 0)[0].cdnId
                      }`}
                      alt="Item pic"
                    />
                  ) : (
                    <img src={noImageIcon} alt="No item pic" />
                  )}
                </div>
              </div>
              <div className="itemEditorNewImage">
                <label htmlFor="itemEditorImage1">New image 1</label>
                <input
                  type="file"
                  id="itemEditorImage1"
                  name="image1"
                  onChange={(e) => {
                    setImage1(e.target);
                    editorStatus == "original" && setEditorStatus("written");
                  }}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Image 2</legend>
              <div className="itemEditorCurrentImage">
                <div className="itemEditorCurrentImageContainer">
                  {item.pictures.filter((p) => p.position == 1)[0] ? (
                    <div className="currentImage">Current image</div>
                  ) : (
                    <div className="currentImage">No Image</div>
                  )}
                  {item.pictures.filter((p) => p.position == 1)[0] ? (
                    <img
                      src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,w_300/v1696457085/${
                        item.pictures.filter((p) => p.position == 1)[0].cdnId
                      }`}
                      alt="Item pic"
                    />
                  ) : (
                    <img src={noImageIcon} alt="No item pic" />
                  )}
                </div>
              </div>
              <div className="itemEditorNewImage">
                <label htmlFor="itemEditorImage2">New image 2</label>
                <input
                  type="file"
                  id="itemEditorImage2"
                  name="image2"
                  onChange={(e) => {
                    setImage2(e.target);
                    editorStatus == "original" && setEditorStatus("written");
                  }}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Image 3</legend>
              <div className="itemEditorCurrentImage">
                <div className="itemEditorCurrentImageContainer">
                  {item.pictures.filter((p) => p.position == 2)[0] ? (
                    <div className="currentImage">Current image</div>
                  ) : (
                    <div className="currentImage">No Image</div>
                  )}
                  {item.pictures.filter((p) => p.position == 2)[0] ? (
                    <img
                      src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,w_300/v1696457085/${
                        item.pictures.filter((p) => p.position == 2)[0].cdnId
                      }`}
                      alt="Item pic"
                    />
                  ) : (
                    <img src={noImageIcon} alt="No item pic" />
                  )}
                </div>
              </div>
              <div className="itemEditorNewImage">
                <label htmlFor="itemEditorImage3">New image 3</label>
                <input
                  type="file"
                  id="itemEditorImage3"
                  name="image3"
                  onChange={(e) => {
                    setImage3(e.target);
                    editorStatus == "original" && setEditorStatus("written");
                  }}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Image 4</legend>
              <div className="itemEditorCurrentImage">
                <div className="itemEditorCurrentImageContainer">
                  {item.pictures.filter((p) => p.position == 3)[0] ? (
                    <div className="currentImage">Current image</div>
                  ) : (
                    <div className="currentImage">No Image</div>
                  )}
                  {item.pictures.filter((p) => p.position == 3)[0] ? (
                    <img
                      src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,w_300/v1696457085/${
                        item.pictures.filter((p) => p.position == 3)[0].cdnId
                      }`}
                      alt="Item pic"
                    />
                  ) : (
                    <img src={noImageIcon} alt="No item pic" />
                  )}
                </div>
              </div>
              <div className="itemEditorNewImage">
                <label htmlFor="itemEditorImage4">New image 4</label>
                <input
                  type="file"
                  id="itemEditorImage4"
                  name="image4"
                  onChange={(e) => {
                    setImage4(e.target);
                    editorStatus == "original" && setEditorStatus("written");
                  }}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Image 5</legend>
              <div className="itemEditorCurrentImage">
                <div className="itemEditorCurrentImageContainer">
                  {item.pictures.filter((p) => p.position == 4)[0] ? (
                    <div className="currentImage">Current image</div>
                  ) : (
                    <div className="currentImage">No Image</div>
                  )}
                  {item.pictures.filter((p) => p.position == 4)[0] ? (
                    <img
                      src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,w_300/v1696457085/${
                        item.pictures.filter((p) => p.position == 4)[0].cdnId
                      }`}
                      alt="Item pic"
                    />
                  ) : (
                    <img src={noImageIcon} alt="No item pic" />
                  )}
                </div>
              </div>
              <div className="itemEditorNewImage">
                <label htmlFor="itemEditorImage5">New image 5</label>
                <input
                  type="file"
                  id="itemEditorImage5"
                  name="image5"
                  onChange={(e) => {
                    setImage5(e.target);
                    editorStatus == "original" && setEditorStatus("written");
                  }}
                />
              </div>
            </fieldset>
          </form>
          <div className="itemEditorMessages">
            {editorState.error && (
              <div>
                <p>Changes not applied. Please try again later</p>
              </div>
            )}
          </div>
          {editorStatus == "written" && (
            <div className="itemEditorControls">
              <div>
                <button
                  className="transparentButton"
                  onClick={(e) => {
                    e.preventDefault();
                    setName(item.name);
                    setPrice(item.price);
                    editorRef.current &&
                      editorRef.current.setContent(
                        item.description ? item.description : "",
                      );
                    setImage1("");
                    setImage2("");
                    setImage3("");
                    setImage4("");
                    setImage5("");
                    setEditorStatus("original");
                  }}
                >
                  <img src={restoreIcon} alt="Restore icon" />
                  <p>Restore Original</p>
                </button>
              </div>
              <div>
                <button
                  className="transparentButton"
                  onClick={(e) => {
                    e.preventDefault();
                    updateItem(
                      item._id,
                      "draft",
                      setEditorState,
                      image1,
                      image2,
                      image3,
                      image4,
                      image5,
                      name,
                      price,
                      editorRef.current.getContent(),
                      setItemsListState,
                      setName,
                      setPrice,
                      setRecoveryContent,
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
                    updateItem(
                      item._id,
                      "published",
                      setEditorState,
                      image1,
                      image2,
                      image3,
                      image4,
                      image5,
                      name,
                      price,
                      editorRef.current.getContent(),
                      setItemsListState,
                      setName,
                      setPrice,
                      setRecoveryContent,
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
      )}
    </div>
  );
};
export default ItemEditor;
