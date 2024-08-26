import React, { FC } from "react";
import { ICard } from "../models/ICard";
import { useAppDispatch } from "../hooks/redux";
import { deleteCard } from "../slices/cardSlice";
import styles from "./CardItem.module.css";

interface CardItemProps {
  card: ICard;
}

const CardItem: FC<CardItemProps> = ({ card }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(card.id));
  };

  return (
    <div className={styles.card}>
      <button className={styles.card__button__del} onClick={handleDelete}>
        &times;
      </button>
      <h2 className={styles.card__title}>{card.category}</h2>
      <img className={styles.card__img} src={card.image} alt={card.category} />
      <div>{card.description}</div>
    </div>
  );
};

export default CardItem;
