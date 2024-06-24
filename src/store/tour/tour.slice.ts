import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tour, Route, Period } from "./tour.type";

const initialState: Tour = {
  period: { from: new Date("2024-09-03"), to: new Date("2024-09-07") },
  route: { from: "LA", to: "NYC" },
};
const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<Route>) => {
      state.route = action.payload;
    },
    setPeriod: (state, action: PayloadAction<Period>) => {
      state.period = action.payload;
    },
  },
});

export default tourSlice;
