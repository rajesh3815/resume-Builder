import React from "react";
import Style from "./Inputcontrol.module.css";
const Inputcontrol = ({ label, ...props }) => {
    // console.log(props);
  return (
    <div className={Style.container}>
    {label && <label>{label}</label>}
    <input type="text" {...props} />
    </div>
  );
};

export default Inputcontrol;
