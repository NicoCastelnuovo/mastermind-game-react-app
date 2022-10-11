import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// State type
export interface BoardState {
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

const initialState: BoardState = {
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
      let { board, currentRow, isGuessed } = state;
      currentRow = 0;
      isGuessed = false;
      const { rowLength, columnLength } = action.payload;
      if (rowLength < board[0].length) {
        boardSlice.caseReducers.createRow(state, action);
      }
      if (columnLength > board.length) {
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
    incrementCurrentRow(state) {
      state.currentRow += 1;
    },
    checkAnswer(state, action: PayloadAction<R>) {
      const userAnswer = state.board[state.currentRow];
      const { secretSequence } = action.payload;
      // Blacks
      let userAnswerCopy = [...userAnswer];
      let secretSequenceCopy = [...secretSequence];
      let blackCurrentRow = 0;
      for (let i = 0; i < secretSequenceCopy.length; i++) {
        if (userAnswerCopy[i] === secretSequenceCopy[i]) {
          blackCurrentRow += 1;
          userAnswerCopy.splice(i, 1, 7);
          secretSequenceCopy.splice(i, 1, 7);
        }
      };
      state.blacks.push(blackCurrentRow)
      // Whites --- case 4644 a4444 => 3black1white
      // some cases dont work
      if (blackCurrentRow != state.board[0].length) {
        console.log(`userAnswerCopy is ${userAnswerCopy}`)
        console.log(`blacks is ${state.blacks}`)
        console.log(`secretSequenceCopy is ${secretSequenceCopy}`)
        let whiteCurrentRow = 0;
        for (let i = 0; i < userAnswerCopy.length; i++) {
          if (secretSequenceCopy.indexOf(userAnswerCopy[i]) != -1 && userAnswerCopy[i] != 7) {
            whiteCurrentRow += 1;
          }
        }
        state.whites.push(whiteCurrentRow)
        console.log(`whites is ${state.whites}`)
      }
      else {
        state.isGuessed = true;
      }
      boardSlice.caseReducers.incrementCurrentRow(state);
    },
  },
});

export const selectBoard = (state: RootState) => state.board.board;
export const selectBlacks = (state: RootState) => state.board.blacks;
export const selectWhites = (state: RootState) => state.board.whites;
export const selectCurrentRow = (state: RootState) => state.board.currentRow;
export const { createBoard, changeColor, checkAnswer } = boardSlice.actions;
export default boardSlice.reducer;