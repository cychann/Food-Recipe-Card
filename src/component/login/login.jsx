import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const onLogin = (event) => {
    const loginText = event.currentTarget.innerHTML;
    const loginCompanyName = loginText.slice(11);
    authService.login(loginCompanyName);
  };

  const goToMaker = (user) => {
    navigate({
      pathname: "maker",
      state: { id: user.userId },
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      console.log(user);
      user && goToMaker(user);
    }, []);
  });
  return (
    <>
      <div className={styles.login}>
        {/* <h1 className={styles.title}>Login</h1>
        <div className={styles.description}>
          Login with your Google or Facebook account
        </div> */}
        <div className={`${styles.login_container} ${styles.google}`}>
          <img className={styles.logo} src="images/google.png" alt="" />
          <button
            className={`${styles.button} ${styles.google}`}
            onClick={onLogin}
          >
            Login with Google
          </button>
        </div>
        <div className={`${styles.login_container} ${styles.facebook}`}>
          <img className={styles.logo} src="images/facebook.png" alt="" />
          <button
            className={`${styles.button} ${styles.facebook}`}
            onClick={onLogin}
          >
            Login with Facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
