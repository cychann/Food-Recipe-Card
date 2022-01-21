import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardAddPreview from "../card_add_preview/card_add_preview";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ imageUpload }) => {
  const navigate = useNavigate();

  const titleRef = useRef();
  const catecoryRef = useRef();
  const userNameRef = useRef();
  const dateRef = useRef();
  const preparationsRef = useRef();
  const orderRef = useRef();

  const [cardPreview, setCardPreview] = useState({
    title: "",
    catecory: "",
    foodFileURL: "",
    avatarFileURL: "",
    userName: "",
    date: "",
  });

  const [foodFile, setFoodFile] = useState({
    foodFileName: null,
    foodFileURL: null,
  });
  const [avatarFile, setAvatarFile] = useState({
    avatarFileName: null,
    avatarFileURL: null,
  });

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();

    const updated = {
      ...cardPreview,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    setCardPreview(updated);
  };

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

    navigate("/maker", { state: card });
  };

  const onFoodChange = (file) => {
    setFoodFile({
      foodFileName: file.name,
      foodFileURL: file.url,
    });
    setCardPreview({ ...cardPreview, foodFileURL: file.url });
  };

  const onAvatarChange = (file) => {
    setAvatarFile({
      avatarFileName: file.name,
      avatarFileURL: file.url,
    });
    setCardPreview({ ...cardPreview, avatarFileURL: file.url });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          ref={titleRef}
          type="text"
          name="title"
          className={styles.input}
          placeholder="title"
          onChange={onChange}
        />
        <input
          ref={catecoryRef}
          type="text"
          name="catecory"
          className={styles.input}
          placeholder="catecory"
          onChange={onChange}
        />
        <input
          ref={userNameRef}
          type="text"
          name="userName"
          className={styles.input}
          placeholder="userName"
          onChange={onChange}
        />
        <input
          ref={dateRef}
          type="text"
          name="date"
          className={styles.input}
          placeholder="date"
          onChange={onChange}
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
              name={foodFile.foodFileName}
              onFileChange={onChange}
            />
          </div>

          <div className={styles.image_btn}>
            <ImageFileInput
              imageUpLoad={imageUpload}
              onAvatarChange={onAvatarChange}
              fileType="avatar"
              name={avatarFile.avatarFileName}
            />
          </div>
          <button onClick={onSubmit} className={styles.btn}>
            Add
          </button>
        </div>
      </form>
      <CardAddPreview cardPreview={cardPreview} />
    </div>
  );
};

export default CardAddForm;
