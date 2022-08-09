import React from "react";

import Title from "./components/Title/Title";
import style from "./TodoMvc.module.css";
import Card from "./components/UI/Card";

import ToDoList from "./components/Input/ToDoList";

const TodoMvc = () => {
  return (
    <Card>
      <Title />
      <div className={style.container}>
        <ToDoList />

        
      </div>
    </Card>
  );
};

export default TodoMvc;
