import React, { useRef, useState } from "react";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ imageUpload, addOrUpdateCard }) => {
  const titleRef = useRef();
  const catecoryRef = useRef();
  const userNameRef = useRef();
  const dateRef = useRef();
  const preparationsRef = useRef();
  const orderRef = useRef();

  const [foodFile, setFoodFile] = useState({
    foodFileName: null,
    foodFileURL: null,
  });
  const [avatarFile, setAvatarFile] = useState({
    avatarFileName: null,
    avatarFileURL: null,
  });

  const onSubmit = (event) => {
    event.preventDefault();

    const card = {
      id: Date.now(),
      title: titleRef.current.value || "제목",
      catecory: catecoryRef.current.value || "카테고리",
      userName: userNameRef.current.value || "사용자 이름",
      date: dateRef.current.value || "날짜",
      preparations: preparationsRef.current.value || "준비물",
      order: orderRef.current.value || "조리 순서",
      foodFileName: foodFile.foodFileName || "",
      foodFileURL: foodFile.foodFileURL || "",
      avatarFileName: avatarFile.avatarFileName || "",
      avatarFileURL: avatarFile.avatarFileURL || "",
    };
    console.log(card);
    addOrUpdateCard(card);
  };

  const onFoodChange = (file) => {
    setFoodFile({
      foodFileName: file.name,
      foodFileURL: file.url,
    });
  };

  const onAvatarChange = (file) => {
    setAvatarFile({
      avatarFileName: file.name,
      avatarFileURL: file.url,
    });
  };

  return (
    <form className={styles.form}>
      <input
        ref={titleRef}
        type="text"
        name="title"
        className={styles.input}
        placeholder="title"
      />
      <input
        ref={catecoryRef}
        type="text"
        name="catecory"
        className={styles.input}
        placeholder="catecory"
      />
      <input
        ref={userNameRef}
        type="text"
        name="userName"
        className={styles.input}
        placeholder="userName"
      />
      <input
        ref={dateRef}
        type="text"
        name="date"
        className={styles.input}
        placeholder="date"
      />
      <textarea
        ref={preparationsRef}
        className={styles.textarea}
        name="preparations"
        placeholder="preparations"
      />
      <textarea
        ref={orderRef}
        className={styles.textarea}
        name="order"
        placeholder="order"
      />
      <div className={styles.btns}>
        <div className={styles.image_btn}>
          <ImageFileInput
            imageUpLoad={imageUpload}
            onFoodChange={onFoodChange}
            fileType="food"
          />
        </div>

        <div className={styles.image_btn}>
          <ImageFileInput
            imageUpLoad={imageUpload}
            onAvatarChange={onAvatarChange}
            fileType="avatar"
          />
        </div>
        <button onClick={onSubmit} className={styles.btn}>
          Add
        </button>
      </div>
    </form>
  );
};

export default CardAddForm;
