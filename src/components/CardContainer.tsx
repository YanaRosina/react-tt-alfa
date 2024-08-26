// components/CardContainer.tsx
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { cardAPI } from "../services/CardService";
import CardItem from "./CardItem";
import ToggleButton from "./ToggleButton";
import styles from "./CardContainer.module.css";
import { setCards } from "../slices/cardSlice";

const CardContainer = () => {
  const { data: cards, error, isLoading } = cardAPI.useFetchAllCardsQuery(5);
  const showFavoritesOnly = useAppSelector(
    (state) => state.visibility.showFavorites
  );
  const favoriteIds = useAppSelector((state) => state.favorites.favorites); // Получаем ID избранных карточек
  const cardList = useAppSelector((state) => state.cards); // Получаем все карточки
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cards) {
      dispatch(setCards(cards));
    }
  }, [cards, dispatch]);

  // Фильтруем карточки на основе состояния избранного
  const filteredCards = showFavoritesOnly
    ? cardList.filter((card) => favoriteIds.includes(card.id))
    : cardList;

  return (
    <div>
      {isLoading && <h1>Идет загрузка..</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {cards && (
        <div>
          <h1>Загруженные карточки</h1>
          <ToggleButton />
        </div>
      )}
      <div className={styles.card__list}>
        {filteredCards &&
          filteredCards.map((card) => (
            <div className={styles.card__item} key={card.id}>
              <CardItem card={card} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardContainer;
