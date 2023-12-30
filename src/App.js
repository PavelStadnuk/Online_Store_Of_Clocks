import style from "./SCSS/App.module.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./Pages/Products";
import Basket from "./Pages/Basket";
import BuildYourWatch from "./Pages/BuildYourWatch";
import Product from "./Components/Product";
import Delivery from "./Pages/Delivery";
import ContactUs from "./Pages/ContactUs";
import Error404 from "./Pages/Error404";
import LoginCreateAccount from "./Pages/LoginCreateAccount";
import VolumenzeitAccount from "./Pages/VolumenzeitAccount";
const App = () => {
  return (
    <div className={style}>
      <Header />
      <Routes>
        {" "}
        <Route index element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Watches" element={<Products />} />
        <Route path="/Watches/:id" element={<Product />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/BuildYourWatch" element={<BuildYourWatch />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Jewelry" element={<Error404 />} />
        <Route path="/Brand" element={<Error404 />} />
        <Route path="/LoginCreateAccount/:params" element={<LoginCreateAccount />} />
        <Route path="/VolumenzeitAccount" element={< VolumenzeitAccount />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
