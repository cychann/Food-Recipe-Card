import React from "react";
import Header from "../header/header";
import IntroPage from "../intro_page/intro_page";
import Login from "../login/login";
import styles from "./main.module.css";

const Main = ({ authService }) => {
  return (
    <div>
      <Header />
      <IntroPage authService={authService} />
    </div>
  );
};

export default Main;
