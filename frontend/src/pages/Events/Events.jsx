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
      {eventsState.status == "loaded" && (
        <div>
          <EventOptionsPage />
          <EventListPage eventList={eventsState.result} />
        </div>
      )}
    </div>
  );
};
export default Events;
