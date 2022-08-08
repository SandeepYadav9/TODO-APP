import React, { useState } from "react";
import Input from "./components/Input/Input";
import Title from "./components/Title/Title";

import style from "./TodoMvc.module.css";
import Card from "./components/UI/Card";
import Footer from "./components/Footer/Footer";
import ToDoList from "./components/Input/ToDoList";

const TodoMvc = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [listData, setListData] = useState([]);
  const [input, setInput] = useState("");

  const addListHandler = (e) => {
    console.log("value", e);

    if (e.code === "Enter") {
      const listArr = [...listData];
      listArr.push(e.target.value);
      setListData(listArr);
      setToggle(true);
      setCount(count + 1);
    }
  };
  const setInputHandler = (e) => {
    setInput(e.target.value);
  };
  // const countDownItems = () => {
  //   if (count >= 1  ) {
  //     setCount(count - 1);    
  //   } 
  // };
  return (
    <Card>
      <Title />
      <div className={style.container}>
        <Input
          inpug={input}
          setInputList={setInputHandler}
          submitHandler={addListHandler}
        />

        {toggle && (
          <ToDoList
            listData={listData}
            
            // onChangeHandler={countDownItems}
          />
        )}
        {toggle && <Footer countText={count} />}
      </div>
    </Card>
  );
};

export default TodoMvc;
