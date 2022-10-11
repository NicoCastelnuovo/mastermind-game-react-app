import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface difficultyState {
  rowLength: number;
  columnLength: number;
}

const initialState: difficultyState = {
  rowLength: 4,
  columnLength: 8
}

const difficultySlice = createSlice({
  name: 'difficulty',
  initialState,
  reducers: {
    increment (state, action: PayloadAction<string>) {
      if (action.payload === 'Row') {
        if (state.rowLength < 6) state.rowLength += 1;
      } else {
        if (state.columnLength < 10) state.columnLength += 1;
      }
    },
    decrement (state, action: PayloadAction<string>) {
      if (action.payload === 'Row') {
        if (state.rowLength > 4) state.rowLength -= 1;
      } else {
        if (state.columnLength > 6) state.columnLength -= 1;
      }
    },
  }
});

// selectors
export const selectDifficulty = (state: RootState) => state.difficulty;
export const selectDifficultyRow = (state: RootState) => state.difficulty.rowLength;
export const selectDifficultyColumn = (state: RootState) => state.difficulty.columnLength;

// export actions and reducer
export const { increment, decrement } = difficultySlice.actions;
export default difficultySlice.reducer;