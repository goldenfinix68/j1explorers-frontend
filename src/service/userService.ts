import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "../consts";
import { LoginResponse, UserDetail, UserResponse, Credentials } from "../type";

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
    login: builder.mutation<LoginResponse, Credentials>({
      query: (credential) => ({
        url: "/login",
        method: "POST",
        body: credential,
      }),
    }),
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

export const { useFetchMeQuery, useUpdateProfileMutation, useLoginMutation } =
  userApi;
