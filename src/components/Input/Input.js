import React from "react";
import style from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={style.newItem}>
      <input
        type="text"
        value={props.input}
        onChange={() => {
          props.setInputList();
        }}
        onKeyDown={props.submitHandler}
        placeholder="What need to be done ?"
        onClick={props.clearHandler}
      />
    </div>
  );
};

export default Input;
