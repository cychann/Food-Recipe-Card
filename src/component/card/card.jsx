import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src="images/pasta.png" alt="" />
      <p className={styles.catecory}>{card.catecory}</p>
      <p className={styles.title}>{card.title}</p>
    </div>
  );
};
export default Card;
