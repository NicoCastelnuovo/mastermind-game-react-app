import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface difficultyState {
  value: number;
}

const initialState: difficultyState = {
  value: 4
}

const difficultySlice = createSlice({
  name: 'difficulty',
  initialState,
  reducers: {
    increment(state) {
      if (state.value < 6) {
        state.value += 1;
      }
    },
    decrement(state) {
      if (state.value > 4) {
        state.value -= 1;
      }
    }
  }
});

// selector
export const selectDifficulty = (state: RootState) => state.difficulty.value;

// export actions and reducer
export const { increment, decrement } = difficultySlice.actions;
export default difficultySlice.reducer;