import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { toggleShowFavorites } from "../slices/visibilitySlice";
import styles from "./ToggleButton.module.css";

const ToggleButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const showFavoritesOnly = useAppSelector(
    (state) => state.visibility.showFavorites
  );

  const handleClick = () => {
    dispatch(toggleShowFavorites());
  };

  return (
    <button className={styles.toggleButton} onClick={handleClick}>
      {showFavoritesOnly ? "Показать все" : "Показать избранные"}
    </button>
  );
};

export default ToggleButton;
