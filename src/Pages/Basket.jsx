import React from "react";
import style from "../SCSS/Basket.module.scss";
import BasicInfo from "../Components/BasicInfo";
import BasketItem from "../Components/BasketItem";
import { useSelector,useDispatch} from "react-redux";
import { addShipping } from "../Redux/Slice/cartSlice";
const Basket = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const ShippingP = useSelector((state) => state.cart.Shipping);
  const AddShipping=(ShippingPrice)=>{dispatch(addShipping( ShippingPrice ));}
  return (
    <div className={style.WrapBasket}>
      <div className={style.WrapTextCheckout}>
        <h1>Checkout</h1>
      </div>
      <div className={style.WrapBasketInfoItem}>
        <BasicInfo />{" "}
        <BasketItem date={date} totalPrice={totalPrice} ShippingP={ShippingP} AddShipping={AddShipping}/>
      </div>
    </div>
  );
};
export default Basket;
