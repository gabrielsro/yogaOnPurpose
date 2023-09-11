import "./Schedule.css";
import scheduleIcon from "./icons/calendar.svg";

const Schedule = () => {
  return (
    <div className="dashCategory">
      <button className="transparentButton">
        <img
          src={scheduleIcon}
          alt="Schedule icon"
          className="dashCategoryIcon"
        />
        <h2>Schedule</h2>
      </button>
    </div>
  );
};
export default Schedule;
