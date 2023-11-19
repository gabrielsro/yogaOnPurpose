import "./Schedule.css";
import constructionIcon from "./icons/construction.svg";

const Schedule = () => {
  return (
    <div className="page">
      <div className="schedulePageContainer">
        <div className="schedulePageTitle">
          <h1>Under Construction</h1>
        </div>
        <div className="schedulePageImg">
          <img src={constructionIcon} alt="Construction Icon" />
        </div>
      </div>
    </div>
  );
};
export default Schedule;
