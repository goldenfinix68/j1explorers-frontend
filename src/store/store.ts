import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import tourReducer from "./tour";
import { categoryApi } from "../service/categoryService";
import { faqApi } from "../service/faqService";

const store = configureStore({
  reducer: {
    user: userReducer,
    tour: tourReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [faqApi.reducerPath]: faqApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware, faqApi.middleware),
});

export default store;
