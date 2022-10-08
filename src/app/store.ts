import { configureStore } from "@reduxjs/toolkit";
import difficultyReducer from "../features/difficulty/difficultySlice";
import rowReducer from "../features/row/rowSlice";
import secretSequenceReducer from "../features/secretSequence/secretSequenceSlice";

const store = configureStore({
  reducer: {
    difficulty: difficultyReducer,
    secretSequence: secretSequenceReducer,
    row: rowReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;