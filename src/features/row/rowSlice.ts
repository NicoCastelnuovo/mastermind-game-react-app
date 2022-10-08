import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/types/setup/directApi";
import { RootState } from "../../app/store";

export interface rowState {
  value: [number, number, number, number, number?, number?]
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
      // increment the clicked dot
      const index = action.payload;
      // Narrowing with 'undefined' doesnt' work
    }
  }
});

export const { createRow, increment } = rowSlice.actions;
export default rowSlice.reducer;
export const selectRow = (state: RootState) => state.row.value;