import React from "react";

import style from "./ToDoList.module.css";
const ToDoList = (props) => {
  return (
    <ul className={style.todolist}>
      {props.listData.map((list) => {
        return (
          <li key={list.id}>
            <div className={style.view}>
              <input
                className={style.toggle}
                onBlur={props.onChangeHandler}
                type="checkbox"
              />
              <label>{list}</label>
              <button
                className={style.delete}
                onClick={() => props.onClickDelet(list.id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
