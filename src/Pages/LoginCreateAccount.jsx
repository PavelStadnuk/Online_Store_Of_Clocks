import React, {  useState } from "react";
import style from "../SCSS/LoginCreateAccount.module.scss";
import Login from "../Components/Login";
import CreateAccount from "../Components/CreateAccount";
import {useParams } from 'react-router-dom';
const LoginCreateAccount = () => {
  const {params}=useParams()
  const [activePrams,setActivePrams]=useState(params)
  return (
    <div className={style.LoginCreateAccountWrapper}>
      <div className={style.LoginCreateWrapper}>
          <div className={style.LoginCreate}>
          <h3
            onClick={() => {
              setActivePrams("Login")
            }}
            className={activePrams === "Login" ? style.active : null}
          >
            Login
          </h3>
          <h3
            onClick={() => {
              setActivePrams("SignUp")
            }}
            className={activePrams === "SignUp" ? style.active : null}
          >
            Create Account
          </h3>
          </div>
          {activePrams==='Login'?(
            <Login/>
          ):(<CreateAccount/>)}
      </div>
    </div>
  );
};
export default LoginCreateAccount;
