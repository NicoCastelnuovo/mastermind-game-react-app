import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// State type
export interface boardState {
  board: number[][];
}

// Payload types
type P = {
  rowLength: number;
  columnLength: number;
};

const initialState: boardState = {
  board: 
  [
    [0, 0, 0, 0, 0, 0],
  ]
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    createRow(state, action: PayloadAction<P>) {
      const { rowLength } = action.payload;
      state.board[0].length = rowLength;
    },
    createColumn(state, action: PayloadAction<P>) {
      const { columnLength } = action.payload;
      let index = state.board.length;
      for (index; index != columnLength; index++) {
        state.board.push(state.board[0])
      }
    },
    createBoard(state, action: PayloadAction<P>) {
      const { rowLength, columnLength } = action.payload;
      if (rowLength < state.board[0].length) {
        boardSlice.caseReducers.createRow(state, action);
      }
      if (columnLength > state.board.length) {
        boardSlice.caseReducers.createColumn(state, action);
      }
    },
    increment(state, action: PayloadAction<number>) {
    },
  }
});

export const selectBoard = (state: RootState) => state.board.board;
export const { createBoard, increment } = boardSlice.actions;
export default boardSlice.reducer;