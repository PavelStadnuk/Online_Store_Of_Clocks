import React from "react";
import style from "../SCSS/Payment.module.scss";
import card from "../Assets/Image/card.png";
import card1 from "../Assets/Image/card1.png";
import card2 from "../Assets/Image/card2.png";
import card3 from "../Assets/Image/card3.png";
import card4 from "../Assets/Image/card4.png";
import card5 from "../Assets/Image/card_5.png";
import card6 from "../Assets/Image/card6.png";
import card7 from "../Assets/Image/card7.png";
import card8 from "../Assets/Image/card8.png";
import PayPal from "../Assets/Image/PayPal.png";
import { useForm } from "react-hook-form";
const Payment = () => {
  const CardPhoto = [
    card,
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form submitted:", data); // Add this line
    try {
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <form className={style.WrapPayment} onSubmit={handleSubmit(onSubmit)}>
      <h3>Payment</h3>
      <div className={style.WrapCard}>
        <input name="paymentMethod" type="radio" id="creditCard" {...register("paymentMethod", )} />
        <div>
          <h3>Credit Card</h3>
          {CardPhoto.map((Photo) => {
            return <img src={Photo} />;
          })}
        </div>
      </div>
      <div className={style.WrapCard}>
        <input name="paymentMethod" type="radio" id="paypal" {...register("paymentMethod", )} />
        <div>
          <h3>PayPal</h3>
          <img src={PayPal} />
        </div>
      </div>
      <div className={style.WrapInput}>
        <div>
          <input
            type="text"
            placeholder="CardNumber"
            {...register("Country" ,)}
          />
        </div>
        <div className={style.WrapInput2}>
          <input
            placeholder="Expiry Date"
            type="text"
            {...register("ExpiryDate", )}
          />
          <input
            placeholder="CVC / CVV"
            type="text"
            {...register("CVC/CVV", )}
          />
        </div>
      </div>
      <p>Non-EU countries are subject to certain VAT and customs duties.</p>
      <button type="submit">Complete Payment</button>
    </form>
  );
};
export default Payment;
