import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>FRCM</h1>
      {onLogout && (
        <button className={styles.btn} onClick={onLogout}>
          logout
        </button>
      )}
    </div>
  );
};
export default Header;
