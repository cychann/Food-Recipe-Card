import React from "react";
import Card from "../card/card";
import styles from "./cards.module.css";

const Cards = ({ cards }) => {
  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default Cards;
