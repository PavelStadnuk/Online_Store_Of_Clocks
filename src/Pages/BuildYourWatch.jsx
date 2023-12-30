import React from "react";
import BuildYourWatchModel from "../Components/BuildYourWatchModel";
import BuildYourWatchParts from "../Components/BuildYourWatchParts";
import style from "../SCSS/BuildYourWatch.module.scss";
import Garantee from "../Components/Garantee";
const BuildYourWatch = () => {
  return (
    <div>
      <div className={style.BuildYourWatchWrap}>
        <BuildYourWatchModel />
        <BuildYourWatchParts />
      </div>
      <Garantee/>
    </div>
  );
};
export default BuildYourWatch;
