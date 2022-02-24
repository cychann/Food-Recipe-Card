import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Cards from "../cards/cards";
import Detail from "../detail/detail";
import Header from "../header/header";
import styles from "./maker.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Maker = ({ authService, imageUpload, cardRepository }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateState = location.state;
  const navigateKey = location.key;
  const [cards, setCards] = useState({});
  const [urlKey, setUrlKey] = useState(navigateKey && navigateKey);
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const [addCard, setAddCard] = useState({});
  const [detailCard, setDetailCard] = useState();

  const goToMaker = () => {
    setDetailCard(null);
  };

  const onLogout = () => {
    authService.logout();
  };

  const onCardClick = (card) => {
    setDetailCard(card);
  };

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    // console.log(userId, card);
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    setDetailCard();
    cardRepository.removeCard(userId, card);
  };

  const goToAddForm = () => {
    navigate("/post");
  };

  useEffect(() => {
    if (!userId) {
      return;
    }

    const stopRead = cardRepository.readCard(userId, (cards) => {
      setCards(cards);
    });
    return () => {
      stopRead();
    }; // 컴포넌트가 언마운트 되었을 때 작성할 부분을 여기에 작성한다. 주로 리소스를 정리하고 메모리를 정리하는 일을 함
  }, [userId]);

  useEffect(() => {
    if (!addCard) {
      return;
    }
    addOrUpdateCard(addCard);
  }, [addCard]);

  useEffect(() => {
    console.log(urlKey);
  }, [urlKey]);

  useEffect(() => {
    console.log(userId);

    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
    if (navigateState && isNaN(userId)) {
      setAddCard(navigateState);
    }
  });
  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.add_form}>
        <p className={styles.add_comment}>레시피를 작성하세요!</p>
        <CardAddForm
          addOrUpdateCard={addOrUpdateCard}
          imageUpload={imageUpload}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.cards}>
          <Cards
            cards={cards}
            detailCard={detailCard}
            addOrUpdateCard={addOrUpdateCard}
            deleteCard={deleteCard}
            imageUpload={imageUpload}
          />
        </div>
        {detailCard && (
          <div className={styles.detail}>
            <img
              src="images/xmark.svg"
              alt=""
              onClick={() => {
                setDetailCard(!detailCard);
              }}
              className={styles.xmark}
            />
            <Detail
              cards={cards}
              detailCard={detailCard}
              addOrUpdateCard={addOrUpdateCard}
              deleteCard={deleteCard}
              imageUpload={imageUpload}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Maker;
