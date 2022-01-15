import React from "react";
import styles from "./card_add_preview.module.css";

const FOOD_DEFAULT_IMAGE = "/images/food.png";
const AVATAR_DEFAULT_IMAGE = "/images/cooker.png";

const CardAddPreview = ({ cardPreview }) => {
  const {
    catecory,
    title,
    userName,
    date,
    foodFileURL,
    avatarFileURL,
  } = cardPreview;
  const foodURL = foodFileURL || FOOD_DEFAULT_IMAGE;
  const avatarURL = avatarFileURL || AVATAR_DEFAULT_IMAGE;

  return (
    <div className={styles.card}>
      <img className={styles.img} src={foodURL} alt="" />
      <div className={styles.body}>
        <p className={styles.catecory}>{catecory}</p>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.footer}>
        <img className={styles.avator} src={avatarURL} alt="" />
        <div className={styles.footer_info}>
          <p className={styles.user}>{userName}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default CardAddPreview;
