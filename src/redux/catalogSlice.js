import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./operations";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isFavorite: [],
  },
  reducers: {
    addToFavorite(state, action) {
      state.isFavorite = action.payload;
    },
    removeFromFavorite(state, action) {
      state.isFavorite = state.isFavorite.filter((item) => item._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
export const { addToFavorite, removeFromFavorite } = catalogSlice.actions;
