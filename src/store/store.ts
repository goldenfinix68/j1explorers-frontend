import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import tourReducer from "./tour";
import { categoryApi } from "../service/categoryService";
import { faqApi } from "../service/faqService";
import { userApi } from "../service/userService";

const store = configureStore({
  reducer: {
    user: userReducer,
    tour: tourReducer,
    [userApi.reducerPath]: userApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [faqApi.reducerPath]: faqApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      categoryApi.middleware,
      faqApi.middleware
    ),
});

export default store;
