import React from "react";
import FindYourWatch from "../Components/FindYourWatch";
import Features from "../Components/Features";
import DesignYourWatch from "../Components/DesignYourWatch";
import WatchHome from "../Components/WatchHome";
import AboutUs from "../Components/AboutUs";
import SignUpHome from "../Components/SingUpHome";
const Home = () => {
  return (
    <div>
      <FindYourWatch />
      <Features />
      <DesignYourWatch />
      <WatchHome/>
      <AboutUs/>
      <SignUpHome/>
    </div>
  );
};
export default Home;
