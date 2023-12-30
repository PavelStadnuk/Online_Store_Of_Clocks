import React from "react";
import Watch from '../Assets/Image/Watch1.png'
import style from '../SCSS/BuildYourWatchModel.module.scss'
const BuildYourWatchModel = () => {
  return (
    <div className={style.WrapperBuildYourWatchModel}>
      <h1>Build your Watch</h1>
      <div>
        <img src={Watch}/>
        <img />
        <img />
      </div>
      <div className={style.WrapperAboutTheProduct}>
        <h1>About The Product</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
          volutpat tristique metus, nibh massa quam iaculis lectus. A dui nam
          phasellus porttitor nisi. Eget a quam est, eget dictum nisi. Sit donec
          aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci
          risus, velit. Lectus tellus amet Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Accumsan volutpat tristique metus, nibh
          massa quam iaculis lectus. A dui nam phasellus porttitor nisi. Eget a
          quam est, eget dictum nisi. Sit donec aenean vivamus sagittis,
          blandit. Eleifend bibendum aliquet orci risus, velit. Lectus tellus
          amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
          volutpat tristique metus, nibh massa quam iaculis lectus. A dui nam
          phasellus porttitor nisi. Eget a quam est, eget dictum nisi. Sit donec
          aenean vivamus sagittis, blandit. Eleifend bibendum aliquet o
        </p>
      </div>
    </div>
  );
};
export default BuildYourWatchModel;
