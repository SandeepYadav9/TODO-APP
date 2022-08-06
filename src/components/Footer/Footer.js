import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.todoCount}>
        <span>1 items left</span>
      </div>
      <div className={style.active}>
        <span>All</span>
        <span>Active</span>
      </div>
      <div className={style.complet}>
        <span>Completed</span>
        <span>Clear Completed</span>
      </div>
    </div>
  );
};

export default Footer;