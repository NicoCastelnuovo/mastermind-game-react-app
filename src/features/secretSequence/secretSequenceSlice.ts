import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface secretSequenceState {
  value: number[];
}

const initialState: secretSequenceState = {
  value: []
}

const secretSequenceSlice = createSlice({
  name: 'secretSequence',
  initialState,
  reducers: {
    createNewSequence(state, action: PayloadAction<number>) {
      state.value = [];
      const sequenceLength = action.payload;
      for (let i = 0; i < sequenceLength; i++) {
        const randomNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1); // numbers between 1 & 6 inclusive
        state.value = [...state.value, randomNumber];
      }
    },
  }
});

export const { createNewSequence } = secretSequenceSlice.actions;
export default secretSequenceSlice.reducer;
export const selectSecretSequence = (state: RootState) => state.secretSequence.value;