import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({
  imageUpLoad,
  name,
  onFoodChange,
  onAvatarChange,
  fileType,
}) => {
  const inputRef = useRef();

  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const type = event.target.name;
    const uploaded = await imageUpLoad.upload(event.target.files[0]);
    console.log(type);

    switch (type) {
      case "food":
        onFoodChange({
          name: uploaded.original_filename,
          url: uploaded.url,
        });
        break;

      case "avatar":
        onAvatarChange({
          name: uploaded.original_filename,
          url: uploaded.url,
        });
        break;
    }
  };

  // input은 1개인데 어떻게 처리할거냐... change를 2개를 만드는게 아니라 인자로 전달해서 ? : 문법 써야할듯?

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="file"
        accept="image/*"
        name={fileType}
        ref={inputRef}
        onChange={onChange}
      />
      <button className={styles.btn} onClick={onClick}>
        {name || fileType}
      </button>
    </div>
  );
};

export default ImageFileInput;
