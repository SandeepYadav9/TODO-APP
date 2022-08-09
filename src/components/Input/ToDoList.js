import React from "react";

import style from "./ToDoList.module.css";
const ToDoList = (props) => {
  return (
    <ul className={style.todolist}>
      {props.listData.map((list, index) => {
        return (
          <li key={index.list} >
            <div className={style.view} >
              <input
                className={style.toggle}
                onBlur={props.onChangeHandler}
                type="checkbox"
                
              />
              <label >{list}</label>
             
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
