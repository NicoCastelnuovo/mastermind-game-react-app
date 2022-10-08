import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface rowState {
  value: number[]
}

const initialState: rowState = {
  value: [0, 0, 0, 0]
}

const rowSlice = createSlice({
  name: 'row',
  initialState,
  reducers: {
    createRow(state, action: PayloadAction<number>) {
      for (let i = state.value.length; i != action.payload; i++) {
        state.value.push(0);
      }
    },
    increment(state, action: PayloadAction<number>) {
      const index = action.payload;
      if (state.value[index] < 6) {
        state.value[index] += 1;
      }
      else {
        state.value[index] = 0;
      }
    }
  }
});

export const { createRow, increment } = rowSlice.actions;
export default rowSlice.reducer;
export const selectRow = (state: RootState) => state.row.value;