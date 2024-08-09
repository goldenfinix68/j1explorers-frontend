import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Direction } from "../../type";

const initialState: Direction = 1;
const directionSlice: Slice<Direction> = createSlice({
  name: "direction",
  initialState: initialState as Direction,
  reducers: {
    setDirection: (state, action: PayloadAction<Direction>): Direction => {
      return action.payload;
    },
  },
});

export const { setDirection } = directionSlice.actions;
export default directionSlice;
