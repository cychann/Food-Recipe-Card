import React from "react";
import Card from "../card/card";
import styles from "./cards.module.css";

const Cards = ({ cards, onCardClick, display }) => {
  return (
    <div className={styles.cards}>
      {Object.keys(cards).map((key) => (
        <Card
          key={key}
          card={cards[key]}
          onCardClick={onCardClick}
          display={display}
        />
      ))}
    </div>
  );
};

export default Cards;
