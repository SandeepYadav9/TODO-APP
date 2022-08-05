import React, { useState } from "react";
import style from "./Input.module.css";
const Input = () => {
  const [input, setInput] = useState("");
  const [textInput, setTextInput] = useState([]);

  return (
    <div className={style.newItem}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="What need to be done ?"
      />
      <ul>
        {textInput.map((list) => {
          return <li>{list}</li>;
        })}
      </ul>
    </div>
  );
};

export default Input;
