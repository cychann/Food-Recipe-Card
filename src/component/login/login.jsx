import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const onLogin = (event) => {
    const loginCompanyName = event.currentTarget.innerHTML;
    authService.login(loginCompanyName).then(console.log);
  };

  const goToMaker = (user) => {
    navigate("maker", user);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user);
    }, []);
  });
  return (
    <>
      <Header />
      <div className={styles.login}>
        <h1 className={styles.title}>로그인하기</h1>
        <div className={styles.description}>
          Google 혹은 Facebook 계정으로 로그인
        </div>
        <div className={`${styles.login_container} ${styles.google}`}>
          <img className={styles.logo} src="images/google.png" alt="" />
          <button
            className={`${styles.button} ${styles.google}`}
            onClick={onLogin}
          >
            Google
          </button>
        </div>
        <div className={`${styles.login_container} ${styles.facebook}`}>
          <img className={styles.logo} src="images/facebook.png" alt="" />
          <button
            className={`${styles.button} ${styles.facebook}`}
            onClick={onLogin}
          >
            Facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;