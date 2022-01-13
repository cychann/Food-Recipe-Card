import React from "react";
import CardDetail from "../card_detail/card_detail";

const Detail = ({ cards, detailCard, updateDetailCard }) => {
  const detailCardId = detailCard.id;
  const card = cards[detailCardId];

  return (
    <div>
      <CardDetail
        cards={cards}
        detailCard={card}
        updateDetailCard={updateDetailCard}
      />
    </div>
  );
};

export default Detail;
