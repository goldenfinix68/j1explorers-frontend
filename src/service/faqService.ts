import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "../consts";
import { Faq, FaqsResponse } from "../type";

export const faqApi = createApi({
  reducerPath: "faqApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api_url.faq.root,
    prepareHeaders: (headers) => {
      const token = localStorage.token;
      if (token) headers.set("Authorization", token);
    },
  }),
  endpoints: (builder) => ({
    fetchFaqsByCategory: builder.query<FaqsResponse, number>({
      query: (category) => `/fetchFaqsByCategory?category=${category}`,
    }),
    fetchFaqById: builder.query<Faq, number>({
      query: (id) => `/fetchFaq?id=${id}`,
    }),
  }),
});

export const { useFetchFaqsByCategoryQuery, useFetchFaqByIdQuery } = faqApi;
