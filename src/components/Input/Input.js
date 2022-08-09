import React, { useState } from "react";
import style from "./Input.module.css";

const Input = (props) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    if (e.code === "Enter") {
      props.submitHandler(e.target.value);
      setValue("");
    }
  };
  return (
    <div className={style.newItem}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => onSubmit(e)}
        placeholder="What need to be done ?"
        onClick={props.clearHandler}
      />
    </div>
  );
};

export default Input;
