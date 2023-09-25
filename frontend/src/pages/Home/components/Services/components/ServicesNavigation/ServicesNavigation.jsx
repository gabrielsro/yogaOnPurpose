import "./ServicesNavigation.css";
import privateIcon from "../../../../icons/private.svg";
import meditationIcon from "../../../../icons/meditation.svg";
import retreatsIcon from "../../../../icons/retreats.svg";
import soundIcon from "../../../../icons/sound.svg";
import workshopIcon from "../../../../icons/workshop.svg";

const ServicesNavigation = ({ parent }) => {
  return (
    <div>
      {parent !== "home" && (
        <div className="servicesText">
          <p>You might also be interested in:</p>
        </div>
      )}
      <ul className="servicesLinks">
        {parent !== "privateLessons" && (
          <li>
            <a href="#privateLessons">
              <img src={privateIcon} alt="Private lessons icon" />
              <p>Private Lessons</p>
            </a>
          </li>
        )}
        {parent !== "meditation" && (
          <li>
            <a href="#meditation">
              <img src={meditationIcon} alt="Meditation icon" />
              <p>Meditation</p>
            </a>
          </li>
        )}
        {parent !== "yogaRetreats" && (
          <li>
            <a href="#yogaRetreats">
              <img src={retreatsIcon} alt="Retreats icon" />
              <p>Retreats</p>
            </a>
          </li>
        )}
        {parent !== "soundBaths" && (
          <li>
            <a href="#soundBaths">
              <img src={soundIcon} alt="Sound baths icon" />
              <p>Sound Baths</p>
            </a>
          </li>
        )}
        {parent !== "yogaWorkshops" && (
          <li>
            <a href="#yogaWorkshops">
              <img src={workshopIcon} alt="Sound baths icon" />
              <p>Workshops</p>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
export default ServicesNavigation;
