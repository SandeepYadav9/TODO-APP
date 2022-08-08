import React from "react";
import style from "./Footer.module.css";
const Footer = (props) => {
  return (
    <div className={style.footer}>
      <div className={style.todoCount}>
        <span>
          <strong>{props.countText}</strong> items left
        </span>
      </div>
      <ul className={style.listItem}>
        <li >
          <a className={style.selected} href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button>Clear completed</button>
    </div>
  );
};

export default Footer;
