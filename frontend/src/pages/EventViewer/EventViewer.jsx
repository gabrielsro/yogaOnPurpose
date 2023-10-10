import "./EventViewer.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import Comments from "../../components/Comments";
import getEvent from "./javascripts/getEvent";
import dateFormatter from "../../javascripts/dateFormatter";
import locationIcon from "../Events/components/EventPreview/icons/location1.svg";
import calendarIcon from "../Events/components/EventPreview/icons/calendar1.svg";
import userIcon from "../UserDashboard/components/Users/components/UserPreview/icons/user.svg";

const EventViewer = () => {
  const [eventState, setEventState] = useState({ status: "loading" });
  const { eventId } = useParams();
  useEffect(() => {
    getEvent(eventId, setEventState);
  }, [eventId]);
  return (
    <div className="page">
      {eventState.status == "loading" && <LoadingPage />}
      {eventState.status == "error" && (
        <ErrorPage message={eventState.message} />
      )}
      {eventState.status == "loaded" && (
        <div>
          <div className="pageControls">
            <Link to="/events" className="returnLink">
              Return
            </Link>
          </div>
          <div className="eventViewerWrapper">
            <div className="eventMainImagePage">
              {eventState.result.mainImage && (
                <img
                  src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,w_${Math.min(
                    window.innerWidth,
                    900,
                  )}/v1696465311/${eventState.result.mainImage}`}
                  alt={`${eventState.result.name} pic`}
                />
              )}
            </div>
            <div className="eventTitlePage">
              <h1>{eventState.result.name}</h1>
            </div>
            <div className="eventBasicsPage">
              <div>
                <div className="eventLocationPage">
                  <img src={locationIcon} alt="Location icon" />
                  <p>{eventState.result.location}</p>
                </div>
                <div className="eventDatesPage">
                  <img src={calendarIcon} alt="Dates icon" />
                  <div>
                    <p>{`From: ${dateFormatter(
                      eventState.result.dateStart,
                      "post",
                    )}`}</p>
                    <p>{`To: ${dateFormatter(
                      eventState.result.dateEnd,
                      "post",
                    )}`}</p>
                  </div>
                </div>
              </div>
              <div className="eventOrganizersPage">
                <p>Organized by:</p>
                <ul>
                  {eventState.result.organizers.map((organizer) => (
                    <li key={organizer._id}>
                      {organizer.profilePic && (
                        <img
                          src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,g_face,w_60,h_60,r_max/v1696465311/${organizer.profilePic}`}
                          alt="Organizer profile pic"
                        />
                      )}
                      {!organizer.profilePic && (
                        <img
                          src={userIcon}
                          alt="Default organizer profile pic"
                        />
                      )}
                      <p>{`${organizer.firstName} ${organizer.lastName}`}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="eventMediaPage"></div>
            <div
              className="eventDescriptionPage"
              dangerouslySetInnerHTML={{
                __html: eventState.result.description,
              }}
            ></div>
            <Comments assetType={"event"} assetId={eventId} />
          </div>
        </div>
      )}
    </div>
  );
};
export default EventViewer;
