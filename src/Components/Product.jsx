import React from "react";
import Photo from "../Assets/Image/Photo.png";
import Photo1 from "../Assets/Image/Photo1.png";
import Photo2 from "../Assets/Image/Photo2.png";
import Photo3 from "../Assets/Image/Photo3.png";
import Photo4 from "../Assets/Image/Photo4.png";
import Photo5 from "../Assets/Image/Photo5.png";
import style from "../SCSS/Product.module.scss";
import { useParams } from 'react-router-dom';
const Product = () => {
  const masP = [Photo, Photo1, Photo2, Photo3, Photo4, Photo5];
  const Specifications = {
    Case: "316L Stainless-steel",
    Coating: "Color anodized anti-scratch",
    Glass: "Sapphire Crystal",
    Straps: "22mm Stainless-steel bracelet",
    CaseSize: "42mm",
    CaseColor: "chamfered brush with mirror polish",
    DialColor: "Black Metallic",
    WaterResistance: "5 ATM/50 meters",
    Movement: " Movement: Swiss Parts RONDA 762E",
    InstantaneousRate: " -10/ +20 sec/month",
    StandardBatteryLife: " 10 years",
  };
  const { id } = useParams();
  return (
    <div>
      <div className={style.WrapTextProducts}>
        <h1>Products</h1>
        <p>Products / Product Number {id}</p>
      </div>
      <div className={style.WrapProduct}>
        <div className={style.WrapPhotos}>
          {masP.map((item) => {
            return (
              <div className={style.WrapPhoto}>
                <img src={item} />
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <h2>Urban Eagle</h2>
            <p>Lavander Spark</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              facilisi elementum commodo ipsum. Aenean aenean adipiscing lect
            </p>
          </div>
          <div className={style.Specifications}>
            {Object.keys(Specifications).map((item) => {
              return (
                <div className={style.Specification}>
                  <p>{item}</p>
                  <p>{Specifications[item]}</p>
                </div>
              );
            })}
          </div>
          <div className={style.PriceOrder}>
            $15,800<button>Place an Order</button>
          </div>
          <button className={style.AROnline}>Try on in AR Online</button>
          <button className={style.Design}>Design Your Watch</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
