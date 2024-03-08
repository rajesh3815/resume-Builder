import React from "react";
import Style from "./Header.module.css";
import svgimg from '../../assets/undraw_resume_folder_re_e0bi.svg'
const Header = () => {
  return (
    <div className={Style.container}>
      <div className={Style.left}>
        <p className={Style.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={Style.heading}>
          Make Your won resume. <span>It's FREE</span>
        </p>
      </div>
      <div className={Style.right}>
       <img src={svgimg} alt="resume image" />
      </div>
    </div>
  );
};

export default Header;
