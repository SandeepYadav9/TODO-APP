import React, { useState } from "react";
import style from "./Input.module.css";
const Input = () => {
  const [input, setInput] = useState("");
  const [listData, setListData] = useState([]);
  const submitHandler = (e) => {
    console.log("value", e);
    if (e.code === "Enter") {
      const listArr = [...listData];
      listArr.push(input);
      setListData(listArr);
      setInput("");
    }
    // setListData(e.target.value)
    // setListData(input);
  };
  return (
    <div className={style.newItem}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={submitHandler}
        placeholder="What need to be done ?"
      />

      <ul>
        {listData.map((list) => {
          return <li>{list}</li>;
        })}
      </ul>
    </div>
  );
};

export default Input;
