import React from "react";
import Input from "./components/Input/Input";
import Title from "./components/Title/Title";
import FooterItem from "./components/Footer/FooterItem";
import style from "./TodoMvc.module.css";
const TodoMvc = () => {
  return (
    <div className={style.main}>
      <Title />
      <div className={style.container}>
        <Input />
        <FooterItem />
      </div>
    </div>
  );
};

export default TodoMvc;
