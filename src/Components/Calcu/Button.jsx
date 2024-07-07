import React from "react";
import style from "./Button.module.css";

function Button({handleClick,buttonValue }) {

  return (
    <button onClick={()=>handleClick(buttonValue)} className={`${style.btn}`}>
      {buttonValue}
    </button>
  );
}

export default Button;
