import React from "react";

import style from "./ToDoList.module.css";
const ToDoList = (props) => {
  return (
    <ul className={style.listToDo}>
      {props.listData.map((list) => {
        return (
          <div className={style.listData}>
            <li key={list.list}>{list}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default ToDoList;
