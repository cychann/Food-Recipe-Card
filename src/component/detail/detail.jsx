import React from "react";
import CardAddPreview from "../card_add_preview/card_add_preview";
import CardDetail from "../card_detail/card_detail";

const Detail = ({
  cards,
  detailCard,
  addOrUpdateCard,
  deleteCard,
  imageUpload,
}) => {
  const detailCardId = detailCard.id;
  const card = cards[detailCardId];

  return (
    <div>
      <CardDetail
        deleteCard={deleteCard}
        detailCard={card}
        addOrUpdateCard={addOrUpdateCard}
        imageUpload={imageUpload}
      />
    </div>
  );
};

export default Detail;
