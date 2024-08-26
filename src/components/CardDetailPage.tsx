import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import styles from "./CardDetailPage.module.css";
import { Link, useNavigate } from "react-router-dom";

const CardDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const card = useAppSelector((state) =>
    state.cards.find((card) => card.id === Number(id))
  );
  const navigate = useNavigate();

  const returnBackClick = () => {
    navigate(`/`);
  };

  if (!card) {
    return (
      <div>
        <h1>Карточка не найдена</h1>
        <button
          className={styles.cardDetail_back_not_found}
          onClick={returnBackClick}
        >
          {" "}
          На главную
        </button>
      </div>
    );
  }

  return (
    <div>
      <button className={styles.cardDetail_back} onClick={returnBackClick}>
        Вернуться к списку карточек
      </button>
      <div className={styles.cardDetail}>
        <h1 className={styles.cardDetail__title}>{card.category}</h1>
        <img
          className={styles.cardDetail__img}
          src={card.image}
          alt={card.category}
        />
        <p className={styles.cardDetail__description}>{card.description}</p>
      </div>
    </div>
  );
};

export default CardDetailPage;
