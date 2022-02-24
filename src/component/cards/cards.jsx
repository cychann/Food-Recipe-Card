import React from "react";
import Card from "../card/card";
import styles from "./cards.module.css";

const Cards = ({ cards, onCardClick }) => {
  const cardCount = Object.keys(cards).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{`총 ${cardCount}개의 레시피`}</p>

        <div className={styles.header_right}>
          <p className={styles.lastest}>최신순</p>
          <p>좋아요순</p>
        </div>
      </div>
      <div className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <Card key={key} card={cards[key]} onCardClick={onCardClick} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
