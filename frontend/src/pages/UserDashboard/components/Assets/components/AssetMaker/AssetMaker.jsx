import "./AssetMaker.css";
import { useState } from "react";
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

const AssetMaker = ({ assetType, loggedUser, setDashboardState }) => {
  const [makerState, setMakerState] = useState({ status: "idle" });
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
                  onInput={() => postMakerCheker(setMakerState)}
                />
                <label htmlFor="postContent">Content</label>
                <BundledEditor
                  //   onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue="<p>This is the initial content of the editor.</p>"
                  init={{
                    height: 500,
                    selector: "textarea",
                    menubar: false,
                    plugins: [
                      "advlist",
                      "anchor",
                      "autolink",
                      "help",
                      "image",
                      "link",
                      "lists",
                      "searchreplace",
                      "table",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | " +
                      "bold italic forecolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
                <textarea
                  name="content"
                  id="postContent"
                  className="postMaker"
                  onInput={() => postMakerCheker(setMakerState)}
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
                <textarea
                  type="text"
                  id="eventDescription"
                  name="description"
                  onInput={() => eventMakerChecker(setMakerState)}
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
                <textarea name="description" id="itemDescription" />
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
                        submitPost("draft", loggedUser, setDashboardState);
                      assetType == "event" &&
                        submitEvent("draft", loggedUser, setDashboardState);
                      assetType == "item" &&
                        submitItem("draft", loggedUser, setDashboardState);
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
                        submitPost("published", loggedUser, setDashboardState);
                      assetType == "event" &&
                        submitEvent("published", loggedUser, setDashboardState);
                      assetType == "item" &&
                        submitItem("published", loggedUser, setDashboardState);
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
