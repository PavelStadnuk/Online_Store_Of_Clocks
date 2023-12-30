import React from "react";
import style from "../SCSS/BasicInfo.module.scss";
import Payment from "./Payment";
import { useForm } from "react-hook-form";
const BasicInfo = () => {
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
    <div className={style.WrapperInfoCart} >
      <form className={style.BasicInfoWrap} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>Basic Info</h3>
          <div className={style.BasicInfoWrapInput}>
            <div>
              <input placeholder="Email"  type="text" {...register("Email", )}/>
            </div>
            <div>
              <input placeholder="First Name" type="text" {...register("First Name", )}/>
            </div>
            <div>
              <input placeholder="Last Name" type="text" {...register("Last Name", )}/>
            </div>
            <div>
              <input placeholder="Phone Number" type="text" {...register("Phone Number", )}/>
            </div>
            <div>
              <input placeholder="Address 1" type="text" {...register("Address 1", )}/>
            </div>
            <div>
              <input placeholder="Address 2" type="text" {...register("Address 2", )}/>
            </div>
            <div className={style.BasicInfoWrapInput2}>
              <input placeholder="City" type="text" {...register("City", )}/>
              <input placeholder="Zip Code" type="text" {...register("Zip Code", )}/>
            </div>
            <div>
              <input placeholder="Country" type="text" {...register("Country", )}/>
            </div>
          </div>
          <button type="submit">Countiniue</button>
        </div>
      </form>
      <Payment />
    </div>
  );
};
export default BasicInfo;
