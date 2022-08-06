import React, { useState } from "react";
import style from "./Input.module.css";

const Input = (props) => {
  const [input, setInput] = useState("");

  return (
    <div className={style.newItem}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={props.submitHandler}
        placeholder="What need to be done ?"
      />
    </div>
  );
};

export default Input;
