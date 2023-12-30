import React from "react";
import style from "../SCSS/SignUpHome.module.scss";
const SignUpHome = () => {
  return (
    <div className={style.WrapperSignUpHome}>
      <h2>
        Don't miss your chance to get free Giveaway Sing up to our newsletter
      </h2>
      <p>
        We will inform you about coming Giveaways, Offers, Online Store
        preparation progress and start of sales
      </p>
      <div className={style.WrapperInput}>
        <input type="text" placeholder="Name" />{" "}
        <input type="text" placeholder="Email" />
      </div>
      <button>Sign Up</button>
      <p>You agree to our Terms and Conditions</p>
    </div>
  );
};
export default SignUpHome;
