import React from "react";
import style from "../SCSS/Features.module.scss";
import style1 from '../SCSS/App.module.scss';
import FeaturesWatchesPhoto from "../Assets/Image/FeaturesWatch.png";
import classnames from 'classnames';
const Features = () => {
  return (
    <div className={style.WrapperFeatures}>
      <h1>Features</h1>
      <div className={style.Features}>
        <div className={style.IndividualStyle}>
          <h5>Individual Style </h5>{" "}
          <p>
            48 style combinations Color shifting Dial Colors 15 Strap options
            Custom Strap Engraving
          </p>
          <span className={classnames(style.IndividualStyleBox, style.cirсleTips)}>
            <span className={style.cirсleTips_middle}>
              <span className={style.cirсleTips_center}></span>
            </span>
          </span>
        </div>
        <div className={style.HighQualityComponents}>
          <h5>High Quality Components </h5>

          <p>
            Case: 316L Stainless-steel Coating: Color anodized anti-scratch
            Glass: Sapphire Crystal Straps: 22mm Stainless-steel bracelet,
            Milanese Mesh bracelet, Leather
          </p>
          <span className={style.HighQualityComponentsBox}>
          <span className={style.cirсleTips_middle}>
              <span className={style.cirсleTips_center}></span>
            </span>
          </span>
        </div>
        <div className={style.FeaturesWatchesPhoto}>
          <img src={FeaturesWatchesPhoto} />
        </div>
        <div className={style.FeaturesText}>
          <h5>Features </h5>

          <p>
            Case Size: 42mm Case Color: Silver, Black, Blue, chamfered brush
            with mirror polish Dial Color: Black Metallic, Color shifting
            Blue-Purple, Green-Purple, Pink-Gold Water Resistance: 5 ATM/50
            meters Straps: Quick release Movement: Swiss Parts RONDA 762E
            Instantaneous rate -10/ +20 sec/month Standard Battery life: 10
            years
          </p>
          <span className={style.FeaturesTextBox}>
          <span className={style.cirсleTips_middle}>
              <span className={style.cirсleTips_center}></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Features;
