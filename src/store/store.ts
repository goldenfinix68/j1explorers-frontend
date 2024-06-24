import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import tourReducer from "./tour";
const store = configureStore({
  reducer: {
    user: userReducer,
    tour: tourReducer,
  },
});

export default store;
