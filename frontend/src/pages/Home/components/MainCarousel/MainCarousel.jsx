import "./MainCarousel.css";
import img1 from "../../images/yoga11.jpg";
import img2 from "../../images/yoga10.jpg";
import img4 from "../../images/yoga4.jpg";
import img5 from "../../images/yoga5.jpg";
import img6 from "../../images/yoga6.jpg";
import img9 from "../../images/yoga9.jpg";

const MainCarousel = () => {
  return (
    <div className="valueProposition">
      <div id="valuePropositionText">
        <h2>Making Yoga and Mindfulness accessible to everyone!</h2>
        <h2>In-person, online and outdoors</h2>
        <h2>RYI 275 hr</h2>
      </div>
      <div id="valuePropositionCarousel">
        <ul>
          <li className="slide activeSlide">
            <img src={img6} alt="Yoga #6" />
          </li>
          <li className="slide">
            <img src={img9} alt="Yoga #9" />
          </li>
          <li className="slide">
            <img src={img4} alt="Yoga #4" />
          </li>
          <li className="slide">
            <img src={img1} alt="Yoga #1" />
          </li>
          <li className="slide">
            <img src={img2} alt="Yoga #2" />
          </li>
          <li className="slide">
            <img src={img5} alt="Yoga #5" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MainCarousel;
