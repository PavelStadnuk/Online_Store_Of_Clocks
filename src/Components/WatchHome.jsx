import React from "react";
import style from '../SCSS/WatchHome.module.scss'
import Slick from "./Slick";
import date from '../Redux/data'

const WatchHome = () => {
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1}
  return (
    <div className={style.WrapperWatchesHome}>
        <div>
      <div>
        <h1>Watches</h1>
        <p>
          Volumenzeit gives you a total of 48 style combinations with 4 dial
          types, 4 dial colors, 3 case colors,<br/> multiple stylish strap
          combinations, and customized engraving options.
        </p>
      </div>
      <Slick date={date} settings={settings}/>
      </div>
      <button>Design Your Watch</button>
    </div>
  );
};
export default WatchHome;
