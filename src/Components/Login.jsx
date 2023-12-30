import React from "react";
import {useNavigate } from "react-router-dom";
import style from "../SCSS/Login.module.scss";
import photo from "../Assets/Image/facebook1.png";
import photo1 from "../Assets/Image/Google1.png";
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from "react-redux";
import { setCurrentUser } from "../Redux/Slice/userSlice";
const Login = () => {
  const userData = useSelector((state) => state.user.userDate);
  const dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    try {
      const { Email, Password } = data;
      const user = userData.find((u) => u.Login === Email);
      if (user && user.password === Password) {
        console.log("Login successful");
        dispatch(setCurrentUser(user));
        navigate('/VolumenzeitAccount');
      } else {
        console.log("Invalid login or password");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className={style.LoginWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>WELCOME BACK</h1>
        <p>
          Sign into your existing account to earn rewards, check existing orders
          and more
        </p>
        <div>
          <input placeholder="Email" type="text" {...register("Email")} />
        </div>
        <div>
          <input placeholder="Password" type="text" {...register("Password")} />
        </div>
        <div className={style.RememberMePasswordWrapper}>
          <div className={style.RememberMeWrapper}>
            <input
              type="checkbox"
              id="RememberMeWrapper"
              {...register("RememberMeWrapper")}
            />{" "}
            <p>Remember me</p>
          </div>
          <p>Forgot Password</p>
        </div>
        <button type="submit">Sign In</button>
        <h3>Express sign in</h3>
        <div className={style.ExpressSignIn}>
          <button type="button">
            <img src={photo} alt="Express Sign In 1" />
            Sign in
          </button>
          <button type="button">
            <img src={photo1} alt="Express Sign In 2" />
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
