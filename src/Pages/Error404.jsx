import React from "react";
import photo from "../Assets/Image/Error404.png";
import style from '../SCSS/Error404.module.scss'
import { NavLink } from "react-router-dom";
const Error404 = () => {
  return (
    <div className={style.WrapperError404}>
      <h1>
        Oops, SOmething <br />
        Went Wrong
      </h1>
      <div><img src={photo} /></div>
      <NavLink to='/Home'><button>Return to Homepage</button></NavLink>
    </div>
  );
};
export default Error404;
