import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "../consts";
import {
  LoginResponse,
  UserDetail,
  UserResponse,
  Credentials,
  PasswordUpdate,
  APIResult,
} from "../type";

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
    isAllowedBiometrics: builder.query<APIResult, void>({
      query: () => `/fingerprint`,
    }),
    updateProfile: builder.mutation<UserResponse, UserDetail>({
      query: (profile) => ({
        url: `/me/update`,
        method: `PUT`,
        body: profile,
      }),
    }),
    changePassword: builder.mutation<APIResult, PasswordUpdate>({
      query: (passwordUpdate) => ({
        url: `/me/changePassword`,
        method: `PUT`,
        body: passwordUpdate,
      }),
    }),
  }),
});

export const {
  useFetchMeQuery,
  useIsAllowedBiometricsQuery,
  useUpdateProfileMutation,
  useLoginMutation,
  useChangePasswordMutation,
} = userApi;
