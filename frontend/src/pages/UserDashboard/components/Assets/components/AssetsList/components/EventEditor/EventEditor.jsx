import "./EventEditor.css";
import BundledEditor from "../../../../../../../../components/BundledEditor";
import saveIcon from "../../../../icons/save.svg";
import postIcon from "../../../../icons/publish.svg";
import restoreIcon from "../../../../icons/rewind.svg";
import editorConfig from "./javascripts/editorConfig";
import { useRef, useState } from "react";
import dateConverter from "./javascripts/dateConverter";
import updateEvent from "./javascripts/updateEvent";
import Loading from "../../../../../Loading";
import Modal from "../../../../../../../../components/Modal";
import SuccessPage from "../../../../../../../SuccessPage";
import Error from "../../../../../Error";

const EventEditor = ({ event, setEventListState }) => {
  const editorRef = useRef(null);

  const [editorName, setEditorName] = useState(event.name ? event.name : "");
  const [startDate, setStartDate] = useState(dateConverter(event.dateStart));
  const [endDate, setEndDate] = useState(dateConverter(event.dateEnd));
  const [location, setLocation] = useState(event.location);
  const [mainImage, setMainImage] = useState(undefined);
  const [secondaryImage, setSecondaryImage] = useState(undefined);
  const [editorState, setEditorState] = useState("original");
  const [editorStatus, setEditorStatus] = useState({ status: "loaded" });
  const [recoveryContent, setRecoveryContent] = useState(undefined);

  return (
    <div>
      {editorStatus.status == "loading" && (
        <Modal>
          <Loading />
        </Modal>
      )}
      {editorStatus.status == "success" && (
        <Modal>
          <SuccessPage message={"Changes applied successfully"} />
        </Modal>
      )}
      {editorStatus.status == "error" && (
        <Modal>
          <Error
            message={"We couldn't process your request. Please try again later"}
          />
        </Modal>
      )}
      {editorStatus.status == "loaded" && (
        <div className="eventEditorWrapper">
          <form
            action=""
            className="eventEditorForm"
            id={`eventEditorForm${event._id}`}
          >
            <label htmlFor="eventEditorName">Name</label>
            <input
              type="text"
              id="eventEditorName"
              value={editorName}
              onChange={(e) => {
                setEditorName(e.target.value);
                editorState !== "written" && setEditorState("written");
              }}
            />
            <label htmlFor="eventEditorStartDate">Starting date</label>
            <input
              type="datetime-local"
              id="eventEditorStartDate"
              value={startDate}
              onChange={(e) => {
                editorState !== "written" && setEditorState("written");
                setStartDate(e.target.value);
              }}
            />
            <label htmlFor="eventEditorFinishDate">Finishing date</label>
            <input
              type="datetime-local"
              id="eventEditorFinishDate"
              value={endDate}
              onChange={(e) => {
                editorState !== "written" && setEditorState("written");
                setEndDate(e.target.value);
              }}
            />
            <label htmlFor="eventEditorLocation">Location</label>
            <input
              type="text"
              id="eventEditorLocation"
              value={location}
              onChange={(e) => {
                editorState !== "written" && setEditorState("written");
                setLocation(e.target.value);
              }}
            />
            <label htmlFor="eventEditorDescription">Description</label>
            <BundledEditor
              init={editorConfig}
              initialValue={
                recoveryContent
                  ? recoveryContent
                  : event.description
                  ? event.description
                  : ""
              }
              onInit={(e, editor) => (editorRef.current = editor)}
              onEditorChange={() => {
                editorState !== "written" && setEditorState("written");
              }}
            />
            <div className="currentMainImage under">
              <p>Current main image</p>
              <div>
                {event.mainImage ? (
                  <img
                    src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,w_${
                      window.innerWidth < 900
                        ? Math.floor(window.innerWidth * 0.5)
                        : 500
                    }/v1696457085/${event.mainImage}`}
                    alt="Current mainImage"
                  />
                ) : (
                  <div>No Image</div>
                )}
              </div>
            </div>
            <label htmlFor="eventEditorMainImage under">New main image</label>
            <input
              type="file"
              id="eventEditorMainImage"
              onChange={(e) => {
                setMainImage(e.target);
                editorState !== "written" && setEditorState("written");
              }}
            />
            <div className="currentSecondaryImage">
              <p>Current secondary image</p>
              <div>
                {event.secondaryImage ? (
                  <img
                    src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,w_${
                      window.innerWidth < 900
                        ? Math.floor(window.innerWidth * 0.67)
                        : 500
                    }/v1696457085/${event.secondaryImage}`}
                    alt="Current secondaryImage"
                  />
                ) : (
                  <div>No Image</div>
                )}
              </div>
            </div>
            <label htmlFor="eventEditorSecondaryImage">
              New secondary image
            </label>
            <input
              type="file"
              id="eventEditorSecondaryImage"
              onChange={(e) => {
                setSecondaryImage(e.target);
                editorState !== "written" && setEditorState("written");
              }}
            />
          </form>
          <div className="eventEditorMessages">
            {editorStatus.error && (
              <div className="eventEditorErrorMessage">
                <p>Your changes were not applied. Please try again later</p>
              </div>
            )}
          </div>
          {editorState == "written" && (
            <div className="eventEditorControls">
              <div>
                <button
                  className="transparentButton"
                  onClick={(e) => {
                    e.preventDefault();
                    setEditorName(event.name ? event.name : "");
                    setStartDate(dateConverter(event.dateStart));
                    setEndDate(dateConverter(event.dateEnd));
                    setLocation(event.location);
                    setMainImage("");
                    setSecondaryImage("");
                    editorRef.current &&
                      editorRef.current.setContent(
                        event.description ? event.description : "",
                      );
                    setEditorState("original");
                    setEditorStatus({ status: "loaded" });
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
                    updateEvent(
                      event._id,
                      "draft",
                      setEditorStatus,
                      editorName,
                      setEditorName,
                      startDate,
                      setStartDate,
                      endDate,
                      setEndDate,
                      location,
                      setLocation,
                      mainImage,
                      secondaryImage,
                      editorRef.current.getContent(),
                      setEventListState,
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
                    updateEvent(
                      event._id,
                      "published",
                      setEditorStatus,
                      editorName,
                      setEditorName,
                      startDate,
                      setStartDate,
                      endDate,
                      setEndDate,
                      location,
                      setLocation,
                      mainImage,
                      secondaryImage,
                      editorRef.current.getContent(),
                      setEventListState,
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
export default EventEditor;
