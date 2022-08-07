import React from "react";

import style from "./ToDoList.module.css";
const ToDoList = (props) => {
  return (
    <ul className={style.listToDo}>
      {props.listData.map((list) => {
        return (
          <li>
            <div className={style.view}>
              <input className={style.toggle} type="checkbox" />
              <label>{list}</label>
              <button className={style.delete}>Delete</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
