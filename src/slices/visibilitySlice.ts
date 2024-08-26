import { createSlice } from "@reduxjs/toolkit";

interface ViibilityState {
  showFavorites: boolean;
}

const initialState: ViibilityState = {
  showFavorites: false,
};

const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    toggleShowFavorites: (state) => {
      state.showFavorites = !state.showFavorites;
    },
  },
});

export const { toggleShowFavorites } = visibilitySlice.actions;
export default visibilitySlice.reducer;
