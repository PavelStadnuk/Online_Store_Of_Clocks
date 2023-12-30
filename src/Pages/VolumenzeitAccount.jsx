import React, { useState } from "react";
import style from "../SCSS/VolumenzeitAccount.module.scss";
import SignUpHome from "../Components/SingUpHome";
import { useSelector } from "react-redux";
const VolumenzeitAccount = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [activePrams, setActivePrams] = useState("Dashboard");
  return (
    <div className={style.WrapperVolumenzeitAccount}>
      <div className={style.WrapTextAccount}>
        <h1>volumenzeit account</h1>
      </div>
      <div className={style.VolumenzeitAccount}>
        <div className={style.VolumenzeitAccountNavigation}>
          <h3
            onClick={() => {
              setActivePrams(" Dashboard");
            }}
            className={activePrams === " Dashboard" ? style.active : null}
          >
            Dashboard
          </h3>
          <h3
            onClick={() => {
              setActivePrams("Order History");
            }}
            className={activePrams === "Order History" ? style.active : null}
          >
            Order History
          </h3>
          <h3
            onClick={() => {
              setActivePrams("Contact Us");
            }}
            className={activePrams === "Contact Us" ? style.active : null}
          >
            Contact Us
          </h3>
        </div>
        <div className={style.VolumenzeitAccountInfoText}>
          <h1>
            Hey, {user.FirstName} {user.LastName}
          </h1>
          <p>
            Welcome to your dashboard, your one-stop-shop for all your recent
            Volumenzeit account activity.
          </p>
        </div>

        <div className={style.VolumenzeitAccountInfo}>
          <div>
            <h2>Recent Orders</h2>
            <p>Recent Orders</p>
          </div>
          <div>
            <p>View All orders</p>
          </div>
        </div>
        <div className={style.VolumenzeitAccountInfo}>
          <div>
            <h2>My Info</h2>
            <p>Personal Information</p>
            <h3>
              Name:{user.FirstName} {user.LastName}
            </h3>
            <h3>Email:{user.Email}</h3>
          </div>
          <div>
            <p>Manage Info</p>
          </div>
        </div>
        <div className={style.VolumenzeitAccountInfo}>
          <div>
            <h2>Address Book</h2>
            <p>You have not yet added address.</p>
          </div>
          <div>
            <p>Manage Addresses(0)</p>
          </div>
        </div>
        <div className={style.VolumenzeitAccountInfoButton}>
          <button>Add New</button>
        </div>
      </div>
      <SignUpHome />
    </div>
  );
};
export default VolumenzeitAccount;
