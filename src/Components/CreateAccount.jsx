import React from "react";
import style from "../SCSS/CreateAccount.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {useDispatch } from "react-redux";
import { addNewUser, setCurrentUser } from "../Redux/Slice/userSlice";
const CreateAccount = () => {
  const dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    try {
      dispatch(addNewUser(data))
      dispatch(setCurrentUser(data));
      navigate("/VolumenzeitAccount");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className={style.CreateAccountWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>NEW TO VOLUMENZEIT?</h1>
        <p>Create a new account</p>
        <div>
          <input
            placeholder="First Name"
            type="text"
            {...register("FirstName")}
          />
        </div>
        <div>
          <input
            placeholder="Last Name"
            type="text"
            {...register("LastName")}
          />
        </div>
        <p>Date of birth</p>
        <div className={style.WrapperInput2}>
          {" "}
          <input
            placeholder="January"
            type="text"
            {...register("January")}
          />{" "}
          <input placeholder="01" type="text" {...register("01")} />
        </div>
        <div>
          <input
            placeholder="Phone Number"
            type="text"
            {...register("Phone Number")}
          />
        </div>
        <div className={style.WrapperInput2}>
          {" "}
          <input placeholder="Email" type="text" {...register("Email")} />{" "}
          <input
            placeholder="Confirm Email"
            type="text"
            {...register("Confirm Email")}
          />
        </div>
        <div className={style.WrapperInput2}>
          {" "}
          <input
            placeholder="Password"
            type="text"
            {...register("Password")}
          />{" "}
          <input
            placeholder="Confirm Password"
            type="text"
            {...register("Confirm Password")}
          />
        </div>
        <div className={style.SignUpWrapper}>
          <input
            type="checkbox"
            id="RememberMeWrapper"
            {...register("RememberMeWrapper")}
          />
          <p>Sign-up to receive the latest updates and promotions</p>
        </div>
        <button type="submit" >Create Account</button>
      </form>
    </div>
  );
};
export default CreateAccount;
