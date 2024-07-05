import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "../consts";
import { UserDetail, UserResponse } from "../type";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api_url.user.root,
    prepareHeaders: (headers) => {
      const token = localStorage.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      else localStorage.setItem("token", "");
    },
  }),
  endpoints: (builder) => ({
    fetchMe: builder.query<UserResponse, void>({
      query: () => `/me`,
    }),
    updateProfile: builder.mutation<string, UserDetail>({
      query: (profile) => ({
        url: `/me/update`,
        method: `PUT`,
        body: profile,
      }),
    }),
  }),
});

export const { useFetchMeQuery, useUpdateProfileMutation } = userApi;
