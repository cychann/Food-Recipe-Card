import React from "react";
import Login from "../login/login";
import styles from "./intro_page.module.css";

const IntroPage = ({ authService }) => (
  <div className={styles.container}>
    <section className={styles.intro}>
      <div className={styles.intro_left}>
        <p className={styles.intro_title}>Food Recipe Card Apllication</p>
        <p className={styles.intro_description}>
          이 웹사이트에서 자신만의 음식 레시피를 작성하세요! 원하는 음식의
          카테고리, 조리법, 재료를 레시피 카드에 작성해 실시간으로 저장하고
          관리하세요
        </p>
        <Login authService={authService} />
      </div>
      <img src="images/avator.png" alt="" />
    </section>
    {/* <section className={styles.support}>
      <h1 className={styles.sup_title}>Support</h1>
      <div className={styles.sup_cards}>
        <div className={styles.sup_card}>
          <img src="images/google.png" alt="" />
          <p className={styles.sup_card_title}>
            Real-time storage recipe card application
          </p>
          <p className={styles.sup_card_description}>
            lkandlnwclwalcinlincnalsnclsnaclslcalclnal las nland ilahf ohufawu
            buwfbaof w an faifl abfn iwafn iafb libui fwiab{" "}
          </p>
        </div>
        <div className={styles.sup_card}>
          <img src="images/google.png" alt="" />
          <p className={styles.sup_card_title}>
            Real-time storage recipe card application
          </p>
          <p className={styles.sup_card_description}>
            lkandlnwclwalcinlincnalsnclsnaclslcalclnal las nland ilahf ohufawu
            buwfbaof w an faifl abfn iwafn iafb libui fwiab{" "}
          </p>
        </div>
        <div className={styles.sup_card}>
          <img src="images/google.png" alt="" />
          <p className={styles.sup_card_title}>
            Real-time storage recipe card application
          </p>
          <p className={styles.sup_card_description}>
            lkandlnwclwalcinlincnalsnclsnaclslcalclnal las nland ilahf ohufawu
            buwfbaof w an faifl abfn iwafn iafb libui fwiab{" "}
          </p>
        </div>
        <div className={styles.sup_card}>
          <img src="images/google.png" alt="" />
          <p className={styles.sup_card_title}>
            Real-time storage recipe card application
          </p>
          <p className={styles.sup_card_description}>
            lkandlnwclwalcinlincnalsnclsnaclslcalclnal las nland ilahf ohufawu
            buwfbaof w an faifl abfn iwafn iafb libui fwiab{" "}
          </p>
        </div>
      </div>
    </section> */}
  </div>
);

export default IntroPage;
