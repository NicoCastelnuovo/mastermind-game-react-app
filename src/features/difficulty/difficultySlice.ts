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
    incrementRow(state) {
      if (state.rowLength < 6) {
        state.rowLength += 1;
      }
    },
    decrementRow(state) {
      if (state.rowLength > 4) {
        state.rowLength -= 1;
      }
    },
    incrementColumn(state) {
      if (state.columnLength < 10) {
        state.columnLength += 1;
      }
    },
    decrementColumn(state) {
      if (state.columnLength > 6) {
        state.columnLength -= 1;
      }
    }
  }
});

// selector
export const selectDifficulty = (state: RootState) => state.difficulty;
export const selectDifficultyRow = (state: RootState) => state.difficulty.rowLength;
export const selectDifficultyColumn = (state: RootState) => state.difficulty.columnLength;

// export actions and reducer
export const { incrementRow, decrementRow, incrementColumn, decrementColumn } = difficultySlice.actions;
export default difficultySlice.reducer;