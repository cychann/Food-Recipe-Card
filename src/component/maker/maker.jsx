import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../cards/cards";
import CardDetail from "../card_detail/card_detail";
import Detail from "../detail/detail";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const navigate = useNavigate();

  const [cards, setCards] = useState({
    1: {
      id: "1",
      title: "쉽게 만드는 로제파스타!",
      catecory: "양식",
      preparations: ["파스타면", "생크림", "토마토소스"],
      order: [
        "면을 삶는다",
        "면을 후라이팬에 옮긴다",
        "토마토소스를 붇는다",
        "면수를 넣고 1분 정도 저어주다가 생크림을 넣어준다",
      ],
      fileURL: "asd.png",
      userName: "최유찬",
      date: "2022/1/13",
    },
    2: {
      id: "2",
      title: "쉽게 만드는 로제파스타",
      catecory: "양식",
      preparations: ["파스타면", "생크림", "토마토소스"],
      order: [
        "면을 삶는다",
        "면을 후라이팬에 옮긴다",
        "토마토소스를 붇는다",
        "면수를 넣고 1분 정도 저어주다가 생크림을 넣어준다",
      ],
      fileURL: "asd.png",
      userName: "최유찬",
      date: "2022/1/13",
    },
    3: {
      id: "3",
      title: "쉽게 만드는 로제파스타ㅜㅜ",
      catecory: "양식",
      preparations: ["파스타면", "생크림", "토마토소스"],
      order: [
        "면을 삶는다",
        "면을 후라이팬에 옮긴다",
        "토마토소스를 붇는다",
        "면수를 넣고 1분 정도 저어주다가 생크림을 넣어준다",
      ],
      fileURL: "asd.png",
      userName: "최유찬",
      date: "2022/1/13",
    },
    4: {
      id: "4",
      title: "쉽게 만드는 로제파스타ㅎㅎ",
      catecory: "양식",
      preparations: ["파스타면", "생크림", "토마토소스"],
      order: [
        "면을 삶는다",
        "면을 후라이팬에 옮긴다",
        "토마토소스를 붇는다",
        "면수를 넣고 1분 정도 저어주다가 생크림을 넣어준다",
      ],
      fileURL: "asd.png",
      userName: "최유찬",
      date: "2022/1/13",
    },
    5: {
      id: "5",
      title: "쉽게 만드는 로제파스타;;",
      catecory: "양식",
      preparations: ["파스타면", "생크림", "토마토소스"],
      order: [
        "면을 삶는다",
        "면을 후라이팬에 옮긴다",
        "토마토소스를 붇는다",
        "면수를 넣고 1분 정도 저어주다가 생크림을 넣어준다",
      ],
      fileURL: "asd.png",
      userName: "최유찬",
      date: "2022/1/13",
    },
    6: {
      id: "6",
      title: "쉽게 만드는 로제파스타><",
      catecory: "양식",
      preparations: ["파스타면", "생크림", "토마토소스"],
      order: [
        "면을 삶는다",
        "면을 후라이팬에 옮긴다",
        "토마토소스를 붇는다",
        "면수를 넣고 1분 정도 저어주다가 생크림을 넣어준다",
      ],
      fileURL: "asd.png",
      userName: "최유찬",
      date: "2022/1/13",
    },
  });

  const [detailCard, setDetailCard] = useState();

  const onLogout = () => {
    authService.logout();
  };

  const onCardClick = (card) => {
    setDetailCard(card);
  };

  const updateDetailCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  useEffect(() => {}, [cards]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <div className={styles.cards}>
          <Cards
            cards={cards}
            onCardClick={onCardClick}
            display={detailCard ? "list" : "grid"}
          />
        </div>
        {detailCard && (
          <div className={styles.detail}>
            <Detail
              cards={cards}
              detailCard={detailCard}
              updateDetailCard={updateDetailCard}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Maker;
