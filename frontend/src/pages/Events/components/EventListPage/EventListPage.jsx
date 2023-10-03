import "./EventListPage.css";
import EventPreview from "../EventPreview";

const EventListPage = ({ eventList }) => {
  return (
    <ul className="eventListPage">
      {eventList.map((event) => (
        <EventPreview key={event._id} event={event} />
      ))}
    </ul>
  );
};
export default EventListPage;
