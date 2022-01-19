import React from "react";
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const FOOD_DEFAULT_IMAGE = "/images/food.png";
const AVATAR_DEFAULT_IMAGE = "/images/cooker.png";

const Card = ({ card, onCardClick, display }) => {
  const displayType = display === "list" ? styles.list : styles.grid;
  const { title, catecory, userName, date, foodFileURL, avatarFileURL } = card;
  const foodURL = foodFileURL || FOOD_DEFAULT_IMAGE;
  const avatarURL = avatarFileURL || AVATAR_DEFAULT_IMAGE;

  return (
    <div
      className={`${styles.card} ${displayType}`}
      onClick={() => onCardClick(card)}
    >
      <img className={styles.img} src={foodURL} alt="" />
      <div className={styles.body}>
        <p className={styles.catecory}>{catecory}</p>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_left}>
          <img className={styles.avator} src={avatarURL} alt="" />
          <div className={styles.footer_info}>
            <p className={styles.user}>{userName}</p>
            <p className={styles.date}>{date}</p>
          </div>
        </div>
        <div className={styles.footer_right}>
          <FontAwesomeIcon icon={faHeart} className={styles.heart} />
          <p>1</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
