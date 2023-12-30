import React from "react";
import style from "../SCSS/Garantee.module.scss";
import Delivery from "../Assets/Image/Delivery.png";
import Money from '../Assets/Image/Money.png'
import Warranty from '../Assets/Image/Warranty.png'
const Garantee = () => {
  const Garanty = [
    {
      name: "72h Delivery Time",
      text: "We Promise delivery time up to 72 hours anywhere in USA",
      photo: Delivery,
    },
    {
      name: "Money Back",
      text: "If product is damaged or something is wrong",
      photo: Money,
    },
    {
      name: "Warrnity",
      text: "We offer 2 years warrnity on every watch custom or pre buit",
      photo: Warranty,
    },
  ];
  return (
    <div className={style.WrapGarantees}>
      {Garanty.map((item) => {
        return (
          <div className={style.WrapGarantee}>
            <div>
              <img src={item.photo} />
            </div>
            <div className={style.WrapGaranteeText}>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Garantee;
