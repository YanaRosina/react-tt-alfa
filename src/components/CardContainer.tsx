// CardContainer.tsx
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { cardAPI } from "../services/CardService";
import CardItem from "./CardItem";
import { setCards } from "../slices/cardSlice";
import styles from "./CardContainer.module.css";

const CardContainer = () => {
  const { data: cards, error, isLoading } = cardAPI.useFetchAllCardsQuery(5);
  const cardList = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cards) {
      dispatch(setCards(cards));
    }
  }, [cards, dispatch]);

  return (
    <div>
      <div className={styles.card__list}>
        {isLoading && <h1>Идет загрузка..</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {cardList &&
          cardList.map((card) => (
            <div className={styles.card__item} key={card.id}>
              <CardItem card={card} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardContainer;
