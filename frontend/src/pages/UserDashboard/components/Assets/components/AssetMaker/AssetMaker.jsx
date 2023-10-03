import "./AssetMaker.css";
import { useState, useRef } from "react";
import addIcon from "../../icons/add.svg";
import discardIcon from "../../icons/discard.svg";
import publishIcon from "../../icons/publish.svg";
import saveIcon from "../../icons/save.svg";
import postMakerCheker from "./javascripts/postMakerCheker";
import eventMakerChecker from "./javascripts/eventMakerChecker";
import itemMakerChecker from "./javascripts/itemMakerChecker";
import submitPost from "./javascripts/submitPost";
import submitEvent from "./javascripts/submitEvent";
import submitItem from "./javascripts/submitItem";
import BundledEditor from "../../../../../../components/BundledEditor";
import editorConfig from "./javascripts/editorConfig";

const AssetMaker = ({ assetType, loggedUser, setAssetState }) => {
  const [makerState, setMakerState] = useState({ status: "idle" });
  const postEditorRef = useRef(null);
  const eventEditorRef = useRef(null);
  const itemEditorRef = useRef(null);
  return (
    <div className="postManager">
      <div className="postManagerContents">
        {makerState.status == "idle" && (
          <button
            className="transparentButton addAsset"
            onClick={() => setMakerState({ status: "ready" })}
          >
            <img src={addIcon} alt="Add icon" />
            {assetType == "post" && <p>Add New Post</p>}
            {assetType == "event" && <p>Add New Event</p>}
            {assetType == "item" && <p>Add New Item</p>}
          </button>
        )}
        {makerState.status !== "idle" && (
          <form action="" id="makerForm">
            {assetType == "post" && (
              <div className="additionalFields">
                <label htmlFor="postTitle">Title</label>
                <input
                  type="text"
                  id="postTitle"
                  name="title"
                  onInput={() => postMakerCheker(setMakerState, postEditorRef)}
                />
                <label htmlFor="postContent">Content</label>
                <BundledEditor
                  init={editorConfig}
                  onInit={(e, editor) => (postEditorRef.current = editor)}
                  onDirty={() => setMakerState("written")}
                />
              </div>
            )}
            {assetType == "event" && (
              <div className="additionalFields">
                <label htmlFor="eventName">Name</label>
                <input
                  type="text"
                  name="name"
                  id="eventName"
                  onInput={() => eventMakerChecker(setMakerState)}
                />
                <label htmlFor="eventDate">Starting date</label>
                <input
                  type="datetime-local"
                  name="dateStart"
                  id="eventDate"
                  onInput={() => eventMakerChecker(setMakerState)}
                />
                <label htmlFor="eventDateFinish">Finishing date</label>
                <input
                  type="datetime-local"
                  name="dateEnd"
                  id="eventDateFinish"
                  onInput={() => eventMakerChecker(setMakerState)}
                />
                <label htmlFor="eventLocation">Location</label>
                <input
                  type="text"
                  id="eventLocation"
                  name="location"
                  onInput={() => eventMakerChecker(setMakerState)}
                />
                <label htmlFor="eventDescription">Description</label>
                <BundledEditor
                  init={editorConfig}
                  onInit={(e, editor) => (eventEditorRef.current = editor)}
                  onDirty={() => setMakerState("written")}
                />
                <label htmlFor="mainImage">Main image</label>
                <input
                  type="file"
                  id="mainImage"
                  className="imageInput"
                  name="mainImage"
                  accept=".jpg, .jpeg, .png"
                />
                <label htmlFor="secondaryImage">Secondary image</label>
                <input
                  type="file"
                  id="secondaryImage"
                  className="imageInput"
                  name="secondaryImage"
                  accept=".jpg, .jpeg, .png"
                />
              </div>
            )}
            {assetType == "item" && (
              <div className="additionalFields">
                <label htmlFor="itemName">Name</label>
                <input
                  type="text"
                  id="itemName"
                  name="name"
                  onInput={() => itemMakerChecker(setMakerState)}
                />
                <label htmlFor="itemPrice">Price</label>
                <input
                  type="number"
                  id="itemPrice"
                  name="price"
                  onInput={() => itemMakerChecker(setMakerState)}
                />
                <label htmlFor="itemDescription">Description</label>
                <BundledEditor
                  init={editorConfig}
                  onInit={(e, editor) => (itemEditorRef.current = editor)}
                />
                <label htmlFor="image1">Image 1</label>
                <input type="file" id="image1" name="image1" />
                <label htmlFor="image1">Image 2</label>
                <input type="file" id="image2" name="image2" />
                <label htmlFor="image1">Image 3</label>
                <input type="file" id="image3" name="image3" />
                <label htmlFor="image1">Image 4</label>
                <input type="file" id="image4" name="image4" />
                <label htmlFor="image1">Image 5</label>
                <input type="file" id="image5" name="image5" />
              </div>
            )}
            <div className="postMakerActions">
              {makerState !== "idle" && (
                <button
                  className="transparentButton"
                  onClick={(e) => {
                    e.preventDefault();
                    setMakerState({ status: "idle" });
                  }}
                >
                  <img src={discardIcon} alt="Discard icon" />
                  <p>Discard</p>
                </button>
              )}
              {makerState == "written" && (
                <div className="writtenButtons">
                  <button
                    className="transparentButton"
                    onClick={(e) => {
                      e.preventDefault();
                      assetType == "post" &&
                        submitPost(
                          "draft",
                          loggedUser,
                          setAssetState,
                          postEditorRef,
                        );
                      assetType == "event" &&
                        submitEvent(
                          "draft",
                          loggedUser,
                          setAssetState,
                          eventEditorRef,
                        );
                      assetType == "item" &&
                        submitItem(
                          "draft",
                          loggedUser,
                          setAssetState,
                          itemEditorRef,
                        );
                    }}
                  >
                    <img src={saveIcon} alt="Save icon" />
                    <p>Save as draft</p>
                  </button>
                  <button
                    className="transparentButton"
                    onClick={(e) => {
                      e.preventDefault();
                      assetType == "post" &&
                        submitPost(
                          "published",
                          loggedUser,
                          setAssetState,
                          postEditorRef,
                        );
                      assetType == "event" &&
                        submitEvent(
                          "published",
                          loggedUser,
                          setAssetState,
                          eventEditorRef,
                        );
                      assetType == "item" &&
                        submitItem(
                          "published",
                          loggedUser,
                          setAssetState,
                          itemEditorRef,
                        );
                    }}
                  >
                    <img src={publishIcon} alt="Publish icon" />
                    {assetType == "post" && <p>Post</p>}
                    {assetType == "event" && <p>Publish</p>}
                    {assetType == "item" && <p>Add to Store</p>}
                  </button>
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default AssetMaker;
