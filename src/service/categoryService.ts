import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "../consts";
import { CategoriesResponse } from "../type";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api_url.category.root,
    prepareHeaders: (headers) => {
      const token = localStorage.token;
      if (token) headers.set("Authorization", token);
    },
  }),
  endpoints: (builder) => ({
    fetchCategories: builder.query<CategoriesResponse, void>({
      query: () => `/fetchCategories`,
    }),
  }),
});

export const { useFetchCategoriesQuery } = categoryApi;
