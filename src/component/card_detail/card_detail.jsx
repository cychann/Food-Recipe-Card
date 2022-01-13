import React, { useRef } from "react";
import styles from "./card_detail.module.css";

const CardDetail = ({ cards, detailCard, updateDetailCard }) => {
  const titleRef = useRef();
  const catecoryRef = useRef();
  const userNameRef = useRef();
  const dateRef = useRef();
  const preparationsRef = useRef();
  const orderRef = useRef();
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
        ref={titleRef}
        type="text"
        name="title"
        className={styles.input}
        value={title}
        onChange={onChange}
      />
      <input
        ref={catecoryRef}
        type="text"
        name="catecory"
        className={styles.input}
        value={catecory}
        onChange={onChange}
      />
      <input
        ref={userNameRef}
        type="text"
        name="userName"
        className={styles.input}
        value={userName}
        onChange={onChange}
      />
      <input
        ref={dateRef}
        type="text"
        name="date"
        className={styles.input}
        value={date}
        onChange={onChange}
      />
      <textarea
        ref={preparationsRef}
        className={styles.textarea}
        name="preparations"
        value={preparations}
      />
      <textarea
        ref={orderRef}
        className={styles.textarea}
        name="order"
        value={order}
      />
      <div className={styles.btns}>
        <button className={styles.btn}>Image</button>
        <button className={styles.btn}>Delete</button>
      </div>
    </form>
  );
};

export default CardDetail;
