import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../cards/cards";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([
    {
      id: "1",
      title: "쉽게 만드는 로제파스타!",
      catecory: "양식",
      preparations: ["파스타면", "생크림", "토마토소스"],
      order: {
        1: "면을 삶는다",
        2: "면을 후라이팬에 옮긴다",
        3: "토마토소스를 붇는다",
        4: "면수를 넣고 1분 정도 저어주다가 생크림을 넣어준다",
      },
      fileURL: "asd.png",
    },
    {
      id: "2",
      title: "쉽게 만드는 파스타!",
      catecory: "양식ㅁ나ㅜ임ㄴ우",
      preparations: ["파스타면", "생크림", "토마토소스"],
      order: {
        1: "면을 삶는다",
        2: "면을 후라이팬에 옮긴다",
        3: "토마토소스를 붇는다",
        4: "면수를 넣고 1분 정도 저어주다가 생크림을 넣어준다",
      },
      fileURL: "asd.png",
    },
    {
      id: "3",
      title: "쉽게 만드는 파스타!asdasdasdas",
      catecory: "양식",
      preparations: ["파스타면", "생크림", "토마토소스"],
      order: {
        1: "면을 삶는다",
        2: "면을 후라이팬에 옮긴다",
        3: "토마토소스를 붇는다",
        4: "면수를 넣고 1분 정도 저어주다가 생크림을 넣어준다",
      },
      fileURL: "asd.png",
    },
    {
      id: "4",
      title: "쉽게 만드는 파스타!",
      catecory: "양식",
      preparations: ["파스타면", "생크림", "토마토소스"],
      order: {
        1: "면을 삶는다",
        2: "면을 후라이팬에 옮긴다",
        3: "토마토소스를 붇는다",
        4: "면수를 넣고 1분 정도 저어주다가 생크림을 넣어준다",
      },
      fileURL: "asd.png",
    },
  ]);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <div>
      <Header onLogout={onLogout} />
      <Cards cards={cards} />
    </div>
  );
};

export default Maker;
