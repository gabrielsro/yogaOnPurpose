import "./EventViewer.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import getEvent from "./javascripts/getEvent";
import dateFormatter from "../../javascripts/dateFormatter";

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
          <div className="eventMainImagePage"></div>
          <div className="eventTitlePage">
            <h1>{eventState.result.name}</h1>
          </div>
          <div className="eventBasicsPage">
            <div className="eventLocationPage">
              <p>{eventState.result.location}</p>
            </div>
            <div className="eventDatesPage">
              <p>{dateFormatter(eventState.result.dateStart, "post")}</p>
              <p>{dateFormatter(eventState.result.dateEnd, "post")}</p>
            </div>
            <div className="eventOrganizersPage">
              <p>Organized by:</p>
              <ul>
                {eventState.result.organizers.map((organizer) => (
                  <li
                    key={organizer._id}
                  >{`${organizer.firstName} ${organizer.lastName}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="eventMediaPage"></div>
          <div
            className="eventDescriptionPage"
            dangerouslySetInnerHTML={{ __html: eventState.result.description }}
          ></div>
        </div>
      )}
    </div>
  );
};
export default EventViewer;
