import React from "react";
import style from "../SCSS/ContactUs.module.scss";
import photo from '../Assets/Image/ImageContactUS.png'
const ContactUs = () => {
  return (
    <div className={style.WrapperContactUs}>
      <div className={style.WrapperTextContactUs}>
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi<br/>
          elementum commodo ipsum. Aenean aenean adipiscing lect
        </p>
        <div className={style.WrapperContactUsInput}>
          <div>
            <input placeholder="Full Name" />
          </div>
          <div>
            <input placeholder="Email" />
          </div>
          <div>
            <input placeholder="Message" className={style.ContactUsInputMessage}/>
          </div>
          <button>Send Message</button>
        </div>
      </div>
      <div className={style.WrapperTelegramContactUs}>
        <img src={photo}/>
      </div>
    </div>
  );
};
export default ContactUs;
