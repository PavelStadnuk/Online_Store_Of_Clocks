import React from "react";
import photo from '../Assets/Image/Facebook.png'
import photo1 from '../Assets/Image/Instagram.png'
import photo2 from '../Assets/Image/Pintrest.png'
import photo3 from '../Assets/Image/Twiter.png'
import style from '../SCSS/FindYourWatch.module.scss'
const FindYourWatch = () => {
  return (
    <div className={style.WrapperFindYourWatch}>
      <div className={style.WrapperSocialMedia}>
        <div><div><img src={photo}/></div><div><img src={photo1}/></div><div><img src={photo2}/></div><div><img src={photo3}/></div></div>
        <p>Follow us</p>
      </div>
      <div className={style.WrapperText}><h1>Find your dream watch</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect</p><button>Design Your Watch</button></div>
    </div>
  );
};
export default FindYourWatch