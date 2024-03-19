import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./catalogSlice";

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});