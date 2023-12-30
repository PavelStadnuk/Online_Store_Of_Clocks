import React from "react";
import style from "../SCSS/YourCart.module.scss";
import trasch from "../Assets/Image/trash.svg";
import cancle from "../Assets/Image/cancle.svg";
import { useDispatch } from "react-redux";
import { minusItemFromCart,addItemToCart } from "../Redux/Slice/cartSlice";
import AllDate from "../Redux/data";
import pluse from '../Assets/Image/Pluse.svg'
import { NavLink } from "react-router-dom";
const YourCart = ({ date, setYourCartVisible, totalPrice }) => {
  const Discount = (15 * totalPrice) / 100;
  const totalPriceOf = totalPrice - Discount;
  const [isAddMatchingItemVisible, setMatchingItemVisible] =
    React.useState(false);
  const MatchingItem = () => {
    setMatchingItemVisible(!isAddMatchingItemVisible);
  };
  const dispatch = useDispatch();
  const MinusWatch = (itemId) => {
    dispatch(minusItemFromCart({ itemId }));
  };
  const AddWatch=(item)=>{dispatch(addItemToCart(item))}
  const targetStrapColors = date[0]?.StrapColors;
  const objectsWithTargetStrapColors = AllDate.filter(
    (item) => item?.StrapColors === targetStrapColors
  );
  const MatchingItemMas = objectsWithTargetStrapColors.slice(0, 2);
  return (
    <div className={style.WrapperYourCarts}>
      <div className={style.WrapName}>
        <h1>YOUR CART</h1>{" "}
        <img src={cancle} onClick={() => setYourCartVisible(false)} />
      </div>
      {date.map((item, index) => {
        return (
          <div className={style.WrapperYourCart} key={item.id}>
            <div className={style.WrapImgItem}>
            <NavLink to={`/Watches/${item.id}`}><img src={item.photo} alt={item.name} /></NavLink>
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
            <div>
              <img
                src={trasch}
                alt="Delete"
                onClick={() => MinusWatch(item.id)}
              />
            </div>
          </div>
        );
      })}
      <div className={style.WrapYourCartText}>
        <button onClick={MatchingItem}>Add A Matching Item</button>
        {isAddMatchingItemVisible && (
          <div className={style.MatchingItemWrap}>
            {MatchingItemMas.map((item) => {
              return (
                <div className={style.ItemWrap}>
                  <div className={style.ItemPhotoWrap}>
                    <img src={item.photo}/>
                  </div>
                  <div className={style.MatchingItemWrapText}>
                    <p>{item.name}</p>
                    <h1>${item.price}</h1>
                    <div className={style.AddItemWrap}>
                      <img src={pluse} onClick={() => AddWatch(item)}/>
                      <p>Add item</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className={style.WrapYourCartPrices}>
          <div className={style.WrapYourCartPrice}>
            <p>Shupping UPS Standard</p>
            <h1>$12</h1>
          </div>
          <div className={style.WrapYourCartPrice}>
            <p>Discount 15% Off</p>
            <h1>${Discount}</h1>
          </div>
          <div className={style.WrapYourCartPrice}>
            <p>Grand Total</p>
            <h1>${totalPriceOf}</h1>
          </div>
        </div>
        <NavLink to='/Basket'><button onClick={() => setYourCartVisible(false)}>Go To Checkout</button></NavLink>
      </div>
    </div>
  );
};

export default YourCart;
