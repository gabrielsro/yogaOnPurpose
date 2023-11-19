import "./MainCarousel.css";

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
            <img
              src="https://res.cloudinary.com/drkbr9f2j/image/upload/v1700414213/yoga6_swie4r.jpg"
              alt="Yoga #6"
            />
          </li>
          <li className="slide">
            <img
              src="https://res.cloudinary.com/drkbr9f2j/image/upload/v1700414214/yoga9_dc7edb.jpg"
              alt="Yoga #9"
            />
          </li>
          <li className="slide">
            <img
              src="https://res.cloudinary.com/drkbr9f2j/image/upload/v1700413927/yoga4_qr0rlu.jpg"
              alt="Yoga #4"
            />
          </li>
          <li className="slide">
            <img
              src="https://res.cloudinary.com/drkbr9f2j/image/upload/v1700414214/yoga10_qu7vq1.jpg"
              alt="Yoga #10"
            />
          </li>
          <li className="slide">
            <img
              src="https://res.cloudinary.com/drkbr9f2j/image/upload/v1700414213/yoga11_pvd0fd.jpg"
              alt="Yoga #2"
            />
          </li>
          <li className="slide">
            <img
              src="https://res.cloudinary.com/drkbr9f2j/image/upload/v1700414125/yoga5_mch5o9.jpg"
              alt="Yoga #5"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MainCarousel;
