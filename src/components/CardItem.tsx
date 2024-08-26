import React, { FC } from "react";
import { ICard } from "../models/ICard";
import { deleteCard } from "../slices/cardSlice";
import styles from "./CardItem.module.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toggleFavorite } from "../slices/favoriteSlice";
import { Link, useNavigate } from "react-router-dom";

interface CardItemProps {
  card: ICard;
}

const CardItem: FC<CardItemProps> = ({ card }) => {
  const dispatch = useAppDispatch();
  const favoriteIds = useAppSelector((state) => state.favorites.favorites);
  const isFavorite = favoriteIds.includes(card.id);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/card/${card.id}`);
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(deleteCard(card.id));
  };

  const handleFavoriteToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(toggleFavorite(card.id));
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <button className={styles.card__button__del} onClick={handleDeleteClick}>
        &times;
      </button>
      <button
        className={styles.card__button__fav}
        onClick={handleFavoriteToggle}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <FaHeart className={styles.favIcon} />
        ) : (
          <FaRegHeart className={styles.favIcon} />
        )}
      </button>
      <h2 className={styles.card__title}>{card.category}</h2>
      <img className={styles.card__img} src={card.image} alt={card.category} />
      <div>{card.description}</div>
    </div>
  );
};

export default CardItem;
