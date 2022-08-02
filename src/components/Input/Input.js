import React from "react";
import style from "./Input.module.css";
const Input = () => {
  return (
    <div className={style.input}>
      <input type="text" autoFocus placeholder="What need to be done ?"/>
    </div>
  );
};

export default Input;
