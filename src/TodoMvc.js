import React from "react";
import Input from "./components/Input/Input";
import Title from "./components/Title/Title";

import style from "./TodoMvc.module.css";
import Card from './components/UI/Card'
import Footer from "./components/Footer/Footer";
const TodoMvc = () => {
  return (
    <Card>
      <Title />
      <div className={style.container}>
        <Input />
        <Footer />
      </div>
    </Card>
  );
};

export default TodoMvc;
