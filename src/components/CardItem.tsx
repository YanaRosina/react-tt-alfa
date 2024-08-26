import React, { FC } from "react";
import { ICard } from "../models/ICard";
import styles from "./CardItem.module.css";

interface CardItemProps {
  card: ICard;
}
const CardItem: FC<CardItemProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{card.title}</h2>
      <img className={styles.card__img} src={card.image} alt={card.title} />
      <div>{card.description}</div>
      <button className={styles.card__button__del}>Удалить</button>
    </div>
  );
};

export default CardItem;
