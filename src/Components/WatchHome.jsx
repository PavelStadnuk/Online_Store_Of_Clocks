import React from "react";
import style from '../SCSS/WatchHome.module.scss'
import Slick from "./Slick";
import date from '../Redux/data'

const WatchHome = () => {
  
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}
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
