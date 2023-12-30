import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import style from "../SCSS/Slick.module.scss";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Redux/Slice/cartSlice";
import BasketWhite from "../Assets/Image/BasketWhite.png";
const Slick = ({ date, settings }) => {
  const dispatch=useDispatch()
  const AddWatch=(item)=>{dispatch(addItemToCart(item))}
  return (
    <div>
      <Slider {...settings}>
        {date.map((element) => {
          return (
            <div className={style.WrapperSlick}>
              <div className={style.WrapperImg}>
                <img src={element.photo} alt="" />
                <div className={style.ContainerOverflow} onClick={()=>AddWatch(element)}>
                <img src={BasketWhite} />
                <p>Order Watch</p>
              </div>
              </div>
              <div className={style.WrapperSlickText}>
              <p>{element.name}</p>
              <h4>${element.price}</h4>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Slick;
