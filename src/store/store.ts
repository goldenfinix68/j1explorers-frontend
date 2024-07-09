import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import tourReducer from "./tour";
import directionReducer from "./direction";
import { categoryApi } from "../service/categoryService";
import { faqApi } from "../service/faqService";
import { userApi } from "../service/userService";
import { tourApi } from "../service/tourService";
import { scheduleApi } from "../service/scheduleService";

const store = configureStore({
  reducer: {
    user: userReducer,
    tour: tourReducer,
    direction: directionReducer,
    [userApi.reducerPath]: userApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [faqApi.reducerPath]: faqApi.reducer,
    [tourApi.reducerPath]: tourApi.reducer,
    [scheduleApi.reducerPath]: scheduleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      categoryApi.middleware,
      faqApi.middleware,
      tourApi.middleware,
      scheduleApi.middleware
    ),
});

export default store;
