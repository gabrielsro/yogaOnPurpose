import "./LogoSlogan.css";

const LogoSlogan = () => {
  return (
    <div className="logoSection">
      <div className="logoContainer">
        <img
          src="https://res.cloudinary.com/drkbr9f2j/image/upload/v1700402117/mainLogo_sd22kf.png"
          alt="Yoga on Purpose logo"
          id="logo"
        />
      </div>
      <div className="slogan">
        <p>Purpose fuels passion</p>
      </div>
    </div>
  );
};
export default LogoSlogan;
