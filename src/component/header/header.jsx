import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onLogout }) => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Let's make food recipe cards </p>
      <i className="fas fa-arrow-right"></i>
      <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />

      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          logout
        </button>
      )}
    </div>
  );
};
export default Header;
