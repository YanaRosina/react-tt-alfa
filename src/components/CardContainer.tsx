import React from "react";
import { cardAPI } from "../services/CardService";
import CardItem from "./CardItem";
import styles from "./CardContainer.module.css"; // Импортируем CSS-модуль

const CardContainer = () => {
  const { data: cards, error, isLoading } = cardAPI.useFetchAllCardsQuery(5);

  return (
    <div>
      <div className={styles.card__list}>
        {isLoading && <h1>Идет загрузка..</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {cards &&
          cards.map((card) => (
            <div className={styles.card__item} key={card.id}>
              <CardItem card={card} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardContainer;
