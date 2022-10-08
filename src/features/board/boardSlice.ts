import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface boardState {
  [row: number]: number[];
}

const initialState: boardState = {
  0: [0, 0, 0, 0],
  1: [0, 0, 0, 0],
  2: [0, 0, 0, 0],
  3: [0, 0, 0, 0],
  4: [0, 0, 0, 0],
  5: [0, 0, 0, 0],
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    createRow(state, action: PayloadAction<number>) {
    },
    createColumn(state, action: PayloadAction<number>) {
    },
    createBoard() {

    },
    increment(state, action: PayloadAction<number>) {
    },
  }
});

export const selectBoard = (state: RootState) => state.board;
export const { createBoard, increment } = boardSlice.actions;
export default boardSlice.reducer;