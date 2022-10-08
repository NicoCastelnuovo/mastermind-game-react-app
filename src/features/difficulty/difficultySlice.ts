import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface difficultyState {
  row: number;
  column: number;
}

const initialState: difficultyState = {
  row: 4,
  column: 8
}

const difficultySlice = createSlice({
  name: 'difficulty',
  initialState,
  reducers: {
    incrementRow(state) {
      if (state.row < 6) {
        state.row += 1;
      }
    },
    decrementRow(state) {
      if (state.row > 4) {
        state.row -= 1;
      }
    },
    incrementColumn(state) {
      if (state.column < 10) {
        state.column += 1;
      }
    },
    decrementColumn(state) {
      if (state.column > 6) {
        state.column -= 1;
      }
    }
  }
});

// selector
export const selectDifficulty = (state: RootState) => state.difficulty;
export const selectDifficultyRow = (state: RootState) => state.difficulty.row;
export const selectDifficultyColumn = (state: RootState) => state.difficulty.column;

// export actions and reducer
export const { incrementRow, decrementRow, incrementColumn, decrementColumn } = difficultySlice.actions;
export default difficultySlice.reducer;