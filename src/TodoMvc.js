import React, { useState } from "react";
import Input from "./components/Input/Input";
import Title from "./components/Title/Title";

import style from "./TodoMvc.module.css";
import Card from "./components/UI/Card";
import Footer from "./components/Footer/Footer";
import ToDoList from "./components/Input/ToDoList";


const TodoMvc = () => {
  const [listData, setListData] = useState([]);

  const submitHandler = (e) => {
    console.log("value", e);
    if (e.code === "Enter") {
      const listArr = [...listData];
      listArr.push(e.target.value);
      setListData(listArr);
      
    }
  };
  return (
    <Card>
      <Title />
      <div className={style.container}>
        <Input submitHandler={submitHandler} />
        <ToDoList listData={listData} />
        <Footer />
      </div>
    </Card>
  );
};

export default TodoMvc;
