import { configureStore } from "@reduxjs/toolkit";
import { uiControlsReducer } from "./uiControls.slice";

export const store = configureStore({
  reducer: {
    uiControls: uiControlsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
