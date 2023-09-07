import "./Schedule.css";
import scheduleIcon from "./icons/calendar.svg";

const Schedule = () => {
  return (
    <div className="dashCategory">
      <div>
        <img
          src={scheduleIcon}
          alt="Schedule icon"
          className="dashCategoryIcon"
        />
        <h2>Schedule</h2>
      </div>
    </div>
  );
};
export default Schedule;
