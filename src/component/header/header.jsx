import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onLogout }) => {
  return (
    <>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          logout
        </button>
      )}
    </>
  );
};
export default Header;
