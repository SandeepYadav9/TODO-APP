import React from "react";
import Item from "./Item";

import style from "./FooterItem.module.css";
const FooterItem = () => {
  return (
    <div className={style.footer}>
      <Item />
    </div>
  );
};

export default FooterItem;
