import React, { useRef } from "react";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_detail.module.css";

const CardDetail = ({
  detailCard,
  addOrUpdateCard,
  deleteCard,
  imageUpload,
}) => {
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

    addOrUpdateCard({
      ...detailCard,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onDelete = (event) => {
    event.preventDefault();
    deleteCard(detailCard);
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
        <ImageFileInput imageUpload={imageUpload} />
        <button onClick={onDelete} className={styles.btn}>
          Delete
        </button>
      </div>
    </form>
  );
};

export default CardDetail;
