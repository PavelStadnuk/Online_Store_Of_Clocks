import React from "react";
import User from "../Assets/Image/User.png";
import Basket from "../Assets/Image/Basket.png";
import style from "../SCSS/Header.module.scss";
import { NavLink } from "react-router-dom";
import YourCart from "./YourCart";
import { useSelector } from "react-redux";
const Header = () => {
  const date=useSelector((state)=>state.cart.items)
  const totalPrice=useSelector((state)=>state.cart.totalPrice)
  const pages = ["Home", "Delivery", "Jewelry", "Brand", "Watches"];
  const [isUserMenuVisible, setUserMenuVisible] = React.useState(false);
  const [isYourCartVisible, setYourCartVisible] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const toggleUserMenu = () => {
    setUserMenuVisible(!isUserMenuVisible);
  };
  return (
    <div className={style.WrapperHeader}>
      <div className={style.HeaderLogo}>
        <h2>VOLUMENZEIT</h2>
        <h6>VOLUMETRIC WRIST WATCHES</h6>
      </div>
      <div className={style.WrapNavigation}>
        <ul>
          {pages.map((value, index) => {
            return (
              <NavLink to={`/${value}`} key={index}><li
                key={index}
                className={activeCategory === index ? style.active : null}
                onClick={()=>setActiveCategory(index)}
              >
                {value}
              </li></NavLink>
            );
          })}
        </ul>{" "}
        <NavLink to='/BuildYourWatch'><button>Design you watch</button></NavLink>{" "}
        <div className={style.WrapImages}>
          <img src={User}  onClick={toggleUserMenu}/>
          {isUserMenuVisible && (
          <div className={style.UserMenu}>
            <NavLink to='/LoginCreateAccount/Login'><button className={style.Login} onClick={toggleUserMenu}>Login</button></NavLink>
            <NavLink to='/LoginCreateAccount/SignUp'><button className={style.SignUp} onClick={toggleUserMenu}>Sign Up</button></NavLink>
          </div>
        )}
          <img src={Basket} onClick={()=>setYourCartVisible(true)} />
          {isYourCartVisible&&(<YourCart date={date} setYourCartVisible={setYourCartVisible} totalPrice={totalPrice}/>)}
        </div>
      </div>
    </div>
  );
};
export default Header;
