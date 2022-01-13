import React from "react";
import styles from "./card_detail.module.css";

const CardDetail = ({ detailCard, updateDetailCard }) => {
  const { title, catecory, preparations, order, userName, date } = detailCard;

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updateDetailCard({
      ...detailCard,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  return (
    <form className={styles.card_detail}>
      <input
        type="text"
        name="title"
        className={styles.input}
        defaultValue={title}
        onChange={onChange}
      />
      <input
        type="text"
        name="catecory"
        className={styles.input}
        defaultValue={catecory}
        onChange={onChange}
      />
      <input
        type="text"
        name="userName"
        className={styles.input}
        defaultValue={userName}
        onChange={onChange}
      />
      <input
        type="text"
        name="userName"
        className={styles.input}
        defaultValue={date}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="preparations"
        defaultValue={preparations}
      />
      <textarea className={styles.textarea} name="order" defaultValue={order} />
      <div className={styles.btns}>
        <button className={styles.btn}>Image</button>
        <button className={styles.btn}>Delete</button>
      </div>
    </form>
  );
};

export default CardDetail;
