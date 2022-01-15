import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({
  imageUpLoad,
  name,
  onFoodChange,
  onAvatarChange,
  fileType,
}) => {
  const [loading, setLodaing] = useState(false);

  const inputRef = useRef();

  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLodaing(true);
    const type = event.target.name;
    const uploaded = await imageUpLoad.upload(event.target.files[0]);
    setLodaing(false);

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
      {!loading && (
        <button
          className={`${styles.btn} ${
            name
              ? fileType === "food"
                ? styles.orange
                : styles.pink
              : styles.grey
          }`}
          onClick={onClick}
        >
          {name || fileType}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
