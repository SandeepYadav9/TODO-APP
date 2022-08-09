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
  const [input, setInput] = useState("");
  const [listData, setListData] = useState([]);

  // Updated List Handler
  const addListHandler = (e) => {
    if (e) {
      const listArr = [...listData];
      listArr.push({
        id: Date.now(),
        title: e,
        status: "active",
      });
      setListData(listArr);
      setToggle(true);
      setCount(count + 1);
    }
  };

  // Distroy Task
  const onDeleteHandler = (id) => {
    const lestArr = [...listData];
    lestArr.splice(id, 1);
    setListData(lestArr);
    setCount(count - 1);
  };
  // Filter, Completed

  const taskIsCompledHandler = (id) => {
   console.log(id)
  };

  // isActive Task
  const isActiveHandler = (id) => {
    // let compledActiveList = [...listData];
    // console.log(compledActiveList);
    // let updatedListIndex = compledActiveList.findIndex(
    //   (list) => list.id !== id
    // );
    // compledActiveList[updatedListIndex].status = "active";
    // setListData(updatedListIndex);
    console.log(id)
  };

  // All Task

  const allListHandler = () => {
    const listArr = [...listData];
    listArr.push(input);
    setToggle(false);
    return listArr;
  };
  const clearListHandler = (id) => {
    // All clear List
  };

  const clearList = (id) => {
    //Clear List
  };
  const onCompletHandler = (list) => {
    let compledList = [...listData];
    let index = compledList.findIndex((list, index) => list.list === list);
    compledList[index].status = true;
    console.log(compledList);
    console.log(compledList);
  };
  return (
    <Card>
      <Title />
      <div className={style.container}>
        <Input submitHandler={addListHandler} clearHandler={clearList} />

        {toggle && (
          <ToDoList
            onCompleted={() => onCompletHandler()}
            listData={listData}
            onDelet={onDeleteHandler}
          />
        )}
        {toggle && (
          <Footer
            countText={count}
            allList={allListHandler}
            taskIsCompled={taskIsCompledHandler}
            isActive={isActiveHandler}
            clearList={clearListHandler}
          />
        )}
      </div>
    </Card>
  );
};

export default TodoMvc;
