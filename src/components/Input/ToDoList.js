import React, { useState } from "react";

import style from "./ToDoList.module.css";
const ToDoList = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const onClickCheckHandler = (list) => {
    setIsCompleted(true);
    props.onCompleted(list);
  };
  let completedTask = `{ ${isCompleted} ?  ${!style.completed}  : ${
    style.completed
  }}`;
  return (
    <ul className={style.todolist}>
      {props.listData.map((list, index) => {
        return (
          <li
            key={list.id}
            className={completedTask}
            onClick={() => onClickCheckHandler(list.id)}
          >
            <div className={style.view}>
              <input className={style.toggle} type="checkbox" />
              <label>{list.title}</label>
              <button
                className={style.delete}
                onClick={() => props.onDelet(index)}
              >
                X
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
