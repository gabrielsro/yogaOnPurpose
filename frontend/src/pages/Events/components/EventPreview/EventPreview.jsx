import "./EventPreview.css";
import dateFormatter from "../../../../javascripts/dateFormatter";
import locationIcon from "./icons/location1.svg";
import dateIcon from "./icons/calendar1.svg";
import { Link } from "react-router-dom";

const EventPreview = ({ event }) => {
  console.log(Math.min(window.innerWidth, 900));
  return (
    <li className="eventCard">
      <Link to={`/viewEvent/${event._id}`}>
        <div className="eventCardImage">
          {!event.mainImage && (
            <div className="eventCardImagePlaceholder"></div>
          )}
          {event.mainImage && (
            <img
              src={`https://res.cloudinary.com/drkbr9f2j/image/upload/c_fill,h_200,w_${Math.min(
                window.innerWidth,
                900,
              )}/v1696465311/${event.mainImage}`}
              alt={`${event.name} main pic`}
            />
          )}
        </div>
        <div className="eventCardTitle">
          <p>{event.name}</p>
        </div>
        <div className="eventCardBasics">
          <div className="eventCardLocation">
            <div>
              <img src={locationIcon} alt="Location icon" />
            </div>
            <div>
              <p>{/https/.test(event.location) ? "link" : event.location}</p>
            </div>
          </div>
          <div className="eventCardDates">
            <div>
              <img src={dateIcon} alt="Date icon" />
            </div>
            <div>
              <p>{`Starts: ${dateFormatter(event.dateStart)}`}</p>
              <p>{`Ends: ${dateFormatter(event.dateEnd)}`}</p>
            </div>
          </div>
        </div>
        <div className="eventCardFooter">
          <p>Organized by:</p>
          {event.organizers.map((organizer) => (
            <p
              key={organizer._id}
            >{`${organizer.firstName} ${organizer.lastName}`}</p>
          ))}
        </div>
      </Link>
    </li>
  );
};
export default EventPreview;
