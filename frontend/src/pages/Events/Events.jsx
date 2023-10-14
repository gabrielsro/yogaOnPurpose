import "./Events.css";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import getEvents from "./javascripts/getEvents";
import EventOptionsPage from "./components/EventOptionsPage";
import EventListPage from "./components/EventListPage";

const Events = () => {
  const [eventsState, setEventsState] = useState({
    status: "loading",
    view: "list",
  });

  useEffect(() => {
    getEvents(setEventsState);
  }, []);

  return (
    <div className="page">
      {eventsState.status == "loading" && <LoadingPage />}
      {eventsState.status == "error" && (
        <ErrorPage message={eventsState.message} />
      )}
      {eventsState.status == "loaded" && eventsState.result.length < 1 && (
        <div className="emptyEventsPage">
          <div>
            <p>There are no Events</p>
          </div>
        </div>
      )}
      {eventsState.status == "loaded" && eventsState.result.length > 0 && (
        <div>
          <EventOptionsPage />
          <EventListPage eventList={eventsState.result} />
        </div>
      )}
    </div>
  );
};
export default Events;
