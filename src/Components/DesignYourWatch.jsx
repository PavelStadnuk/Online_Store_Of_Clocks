import React from "react";
import style from "../SCSS/DesignYourWatch.module.scss";
const DesignYourWatch = () => {
  return (
    <div className={style.WrapperDesignYourWatch}>
      <div className={style.WrapperMapDesign}>
        <h1>Design your Watch</h1>
        <div className={style.MapDesignNumber}>
          <div className={style.Wrap}>
            <div className={style.OuterCircle}>
              <span>1</span>
            </div>
            <p>Case Color</p>
          </div>
          <div className={style.Wrap}>
            <div className={style.OuterCircle}>
              <span>2</span>
            </div>
            <p>Dial Design</p>
          </div>
          <div className={style.Wrap}>
            <div className={style.OuterCircle}>
              <span>3</span>
            </div>
            <p>Dial Color</p>
          </div>
          <div className={style.Wrap}>
            {" "}
            <div className={style.OuterCircle}>
              <span>4</span>
            </div>
            <p>Strap Design</p>
          </div>
        </div>
        <button>Design Your Watch</button>
      </div>
      <div className={style.WrapperOurMission}>
        <div className={style.WrapperOurMissionImage}></div>
        <div  className={style.WrapperOurMissionText}>
          <div className={style.WrapperOurMissionTextBox}>
          <h1>Our Mission</h1>
          <p>
            We have invested 6 year of our lifes to invent a new technology of
            production a 3D dials with quality of wristwatch industry. All what
            we need to turn on our imagination on maximum.<br/>
            <span>
              {" "}
              We love Out-of-the-box designs and believe there are many people
              who thinks the same.
            </span>
          </p>
          <button>Design Your Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesignYourWatch;
