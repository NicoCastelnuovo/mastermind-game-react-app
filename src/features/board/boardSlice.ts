import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// State type
export interface boardState {
  board: number[][];
  currentRow: number;
  blacks: number[];
  whites: number[];
  isGuessed: boolean;
}

// Payload types
type P = {
  rowLength: number;
  columnLength: number;
};
type Q = {
  rowIndex: number;
  dotIndex: number;
}
type R = {
  secretSequence: number[];
}

const initialState: boardState = {
  board: 
  [
    [0, 0, 0, 0, 0, 0],
  ],
  currentRow: 0,
  blacks: [],
  whites: [],
  isGuessed: false
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
      state.currentRow = 0;
      state.isGuessed = false;
      const { rowLength, columnLength } = action.payload;
      if (rowLength < state.board[0].length) {
        boardSlice.caseReducers.createRow(state, action);
      }
      if (columnLength > state.board.length) {
        boardSlice.caseReducers.createColumn(state, action);
      }
    },
    changeColor(state, action: PayloadAction<Q>) {
      const { rowIndex, dotIndex } = action.payload;
      if (state.currentRow === rowIndex) {
        if (state.board[rowIndex][dotIndex] < 6) {
          state.board[rowIndex][dotIndex] += 1;
        }
        else {
          state.board[rowIndex][dotIndex] = 0;
        }
      }
    },
    changeCurrentRow(state) {
      state.currentRow += 1;
    },
    checkAnswer(state, action: PayloadAction<R>) {
      const userAnswer = state.board[state.currentRow];
      const { secretSequence } = action.payload;
      console.log(`SecretSequence is: ${secretSequence}`) // 1312
      console.log(`userAnswer is: ${userAnswer}`) // 1451
      // Blacks
      let blackCurrentRow = 0;
      for (let i = 0; i < secretSequence.length; i++) {
        if (userAnswer[i] === secretSequence[i]) {
          blackCurrentRow += 1;
        }
      };
      state.blacks.push(blackCurrentRow)
      console.log(`BlackCurrent are ${blackCurrentRow}`)
      // Whites
      let userAnswerCopy = [...userAnswer];
      let whiteCurrentRow = 0;
      for (let i = 0; i < secretSequence.length; i++) {
        if (secretSequence.indexOf(userAnswerCopy[i]) != -1) {
          userAnswerCopy.splice(i, 1);
          whiteCurrentRow += 1;
        }
      }
      state.whites.push(whiteCurrentRow);
      console.log(`WhiteCurrent are ${whiteCurrentRow}`)
      // if (state.blacks === state.board[0].length) {
      //   console.log('VICTORY!')
      //   state.isGuessed = true;
      //   state.currentRow = 99;
      // }
      boardSlice.caseReducers.changeCurrentRow(state);
    },
  },
});

export const selectBoard = (state: RootState) => state.board.board;
export const selectBlacks = (state: RootState) => state.board.blacks;
export const selectWhites = (state: RootState) => state.board.whites;
export const { createBoard, changeColor, checkAnswer } = boardSlice.actions;
export default boardSlice.reducer;