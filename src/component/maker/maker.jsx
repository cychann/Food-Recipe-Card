import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cards from "../cards/cards";
import CardAddForm from "../card_add_form/card_add_form";
import Detail from "../detail/detail";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService, imageUpload, cardRepository }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const [detailCard, setDetailCard] = useState();

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

  useEffect(() => {}, [cards]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  });
  return (
    <div className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.add_form}>
        <p className={styles.add_comment}>레시피를 만들어보세요!</p>
        <CardAddForm
          addOrUpdateCard={addOrUpdateCard}
          imageUpload={imageUpload}
        />
      </div>

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
