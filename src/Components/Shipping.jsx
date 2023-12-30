import React from "react";
import style from "../SCSS/Shipping.module.scss";
const Shipping = ({AddShipping}) => {
  return (
    <div className={style.WrapShipping}>
      <h3>Shipping</h3>
      <div  className={style.WrapUPS}>
        <input type="radio" onChange={() => AddShipping(49.99)} />
        <div>
          <h3>UPS Express</h3>
          <p>UPS Express 2-3 working days</p>
        </div>
        <div className={style.PriceShipping}>$49.99</div>
      </div>
      <div  className={style.WrapUPS}>
        <input type="radio" onChange={() => AddShipping(0)} />
        <div>
          <h3>UPS Standard</h3>
          <p>UPS Express 2-3 working days</p>
        </div>
        <div className={style.PriceShipping}>Free</div>
      </div>
    </div>
  );
};
export default Shipping;
