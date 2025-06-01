import React from "react";
import style from "../SCSS/AboutUs.module.scss";
const AboutUs = () => {
  return (
    <div className={style.WrapperAboutUs}>
      <div className={style.AboutUsText}>
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
          volutpat tristique metus, nibh massa quam iaculis lectus. A dui nam
          phasellus porttitor nisi. Eget a quam est, eget dictum nisi. Sit donec
          aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci
          risus, velit. Lectus tellus amet
        </p>
      </div>
      <div className={style.VideoContainer}>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/FEZz928k3GM"
          frameBorder="0"
          allowFullScreen
          style={{ width: '100%' }}

        />
      </div>
    </div>
  );
};
export default AboutUs;
