import React, { useState } from "react";
import style from "./ToDoList.module.css";

const ToDoList = (props) => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [masterData, setMasterData] = useState([]); //As Data Base
  const [listData, setListData] = useState([]);
  
  const addListHandler = (e) => {
    if (value && e.keyCode === 13) {
      const listArr = [...listData];
      listArr.push({
        id: Date.now(),
        title: value,
        status: "active", // active/completed
        selected: "inactive", // inactive/active
        isChecked: false, // true/false
      });
      setValue("");
      setListData(listArr);
      setMasterData(listArr);
      setCount(count + 1);
    }
  };

  const onCompletHandler = (id) => {
    const listData1 = listData.map((list) => {
      if (list.id === id) {
        if (!list.isChecked) {
          list.status = "completed";
          list.selected = "active";
          list.isChecked = true;
          setCount(count - 1);
        } else {
          list.status = "active";
          list.selected = "inactive";
          list.isChecked = false;
          setCount(count + 1);
        }
      }
      return list;
    });
    setListData(listData1);
    setMasterData(listData1);
  };
  const onDeleteHandler = (id) => {
    const listData1 = listData.filter((list) => list.id !== id);
    setCount(count - 1);
    setListData(listData1);
    setMasterData(listData1);
  };

  const filterTask = (status) => {
    if (status === "all") {
      setListData(masterData);
    } else {
      const listData1 = masterData.filter((list) => list.status === status);
      setListData(listData1);
    }
    setCount(listData.length);
  };

  const clearCompletedList = () => {
    const listData1 = masterData.filter((list) => list.status !== "completed");
    setListData(listData1);
    setMasterData(listData1);
  };

  return (
    <div>
      {/* Input What need to Task */}
      <div className={style.newItem}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => addListHandler(e)}
          placeholder="What need to be done ?"
          onClick={props.clearHandler}
        />
      </div>
      {/* List output after input Task  */}
      <ul className={style.todolist}>
        {listData.map((list, index) => {
          return (
            <li key={list.id} className={style.completed}>
              <div className={style.view}>
                <input
                  className={style.toggle}
                  onChange={() => onCompletHandler(list.id)}
                  type="checkbox"
                  checked={list.isChecked}
                />
                <label className={style[list.selected]}>{list.title}</label>
                <button
                  className={style.delete}
                  onClick={() => onDeleteHandler(list.id)}
                >
                  X
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {/*  Footer Filter your to do task   */}
      <div className={style.footer}>
        <div className={style.todoCount}>
          <span>
            <strong>{count}</strong> items left
          </span>
        </div>
        <ul className={style.listItem}>
          <li onClick={() => filterTask("all")}>
            <a href="#">All</a>
          </li>
          <li onClick={() => filterTask("active")}>
            <a href="#"> Active </a>
          </li>
          <li onClick={() => filterTask("completed")}>
            <a href="#">Completed</a>
          </li>
        </ul>
        <button onClick={() => clearCompletedList()}>Clear completed</button>
      </div>
    </div>
  );
};

export default ToDoList;
