import React from "react";
import CardDetail from "../card_detail/card_detail";

const Detail = ({ cards, detailCard, addOrUpdateCard, deleteCard }) => {
  const detailCardId = detailCard.id;
  const card = cards[detailCardId];

  return (
    <div>
      <CardDetail
        deleteCard={deleteCard}
        detailCard={card}
        addOrUpdateCard={addOrUpdateCard}
      />
    </div>
  );
};

export default Detail;
