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

  // Updated List Handler
  const addListHandler = (e) => {
    if (e.code === "Enter") {
      const listArr = [...listData];
      listArr.push(e.target.value);
      setListData(listArr);
     
      setToggle(true);
      setCount(count + 1);
    }
  };
  // ON every key stock update task
  const setInputHandler = (e) => {
    setInput(e.target.value);
  };
  const countDownItems = () => {
    setCount(count - 1);
  };

  // Distroy Task
  const onDeleteHandler = (id) => {
    const lestArr = [...listData];
    lestArr.splice(id, 1);
    setListData(lestArr);
    setCount(count - 1);
  };

  const taskIsCompledHandler = () => {};

  // All Task

  const allListHandler = () => {
    const listArr = [...listData];
    listArr.push(input);
    setToggle(false);
    return listArr;
  };
  const clearListHandler = (id) => {
    setInput("")
  };

  const clearList = (id) => {
    setInput("")
  };

  return (
    <Card>
      <Title />
      <div className={style.container}>
        <Input
          inpug={input}
          setInputList={setInputHandler}
          submitHandler={addListHandler}
          clearHandler={clearList}
        />

    {toggle && (
          <ToDoList
            listData={listData}
            onDelet={onDeleteHandler}
            onChangeHandler={countDownItems}
          />
        )} 
        {toggle && (
          <Footer
            countText={count}
            allList={allListHandler}
            taskIsCompled={taskIsCompledHandler}
            clearList={clearListHandler}
          />
        )}  
      </div>
    </Card>
  );
};

export default TodoMvc;
