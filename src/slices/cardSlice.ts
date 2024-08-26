import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../models/ICard";

const initialState: ICard[] = [];

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<ICard[]>) => {
      return action.payload;
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      return state.filter((card) => card.id !== action.payload);
    },
  },
});

export const { setCards, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;
