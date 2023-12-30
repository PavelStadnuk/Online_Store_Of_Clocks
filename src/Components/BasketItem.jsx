import React from "react";
import style from "../SCSS/BasketItem.module.scss";
import Shipping from "./Shipping";

const BasketItem = ({ date, totalPrice,ShippingP,AddShipping }) => {
  const Price = totalPrice + ShippingP ;
  console.log(ShippingP)
  return (
    <div className={style.WrapperItemShipping}>
    <div className={style.WrapBasketItem}>
      {date.map((item, index) => {
        return (
          <div className={style.WrapperItem} key={item.id}>
            <div className={style.WrapImgItem}>
              <img src={item.photo} alt={item.name} />
            </div>
            <div className={style.WrapperYourCartAbout}>
              <h1>Urban Eagle</h1>
              <div>{item.name}</div>
              <h1>${item.price}</h1>
              <div className={style.WrapColor}>
                <span style={{ backgroundColor: item.CaseColor }} />
                <p>Case Color</p>
                <span style={{ backgroundColor: item.StrapColors }} />
                <p>Strap Colors</p>
              </div>
            </div>
          </div>
        );
      })}
      <button><p>{Price}</p><p>Grand Total</p></button>
      </div>
      <Shipping AddShipping={AddShipping}/>
    </div>
  );
};
export default BasketItem;
