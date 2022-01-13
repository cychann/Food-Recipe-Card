import React from "react";
import styles from "./card.module.css";

const Card = ({ card, onCardClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  const { title, catecory, userName, date } = card;

  return (
    <div
      className={`${styles.card} ${displayType}`}
      onClick={() => onCardClick(card)}
    >
      <img className={styles.img} src="images/pasta.png" alt="" />
      <div className={styles.body}>
        <p className={styles.catecory}>{catecory}</p>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.footer}>
        <img className={styles.avator} src="images/avator.png" alt="" />
        <div className={styles.footer_info}>
          <p className={styles.user}>{userName}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
