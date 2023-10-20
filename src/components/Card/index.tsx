import React, { ReactNode } from "react";
import style from "./Card.module.scss";

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={style.Card}>{children}</div>;
};

export default Card;
