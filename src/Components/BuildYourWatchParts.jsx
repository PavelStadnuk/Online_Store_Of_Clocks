import React from "react";
import style from "../SCSS/BuildYourWatchParts.module.scss";
import Dial from "../Assets/Image/Dial.png";
import Dial1 from "../Assets/Image/Dial1.png";
import Dial2 from "../Assets/Image/Dial2.png";
import Dial3 from "../Assets/Image/Dial3.png";
import Straps from "../Assets/Image/Straps.png";
import Straps1 from "../Assets/Image/Straps1.png";
import Straps2 from "../Assets/Image/Straps2.png";
import Straps3 from "../Assets/Image/Straps3.png";
import Straps4 from "../Assets/Image/Straps4.png";
import Straps5 from "../Assets/Image/Straps5.png";
import Straps6 from "../Assets/Image/Straps6.png";
import Straps7 from "../Assets/Image/Straps7.png";
import Straps8 from "../Assets/Image/Straps8.png";
import Straps9 from "../Assets/Image/Straps9.png";
import Straps10 from "../Assets/Image/Straps10.png";
import Straps11 from "../Assets/Image/Straps11.png";
import Straps12 from "../Assets/Image/Straps12.png";
const BuildYourWatchParts = () => {
  const PartMas = [
    { name: "Case Color", color: ["Black", "White", "blue"] },
    { name: "Dial Design", image: [Dial, Dial1, Dial2, Dial3] },
    { name: "Dial Color", color: ["Black", "White", "blue"] },
    {
      name: "Strap Design",
      image: [
        Straps,
        Straps1,
        Straps2,
        Straps3,
        Straps4,
        Straps5,
        Straps6,
        Straps7,
        Straps8,
        Straps9,
        Straps10,
        Straps11,
        Straps12,
      ],
    },
  ];
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
  return (
    <div className={style.WrapperPart}>
      <div className={style.WrapperBuildYourWatchParts}>
        {PartMas.map((item, index) => (
          <div key={index} className={style.WrapBuildYourWatchParts}>
            <h3>{item.name}</h3>
            {item.color && (
              <div className={style.WrapParts}>
                {item.color.map((color, colorIndex) => (
                  <span style={{ backgroundColor: color }} />
                ))}
              </div>
            )}
            {item.image && (
              <div className={style.WrapParts}>
                {item.image.map((image, imageIndex) => (
                  <div className={style.WrapImageParts}>
                    <img src={image} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className={style.WrapStrapEngravingSpecifications}>
          <div className={style.WrapBuildYourWatchParts}>
            <div className={style.WrapPStrapInput}>
              <input type="radio" name="Strap" />
              <h5>Extra Strap</h5>
            </div>
            <div className={style.WrapPStrapInput}>
              <input type="radio" name="Strap" />
              <h5>Laser Engraving</h5>
            </div>
          </div>
          <div className={style.PriceOrder}>
            $15,800<button>Place an Order</button>
          </div>
          <button className={style.AROnline}>Try on in AR Online</button>
          <div className={style.WrapperSpecifications}>
            <h3>Specifications</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuildYourWatchParts;
