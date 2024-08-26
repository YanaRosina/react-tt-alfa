import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cardAPI } from "../services/CardService";
import cardReducer from "../slices/cardSlice";
import favoriteReducer from "../slices/favoriteSlice";
import visibilityReducer from "../slices/visibilitySlice";

const rootReducer = combineReducers({
  [cardAPI.reducerPath]: cardAPI.reducer,
  cards: cardReducer,
  favorites: favoriteReducer,
  visibility: visibilityReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cardAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
